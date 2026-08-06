"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { LandInquiryForm } from "./LandInquiryForm";
import styles from "./LandInquiryDock.module.css";

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export function LandInquiryDock() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const isOpen = openPath === pathname;
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function closeDrawer() {
    setOpenPath(null);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }

  function handleDialogKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeDrawer();
      return;
    }

    if (event.key !== "Tab" || !drawerRef.current) {
      return;
    }

    const focusableElements = Array.from(
      drawerRef.current.querySelectorAll<HTMLElement>(focusableSelector),
    );

    if (focusableElements.length === 0) {
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  if (pathname === "/land" || pathname === "/land/") {
    return null;
  }

  return (
    <>
      <button
        ref={triggerRef}
        className={styles.trigger}
        type="button"
        onClick={() => setOpenPath(pathname)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="land-inquiry-dialog"
      >
        <span>Discuss your land</span>
        <span className={styles.triggerIcon} aria-hidden="true">↗</span>
      </button>

      {isOpen ? (
        <>
          <button
            className={styles.backdrop}
            type="button"
            aria-label="Close land inquiry form"
            onClick={closeDrawer}
          />
          <aside
            ref={drawerRef}
            className={styles.drawer}
            id="land-inquiry-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="land-inquiry-title"
            onKeyDown={handleDialogKeyDown}
          >
            <div className={styles.drawerInner}>
              <header className={styles.drawerHeader}>
                <div>
                  <p className={styles.eyebrow}>Private first conversation</p>
                  <h2 id="land-inquiry-title">Tell us what future you are considering.</h2>
                  <p className={styles.intro}>
                    Broad details are enough. No appraisal, transfer plan or exact address is
                    needed to begin.
                  </p>
                </div>
                <button
                  ref={closeRef}
                  className={styles.close}
                  type="button"
                  onClick={closeDrawer}
                  aria-label="Close land inquiry form"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </header>
              <div className={styles.formWrap}>
                <LandInquiryForm idPrefix="land-drawer" compact />
              </div>
              <p className={styles.footerNote}>
                An inquiry is exploratory and does not commit either party to a purchase,
                donation, transfer or other arrangement.
              </p>
            </div>
          </aside>
        </>
      ) : null}
    </>
  );
}
