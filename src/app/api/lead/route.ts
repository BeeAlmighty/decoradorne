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

  const data = result.data;

  const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
  if (webhookUrl && webhookUrl.startsWith('https://')) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          source:      'website',
          submittedAt: new Date().toISOString(),
        }),
      });
    } catch {
      // fail silently — WhatsApp redirect still works
    }
  }

  return NextResponse.json({ waUrl: buildLeadWhatsAppUrl(data) }, { status: 200 });
}
