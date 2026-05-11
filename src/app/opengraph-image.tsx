import { ImageResponse } from 'next/og';

export const alt = 'Decor Adorne — Lagos Luxury Event Decoration';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const STATS = [
  { v: '500+', l: 'Events' },
  { v: '8+',   l: 'Years'  },
  { v: '4.9/5', l: 'Rating' },
];

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
          {/* D monogram badge */}
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              border: '1.5px solid rgba(201,169,110,0.45)',
              background: 'rgba(201,169,110,0.07)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                color: '#C9A96E',
                fontSize: 24,
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic',
              }}
            >
              D
            </span>
          </div>
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
            Lagos · Luxury Event Decoration
          </span>
        </div>

        {/* Wordmark + tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
              lineHeight: 0.92,
              letterSpacing: '-0.025em',
            }}
          >
            <span
              style={{
                fontSize: 100,
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontWeight: 300,
                color: '#FAF7F4',
              }}
            >
              Decor
            </span>
            <span
              style={{
                fontSize: 100,
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontWeight: 400,
                fontStyle: 'italic',
                color: '#C9A96E',
              }}
            >
              Adorne.
            </span>
          </div>
          <span
            style={{
              fontSize: 24,
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              color: 'rgba(250,247,244,0.42)',
              letterSpacing: '0.01em',
            }}
          >
            Moments, beautifully adorned.
          </span>
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
