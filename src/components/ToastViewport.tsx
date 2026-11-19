import React, { useEffect } from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type { ToastItem } from '../utils/toastQueue';

interface ToastViewportProps {
  toasts: ToastItem[];
  dismissLabel: string;
  onDismiss: (id: string) => void;
}

const TOAST_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const AUTO_DISMISS_MS = 5000;

const ToastCard: React.FC<{
  toast: ToastItem;
  dismissLabel: string;
  onDismiss: (id: string) => void;
}> = ({ toast, dismissLabel, onDismiss }) => {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      onDismiss(toast.id);
    }, AUTO_DISMISS_MS);
    return () => window.clearTimeout(timer);
  }, [toast.id, onDismiss]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.98 }}
      transition={{ duration: 0.25, ease: TOAST_EASE }}
      role="status"
      aria-live="polite"
      className="pointer-events-auto rounded-xl border border-[#253A32] bg-[#111C18] text-[#F7F4EE] shadow-2xl p-4 flex items-start gap-3"
    >
      <div
        className={`mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-md shrink-0 ${
          toast.variant === 'success'
            ? 'bg-[#164237] text-[#C58F38]'
            : 'bg-[#16241F] text-[#C58F38]'
        }`}
        aria-hidden="true"
      >
        {toast.variant === 'success' ? (
          <CheckCircle2 className="w-4 h-4" />
        ) : (
          <Info className="w-4 h-4" />
        )}
      </div>

      <div className="flex-1 min-w-0 space-y-0.5">
        <p className="text-sm font-semibold text-[#F7F4EE] leading-snug">{toast.title}</p>
        <p className="text-xs text-[#A6B5AF] leading-relaxed">{toast.message}</p>
      </div>

      <button
        type="button"
        onClick={() => onDismiss(toast.id)}
        aria-label={dismissLabel}
        className="inline-flex items-center justify-center w-7 h-7 rounded-md border border-[#253A32] text-[#A6B5AF] hover:text-[#F7F4EE] hover:border-[#C58F38] transition-colors shrink-0 cursor-pointer"
      >
        <X className="w-3.5 h-3.5" aria-hidden="true" />
      </button>
    </motion.div>
  );
};

export const ToastViewport: React.FC<ToastViewportProps> = ({
  toasts,
  dismissLabel,
  onDismiss,
}) => {
  return (
    <div
      aria-label="Notifications"
      className="pointer-events-none fixed top-20 end-4 sm:end-6 z-[70] w-[min(390px,calc(100vw-2rem))] flex flex-col gap-2.5"
    >
      <AnimatePresence initial={false}>
        {toasts.map((toast) => (
          <ToastCard
            key={toast.id}
            toast={toast}
            dismissLabel={dismissLabel}
            onDismiss={onDismiss}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
