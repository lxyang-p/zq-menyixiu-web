import { PHONE, PHONE_DISPLAY } from '@/lib/config';

export default function MobileCallBar() {
  return (
    <div className="mobile-call-bar" id="mobile-call-bar">
      <a href={`tel:${PHONE}`}>
        <span style={{ fontSize: '22px' }}>📞</span>
        <span>
          <strong>立即拨打</strong> {PHONE_DISPLAY}
        </span>
      </a>
    </div>
  );
}
