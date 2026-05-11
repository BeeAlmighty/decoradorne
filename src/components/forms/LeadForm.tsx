'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, ArrowRight } from 'lucide-react';
import { leadSchema, EVENT_TYPES, type LeadFormData } from '@/lib/schemas/lead';

interface LeadFormProps {
  defaultEventType?: string;
  compact?: boolean;
}

export function LeadForm({ defaultEventType, compact = false }: LeadFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: '',
      phone: '',
      date: '',
      vision: '',
      ...(defaultEventType
        ? { eventType: defaultEventType as LeadFormData['eventType'] }
        : {}),
    },
  });

  const onSubmit = async (data: LeadFormData) => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Submission failed');

      const json = (await res.json()) as { waUrl: string };
      window.location.href = json.waUrl;
    } catch {
      setError('Something went wrong. Please try WhatsApp directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    'w-full bg-[#FAF7F4] border border-[#E8E0D8] rounded-xl px-4 py-3.5 text-sm text-[#1A1410] placeholder-[#1A1410]/30 focus:outline-none focus:border-[#C9A96E] transition-colors';
  const labelClass = 'block text-xs font-medium text-[#1A1410]/60 mb-1.5 tracking-wide';
  const errorClass = 'text-xs text-[#D4878A] mt-1';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      {/* Name + Phone */}
      <div className={`grid gap-5 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name *
          </label>
          <input
            id="name"
            type="text"
            placeholder="Fatima Abubakar"
            autoComplete="name"
            className={inputClass}
            {...register('name')}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone number *
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+234 800 000 0000"
            autoComplete="tel"
            className={inputClass}
            {...register('phone')}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
      </div>

      {/* Event Type + Date */}
      <div className={`grid gap-5 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label htmlFor="eventType" className={labelClass}>
            Event type *
          </label>
          <select
            id="eventType"
            className={`${inputClass} cursor-pointer`}
            {...register('eventType')}
          >
            <option value="" disabled>
              Select your event...
            </option>
            {EVENT_TYPES.map((et) => (
              <option key={et.value} value={et.value}>
                {et.label}
              </option>
            ))}
          </select>
          {errors.eventType && <p className={errorClass}>{errors.eventType.message}</p>}
        </div>
        <div>
          <label htmlFor="date" className={labelClass}>
            Event date *
          </label>
          <input
            id="date"
            type="date"
            className={inputClass}
            {...register('date')}
          />
          {errors.date && <p className={errorClass}>{errors.date.message}</p>}
        </div>
      </div>

      {/* Vision */}
      <div>
        <label htmlFor="vision" className={labelClass}>
          Tell us your vision *
        </label>
        <textarea
          id="vision"
          rows={compact ? 3 : 4}
          placeholder="Describe your dream event — colours, theme, venue, number of guests..."
          className={`${inputClass} resize-none`}
          {...register('vision')}
        />
        {errors.vision && <p className={errorClass}>{errors.vision.message}</p>}
      </div>

      {error && (
        <p className="text-sm text-[#D4878A] bg-[#D4878A]/10 px-4 py-3 rounded-xl">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center gap-2 bg-[#C9A96E] text-[#FAF7F4] font-medium px-8 py-4 rounded-full hover:bg-[#A8834A] disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-sm"
      >
        {submitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Preparing your quote...
          </>
        ) : (
          <>
            Request a quote
            <ArrowRight size={16} />
          </>
        )}
      </button>

      <p className="text-xs text-[#1A1410]/40 text-center">
        You&rsquo;ll be taken to WhatsApp to finalise your enquiry.
      </p>
    </form>
  );
}
