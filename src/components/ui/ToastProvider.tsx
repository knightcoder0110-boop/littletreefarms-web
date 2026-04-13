"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type ToastVariant = "success" | "error" | "info";

type ToastInput = {
  title: string;
  description?: string;
  variant?: ToastVariant;
  durationMs?: number;
};

type ToastRecord = ToastInput & {
  id: number;
  variant: ToastVariant;
};

type ToastContextValue = {
  toast: (input: ToastInput) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

const variantClasses: Record<ToastVariant, string> = {
  success:
    "border-sage/35 bg-[linear-gradient(135deg,rgba(250,246,240,0.98),rgba(163,196,167,0.18))] text-forest-dark",
  error:
    "border-walnut/25 bg-[linear-gradient(135deg,rgba(250,246,240,0.98),rgba(92,61,46,0.14))] text-walnut-dark",
  info:
    "border-gold/35 bg-[linear-gradient(135deg,rgba(250,246,240,0.98),rgba(200,169,110,0.18))] text-forest-dark",
};

function ToastIcon({ variant }: { variant: ToastVariant }) {
  if (variant === "success") {
    return (
      <svg className="h-5 w-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    );
  }

  if (variant === "error") {
    return (
      <svg className="h-5 w-5 text-walnut" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86l-7.5 13A1 1 0 003.66 18h16.68a1 1 0 00.87-1.5l-7.5-13a1 1 0 00-1.74 0z" />
      </svg>
    );
  }

  return (
    <svg className="h-5 w-5 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastRecord[]>([]);

  const dismissToast = useCallback((id: number) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toastRecord) => toastRecord.id !== id),
    );
  }, []);

  const toast = useCallback(
    ({ durationMs = 4200, variant = "info", ...input }: ToastInput) => {
      const id = Date.now() + Math.floor(Math.random() * 1000);

      setToasts((currentToasts) => [
        ...currentToasts,
        {
          id,
          variant,
          durationMs,
          ...input,
        },
      ]);

      window.setTimeout(() => {
        dismissToast(id);
      }, durationMs);
    },
    [dismissToast],
  );

  const value = useMemo(() => ({ toast }), [toast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed inset-x-4 top-24 z-[1200] flex flex-col gap-3 sm:inset-x-auto sm:right-6 sm:w-[min(26rem,calc(100vw-2rem))]">
        {toasts.map((toastRecord) => (
          <div
            key={toastRecord.id}
            role={toastRecord.variant === "error" ? "alert" : "status"}
            aria-live={toastRecord.variant === "error" ? "assertive" : "polite"}
            className={`pointer-events-auto animate-toast-in overflow-hidden rounded-2xl border shadow-xl backdrop-blur-md ${variantClasses[toastRecord.variant]}`}
          >
            <div className="flex items-start gap-3 p-4 sm:p-4.5">
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/70 shadow-sm">
                <ToastIcon variant={toastRecord.variant} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-ui text-[0.72rem] font-bold uppercase tracking-[0.16em] text-gold-dark">
                  {toastRecord.variant === "success"
                    ? "Success"
                    : toastRecord.variant === "error"
                      ? "Needs Attention"
                      : "Update"}
                </p>
                <p className="mt-1 font-display text-[1.18rem] leading-tight text-current sm:text-[1.28rem]">
                  {toastRecord.title}
                </p>
                {toastRecord.description ? (
                  <p className="mt-1.5 text-sm leading-6 text-current/80">
                    {toastRecord.description}
                  </p>
                ) : null}
              </div>
              <button
                type="button"
                onClick={() => dismissToast(toastRecord.id)}
                className="rounded-full border border-black/5 bg-white/65 p-2 text-ink-muted transition-colors hover:bg-white hover:text-forest"
                aria-label="Dismiss notification"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="h-1 w-full bg-black/6">
              <div
                className="h-full origin-left animate-toast-progress bg-gradient-to-r from-gold to-gold-dark"
                style={{ animationDuration: `${toastRecord.durationMs ?? 4200}ms` }}
              />
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider.");
  }

  return context;
}