export const GA_MEASUREMENT_ID = "G-19TWQEE3TE";

type GtagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent({ action, category, label, value }: GtagEvent) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}

export function trackWhatsAppClick(label: string) {
  trackEvent({ action: "click_whatsapp", category: "Contact", label });
}
