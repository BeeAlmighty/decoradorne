import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: 180,
        height: 180,
        background: '#1A1410',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 38,
        border: '3px solid rgba(201,169,110,0.30)',
      }}
    >
      <span
        style={{
          color: '#C9A96E',
          fontSize: 108,
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
          fontWeight: 400,
          lineHeight: 1,
          marginTop: 6,
        }}
      >
        D
      </span>
    </div>,
    { width: 180, height: 180 }
  );
}
