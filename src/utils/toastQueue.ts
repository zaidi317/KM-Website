export type ToastVariant = 'success' | 'info';

export interface ToastItem {
  id: string;
  title: string;
  message: string;
  variant: ToastVariant;
}

export interface ToastInput {
  id?: string;
  title: string;
  message: string;
  variant?: ToastVariant;
}

const MAX_VISIBLE_TOASTS = 3;

export function createToastItem(input: ToastInput, nowMs = Date.now()): ToastItem {
  const randomSuffix = Math.random().toString(36).slice(2, 7);
  return {
    id: input.id ?? `toast-${nowMs}-${randomSuffix}`,
    title: input.title,
    message: input.message,
    variant: input.variant ?? 'success',
  };
}

export function enqueueToast(queue: ToastItem[], input: ToastInput, nowMs = Date.now()): ToastItem[] {
  const nextItem = createToastItem(input, nowMs);
  const filtered = queue.filter((item) => item.id !== nextItem.id);
  const updated = [...filtered, nextItem];
  if (updated.length > MAX_VISIBLE_TOASTS) {
    return updated.slice(updated.length - MAX_VISIBLE_TOASTS);
  }
  return updated;
}

export function dismissToast(queue: ToastItem[], id: string): ToastItem[] {
  return queue.filter((item) => item.id !== id);
}
