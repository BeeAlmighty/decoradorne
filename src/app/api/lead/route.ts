import { NextRequest, NextResponse } from 'next/server';
import { leadSchema } from '@/lib/schemas/lead';
import { buildLeadWhatsAppUrl } from '@/lib/whatsapp';

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const result = leadSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: 'Validation failed', issues: result.error.issues },
      { status: 422 },
    );
  }

  const { name, phone, eventType, date, vision } = result.data;

  // Forward to n8n webhook if configured
  const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
  if (webhookUrl && webhookUrl.startsWith('https://')) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, eventType, date, vision, source: 'website' }),
      });
    } catch {
      // fail silently — WhatsApp redirect still works
    }
  }

  const waUrl = buildLeadWhatsAppUrl({ name, eventType, date, vision });

  return NextResponse.json({ waUrl }, { status: 200 });
}
