'use client';

import { Fragment, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, Loader2, Check, Minus, Plus } from 'lucide-react';
import {
  leadSchema,
  EVENT_TYPES,
  VENUE_SETTINGS,
  VENUE_LEVELS,
  LIGHTING_OPTIONS,
  type LeadFormData,
} from '@/lib/schemas/lead';

// ─── Shared style tokens ──────────────────────────────────────────────────────

const INPUT =
  'w-full bg-[#FAF7F4] border border-[#E8E0D8] rounded-xl px-4 py-3.5 text-sm text-[#1A1410] placeholder-[#1A1410]/30 focus:outline-none focus:border-[#C9A96E] focus:ring-2 focus:ring-[#C9A96E]/10 transition-all duration-200';

const LABEL =
  'block text-[10px] font-medium text-[#1A1410]/50 mb-2 tracking-[0.14em] uppercase';

const ERR = 'text-[11px] text-[#D4878A] mt-1.5 flex items-center gap-1';

// ─── Step progress indicator ──────────────────────────────────────────────────

function StepProgress({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center mb-7" role="progressbar" aria-valuenow={current + 1} aria-valuemax={total}>
      {Array.from({ length: total }).map((_, i) => (
        <Fragment key={i}>
          <div
            className={`relative w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-300 ${
              i <= current
                ? 'bg-[#C9A96E] border-[#C9A96E]'
                : 'bg-[#FAF7F4] border-[#E8E0D8]'
            }`}
          >
            {i < current && (
              <Check size={11} strokeWidth={3} className="text-[#FAF7F4]" />
            )}
            {i === current && (
              <span className="w-[7px] h-[7px] rounded-full bg-[#FAF7F4]" />
            )}
          </div>
          {i < total - 1 && (
            <div
              className={`flex-1 h-px transition-all duration-500 ${
                i < current ? 'bg-[#C9A96E]' : 'bg-[#E8E0D8]'
              }`}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}

// ─── Pill select (Indoor/Outdoor, Venue level, Lighting) ─────────────────────

function PillSelect({
  options,
  value,
  onChange,
  cols = 2,
  deselectable = false,
}: {
  options: readonly { value: string; label: string }[];
  value: string | undefined;
  onChange: (v: string | undefined) => void;
  cols?: 2 | 3;
  deselectable?: boolean;
}) {
  return (
    <div className={`grid gap-2 ${cols === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
      {options.map((opt) => {
        const active = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(deselectable && active ? undefined : opt.value)}
            className={`py-2.5 px-3 rounded-xl border text-sm font-medium transition-all duration-200 text-center leading-snug focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E]/50 ${
              active
                ? 'bg-[#C9A96E] border-[#C9A96E] text-[#FAF7F4] shadow-sm'
                : 'bg-transparent border-[#E8E0D8] text-[#1A1410]/60 hover:border-[#C9A96E]/50 hover:text-[#1A1410]'
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

// ─── Guest count stepper ──────────────────────────────────────────────────────

function GuestStepper({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const decrement = () => onChange(Math.max(0, value - 10));
  const increment = () => onChange(value === 0 ? 10 : value + 10);

  return (
    <div className="flex items-center border border-[#E8E0D8] rounded-xl overflow-hidden focus-within:border-[#C9A96E] transition-colors">
      <button
        type="button"
        onClick={decrement}
        disabled={value <= 0}
        aria-label="Decrease guest count"
        className="px-4 py-3.5 text-[#1A1410]/50 hover:text-[#C9A96E] hover:bg-[#F2EDE8] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <Minus size={14} />
      </button>

      <input
        type="number"
        value={value || ''}
        onChange={(e) => {
          const n = parseInt(e.target.value, 10);
          onChange(isNaN(n) ? 0 : Math.min(10_000, Math.max(0, n)));
        }}
        placeholder="Guests"
        min={1}
        max={10000}
        className="flex-1 text-center text-sm font-medium text-[#1A1410] bg-transparent border-x border-[#E8E0D8] py-3.5 focus:outline-none placeholder-[#1A1410]/25"
      />

      <button
        type="button"
        onClick={increment}
        aria-label="Increase guest count"
        className="px-4 py-3.5 text-[#1A1410]/50 hover:text-[#C9A96E] hover:bg-[#F2EDE8] transition-colors"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}

// ─── Step metadata ────────────────────────────────────────────────────────────

const STEPS = [
  { title: 'About you',    sub: "Let's start with the basics."   },
  { title: 'Your event',   sub: 'Tell us about the occasion.'    },
  { title: 'The venue',    sub: 'Where will the magic happen?'   },
  { title: 'Your vision',  sub: 'Paint us the picture.'          },
] as const;

// Fields validated per step (optional fields are excluded — they pass freely)
const STEP_FIELDS: Record<number, (keyof LeadFormData)[]> = {
  0: ['name', 'phone'],
  1: ['eventType', 'date'],
  2: ['location', 'venueSetting', 'guestCount'],
  3: ['lightingSourcing', 'vision'],
};

// Framer Motion slide variants
const slide = {
  enter: (d: number) => ({ x: d > 0 ? 30 : -30, opacity: 0 }),
  center:              { x: 0, opacity: 1 },
  exit:  (d: number) => ({ x: d > 0 ? -30 : 30, opacity: 0 }),
};

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

// ─── Main component ───────────────────────────────────────────────────────────

interface LeadFormProps {
  defaultEventType?: string;
  compact?: boolean;
}

export function LeadForm({ defaultEventType, compact = false }: LeadFormProps) {
  const [step, setStep]         = useState(0);
  const [dir, setDir]           = useState(1);
  const [submitting, setSubmit] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const today = new Date().toISOString().split('T')[0];

  const {
    register,
    handleSubmit,
    trigger,
    control,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    mode: 'onBlur',
    defaultValues: {
      name:      '',
      phone:     '',
      date:      '',
      startTime: '',
      endTime:   '',
      location:  '',
      vision:    '',
      guestCount: 0,
      ...(defaultEventType
        ? { eventType: defaultEventType as LeadFormData['eventType'] }
        : {}),
    },
  });

  const advance = async () => {
    const ok = await trigger(STEP_FIELDS[step] as Parameters<typeof trigger>[0]);
    if (!ok) return;
    setDir(1);
    setStep((s) => s + 1);
  };

  const retreat = () => {
    setDir(-1);
    setStep((s) => s - 1);
  };

  const onSubmit = async (data: LeadFormData) => {
    setSubmit(true);
    setApiError(null);
    try {
      const res = await fetch('/api/lead', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      const json = (await res.json()) as { waUrl: string };
      window.location.href = json.waUrl;
    } catch {
      setApiError('Something went wrong. Please reach us on WhatsApp directly.');
    } finally {
      setSubmit(false);
    }
  };

  return (
    <div>
      <StepProgress current={step} total={4} />

      <div className="overflow-hidden">
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={step}
          custom={dir}
          variants={slide}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.22, ease: EASE }}
        >
          {/* Step header */}
          <div className="mb-5">
            <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#C9A96E] mb-1">
              Step {step + 1} of 4
            </p>
            <h3
              className={`font-display font-light text-[#1A1410] leading-tight ${
                compact ? 'text-2xl' : 'text-[clamp(1.6rem,3vw,2.2rem)]'
              }`}
            >
              {STEPS[step].title}
            </h3>
            <p className="text-sm text-[#1A1410]/45 mt-0.5">{STEPS[step].sub}</p>
          </div>

          {/* ── Step 1: About you ──────────────────────────────────── */}
          {step === 0 && (
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className={LABEL}>Full name *</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Fatima Abubakar"
                  autoComplete="name"
                  className={INPUT}
                  {...register('name')}
                />
                {errors.name && <p className={ERR}>{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="phone" className={LABEL}>Phone number *</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+234 800 000 0000"
                  autoComplete="tel"
                  className={INPUT}
                  {...register('phone')}
                />
                {errors.phone && <p className={ERR}>{errors.phone.message}</p>}
              </div>
            </div>
          )}

          {/* ── Step 2: Your event ─────────────────────────────────── */}
          {step === 1 && (
            <div className="flex flex-col gap-4">
              <div>
                <label className={LABEL}>Event type *</label>
                <Controller
                  control={control}
                  name="eventType"
                  render={({ field }) => (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {EVENT_TYPES.map((et) => {
                        const active = field.value === et.value;
                        return (
                          <button
                            key={et.value}
                            type="button"
                            onClick={() => field.onChange(et.value)}
                            className={`py-2 px-3 rounded-xl border text-[13px] font-medium transition-all duration-200 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E]/50 ${
                              active
                                ? 'bg-[#C9A96E] border-[#C9A96E] text-[#FAF7F4] shadow-sm'
                                : 'bg-transparent border-[#E8E0D8] text-[#1A1410]/60 hover:border-[#C9A96E]/50 hover:text-[#1A1410]'
                            }`}
                          >
                            {et.short}
                          </button>
                        );
                      })}
                    </div>
                  )}
                />
                {errors.eventType && (
                  <p className={ERR}>{errors.eventType.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="date" className={LABEL}>Event date *</label>
                <input
                  id="date"
                  type="date"
                  min={today}
                  className={INPUT}
                  {...register('date')}
                />
                {errors.date && <p className={ERR}>{errors.date.message}</p>}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="startTime" className={LABEL}>
                    Start time{' '}
                    <span className="text-[#1A1410]/25 normal-case tracking-normal font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="startTime"
                    type="time"
                    className={INPUT}
                    {...register('startTime')}
                  />
                </div>
                <div>
                  <label htmlFor="endTime" className={LABEL}>
                    End time{' '}
                    <span className="text-[#1A1410]/25 normal-case tracking-normal font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="endTime"
                    type="time"
                    className={INPUT}
                    {...register('endTime')}
                  />
                </div>
              </div>
            </div>
          )}

          {/* ── Step 3: The venue ──────────────────────────────────── */}
          {step === 2 && (
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="location" className={LABEL}>City / Area *</label>
                <input
                  id="location"
                  type="text"
                  placeholder="Victoria Island, Lagos"
                  className={INPUT}
                  {...register('location')}
                />
                {errors.location && (
                  <p className={ERR}>{errors.location.message}</p>
                )}
              </div>

              <div>
                <label className={LABEL}>Venue setting *</label>
                <Controller
                  control={control}
                  name="venueSetting"
                  render={({ field }) => (
                    <PillSelect
                      options={VENUE_SETTINGS}
                      value={field.value}
                      onChange={(v) => field.onChange(v)}
                    />
                  )}
                />
                {errors.venueSetting && (
                  <p className={ERR}>{errors.venueSetting.message}</p>
                )}
              </div>

              <div>
                <label className={LABEL}>
                  Venue level{' '}
                  <span className="text-[#1A1410]/25 normal-case tracking-normal font-normal">
                    (optional)
                  </span>
                </label>
                <Controller
                  control={control}
                  name="venueLevel"
                  render={({ field }) => (
                    <PillSelect
                      options={VENUE_LEVELS}
                      value={field.value}
                      onChange={(v) => field.onChange(v)}
                      cols={3}
                      deselectable
                    />
                  )}
                />
              </div>

              <div>
                <label className={LABEL}>Number of guests *</label>
                <Controller
                  control={control}
                  name="guestCount"
                  render={({ field }) => (
                    <GuestStepper
                      value={field.value ?? 0}
                      onChange={field.onChange}
                    />
                  )}
                />
                {errors.guestCount && (
                  <p className={ERR}>{errors.guestCount.message}</p>
                )}
              </div>
            </div>
          )}

          {/* ── Step 4: Your vision ────────────────────────────────── */}
          {step === 3 && (
            <div className="flex flex-col gap-4">
              <div>
                <label className={LABEL}>Professional lighting *</label>
                <p className="text-xs text-[#1A1410]/40 mb-2 leading-relaxed">
                  Should we source a lighting company, or will you handle it?
                </p>
                <Controller
                  control={control}
                  name="lightingSourcing"
                  render={({ field }) => (
                    <PillSelect
                      options={LIGHTING_OPTIONS}
                      value={field.value}
                      onChange={(v) => field.onChange(v)}
                    />
                  )}
                />
                {errors.lightingSourcing && (
                  <p className={ERR}>{errors.lightingSourcing.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="vision" className={LABEL}>
                  Concept &amp; design brief *
                </label>
                <textarea
                  id="vision"
                  rows={compact ? 4 : 5}
                  placeholder="Describe your vision — colours, theme, mood, inspiration. The more you share, the better we can bring it to life."
                  className={`${INPUT} resize-none`}
                  {...register('vision')}
                />
                {errors.vision && (
                  <p className={ERR}>{errors.vision.message}</p>
                )}
              </div>

              {apiError && (
                <p className="text-sm text-[#D4878A] bg-[#D4878A]/10 px-4 py-3 rounded-xl">
                  {apiError}
                </p>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      </div>

      {/* ── Navigation ─────────────────────────────────────────────── */}
      <div className="flex items-center justify-between mt-7 pt-5 border-t border-[#E8E0D8]">
        <button
          type="button"
          onClick={retreat}
          className={`flex items-center gap-1.5 text-sm font-medium text-[#1A1410]/45 hover:text-[#1A1410] transition-colors ${
            step === 0 ? 'invisible pointer-events-none' : ''
          }`}
        >
          <ChevronLeft size={15} />
          Back
        </button>

        {step < 3 ? (
          <button
            type="button"
            onClick={advance}
            className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#FAF7F4] font-medium px-6 py-3 rounded-full hover:bg-[#A8834A] transition-colors text-sm"
          >
            Continue
            <ArrowRight size={14} />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            disabled={submitting}
            className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#FAF7F4] font-medium px-7 py-3 rounded-full hover:bg-[#A8834A] disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-sm"
          >
            {submitting ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                Preparing your quote…
              </>
            ) : (
              <>
                Request a quote
                <ArrowRight size={14} />
              </>
            )}
          </button>
        )}
      </div>

      <p className="text-[11px] text-[#1A1410]/30 text-center mt-4">
        You&rsquo;ll be taken to WhatsApp to finalise your enquiry.
      </p>
    </div>
  );
}
