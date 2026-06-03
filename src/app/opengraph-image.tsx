import { ImageResponse } from 'next/og';
import { LOGO_LOCKUP_CREAM, LOGO_LOCKUP_RATIO } from '@/lib/logo-data';

export const alt = 'Decor Adorne: Arabian-Inspired Luxury Event Decor';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const STATS = [
  { v: '500+', l: 'Events' },
  { v: '8+',   l: 'Years'  },
  { v: '4.9/5', l: 'Rating' },
];

const LOCKUP_W = 500;
const LOCKUP_H = Math.round(LOCKUP_W / LOGO_LOCKUP_RATIO);

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: 1200,
        height: 630,
        background: '#1A1410',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top-right warm glow */}
      <div
        style={{
          position: 'absolute',
          top: -180,
          right: -120,
          width: 580,
          height: 580,
          background: 'linear-gradient(135deg, rgba(201,169,110,0.13) 0%, transparent 65%)',
          borderRadius: '50%',
          display: 'flex',
        }}
      />

      {/* Bottom-left warm accent */}
      <div
        style={{
          position: 'absolute',
          bottom: -120,
          left: 280,
          width: 440,
          height: 320,
          background: 'linear-gradient(45deg, rgba(201,169,110,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          display: 'flex',
        }}
      />

      {/* Vertical separator line */}
      <div
        style={{
          position: 'absolute',
          right: 240,
          top: 56,
          bottom: 56,
          width: 1,
          background: 'rgba(201,169,110,0.18)',
          display: 'flex',
        }}
      />

      {/* ── Main left panel ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 80px',
          flex: 1,
        }}
      >
        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {/* Gold diamond marker */}
          <div
            style={{
              width: 14,
              height: 14,
              transform: 'rotate(45deg)',
              border: '1.5px solid rgba(201,169,110,0.55)',
              background: 'rgba(201,169,110,0.10)',
              display: 'flex',
            }}
          />
          <div
            style={{
              width: 1,
              height: 26,
              background: 'rgba(201,169,110,0.22)',
              display: 'flex',
            }}
          />
          <span
            style={{
              color: 'rgba(201,169,110,0.60)',
              fontSize: 12,
              fontFamily: 'system-ui, sans-serif',
              letterSpacing: '0.22em',
              textTransform: 'uppercase' as const,
              fontWeight: 500,
            }}
          >
            Arabian-Inspired · Across Nigeria
          </span>
        </div>

        {/* Real Decor Adorné logo lockup */}
        <div style={{ display: 'flex' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO_LOCKUP_CREAM} width={LOCKUP_W} height={LOCKUP_H} alt="Decor Adorne logo" />
        </div>

        {/* Stats row + URL */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
            {STATS.map((stat, i) => (
              <div key={stat.v} style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                    paddingRight: i < STATS.length - 1 ? 32 : 0,
                  }}
                >
                  <span
                    style={{
                      fontSize: 28,
                      color: '#C9A96E',
                      fontFamily: '"Courier New", monospace',
                      fontWeight: 400,
                    }}
                  >
                    {stat.v}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      color: 'rgba(250,247,244,0.28)',
                      fontFamily: 'system-ui, sans-serif',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase' as const,
                    }}
                  >
                    {stat.l}
                  </span>
                </div>
                {i < STATS.length - 1 && (
                  <div
                    style={{
                      width: 1,
                      height: 34,
                      background: 'rgba(250,247,244,0.10)',
                      marginRight: 32,
                      display: 'flex',
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          <span
            style={{
              color: 'rgba(250,247,244,0.18)',
              fontSize: 13,
              fontFamily: 'system-ui, sans-serif',
              letterSpacing: '0.10em',
            }}
          >
            decoradorne.com
          </span>
        </div>
      </div>

      {/* ── Right decorative circles panel ── */}
      <div
        style={{
          width: 220,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 22,
          paddingRight: 56,
        }}
      >
        {([
          [76, 0.13, 0.04],
          [50, 0.20, 0.02],
          [90, 0.09, 0.06],
          [42, 0.24, 0.02],
          [62, 0.11, 0.03],
        ] as [number, number, number][]).map(([s, border, fill], i) => (
          <div
            key={i}
            style={{
              width: s,
              height: s,
              borderRadius: '50%',
              border: `1px solid rgba(201,169,110,${border})`,
              background: `rgba(201,169,110,${fill})`,
              display: 'flex',
            }}
          />
        ))}
      </div>
    </div>,
    { ...size }
  );
}
