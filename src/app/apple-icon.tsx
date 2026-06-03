import { ImageResponse } from 'next/og';
import { LOGO_LOCKUP_CREAM, LOGO_LOCKUP_RATIO } from '@/lib/logo-data';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

const LOCKUP_W = 150;
const LOCKUP_H = Math.round(LOCKUP_W / LOGO_LOCKUP_RATIO);

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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={LOGO_LOCKUP_CREAM} width={LOCKUP_W} height={LOCKUP_H} alt="Decor Adorne logo" />
    </div>,
    { width: 180, height: 180 }
  );
}
