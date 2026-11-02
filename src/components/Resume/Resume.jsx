import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import { personal } from '../../data/content';
import { CloseIcon, DownloadIcon } from '../Icons/Icons';
import styles from './Resume.module.css';

const OPEN_MS = 480;
const CLOSE_MS = 240;
const FADE_MS = 160;
const EASE_DRAWER = 'cubic-bezier(0.32, 0.72, 0, 1)';
const EASE_OUT = 'cubic-bezier(0.23, 1, 0.32, 1)';

const ResumeContext = createContext(null);

function prefersReducedMotion() {
  return matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function ResumeProvider({ children }) {
  const [requested, setRequested] = useState(false);
  const trigger = useRef(null);
  const dialog = useRef(null);
  const scroller = useRef(null);
  const scrim = useRef(null);
  const bar = useRef(null);
  const sheet = useRef(null);
  const closeButton = useRef(null);
  const closing = useRef(false);

  const folded = () => {
    const from = trigger.current.getBoundingClientRect();
    const to = sheet.current.getBoundingClientRect();
    const x = from.left + from.width / 2 - (to.left + to.width / 2);
    const y = from.top + from.height / 2 - to.top;
    return `translate(${x}px, ${y}px) scale(${Math.max(from.width / to.width, 0.1)})`;
  };

  const open = useCallback((event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    trigger.current = event.currentTarget;
    closing.current = false;
    setRequested(true);
    dialog.current.showModal();
    scroller.current.scrollTop = 0;
    closeButton.current.focus({ preventScroll: true });

    if (prefersReducedMotion()) {
      dialog.current.animate({ opacity: [0, 1] }, { duration: FADE_MS, easing: 'ease' });
      return;
    }
    sheet.current.animate(
      [
        { transform: folded(), opacity: 0 },
        { opacity: 1, offset: 0.16 },
        { transform: 'none', opacity: 1 },
      ],
      { duration: OPEN_MS, easing: EASE_DRAWER },
    );
    scrim.current.animate({ opacity: [0, 1] }, { duration: 260, easing: 'ease' });
    bar.current.animate(
      { opacity: [0, 1], transform: ['translateY(-6px)', 'none'] },
      { duration: 240, delay: 180, easing: EASE_OUT, fill: 'backwards' },
    );
  }, []);

  const close = () => {
    if (closing.current || !dialog.current.open) return;
    closing.current = true;
    const finish = () => {
      dialog.current.close();
      dialog.current.getAnimations({ subtree: true }).forEach((animation) => animation.cancel());
      closing.current = false;
      // Safari doesn't focus links on click
      if (document.activeElement === document.body) trigger.current.focus({ preventScroll: true });
    };

    if (prefersReducedMotion()) {
      dialog.current.animate({ opacity: [1, 0] }, { duration: FADE_MS, easing: 'ease', fill: 'forwards' }).finished.then(finish);
      return;
    }
    const flight = sheet.current.animate(
      [
        { transform: 'none', opacity: 1 },
        { opacity: 1, offset: 0.8 },
        { transform: folded(), opacity: 0 },
      ],
      { duration: CLOSE_MS, easing: EASE_OUT, fill: 'forwards' },
    );
    scrim.current.animate({ opacity: [1, 0] }, { duration: CLOSE_MS, easing: 'ease', fill: 'forwards' });
    bar.current.animate({ opacity: [1, 0] }, { duration: 120, easing: 'ease', fill: 'forwards' });
    flight.finished.then(finish);
  };

  const closeOnOutsideClick = (event) => {
    if (!sheet.current.contains(event.target) && !event.target.closest('a, button')) close();
  };

  const prepare = useCallback(() => setRequested(true), []);
  const value = useMemo(() => ({ open, prepare }), [open, prepare]);

  return (
    <ResumeContext.Provider value={value}>
      {children}
      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-label="Resume"
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
      >
        <div ref={scrim} className={styles.scrim} />
        <div ref={scroller} className={styles.scroller} onClick={closeOnOutsideClick}>
          <div className={styles.stage}>
            <div ref={bar} className={styles.bar}>
              <a className={styles.download} href={personal.resume} download="Aleksei_Lian_Resume.pdf">
                <DownloadIcon />
                Download PDF
              </a>
              <button ref={closeButton} type="button" className={styles.close} onClick={close} aria-label="Close resume">
                <CloseIcon />
              </button>
            </div>
            <div ref={sheet} className={styles.sheet}>
              {requested && (
                <img src={personal.resumeImage} width="816" height="1056" alt="Aleksei Lian's resume. The PDF download has the same content as text." />
              )}
            </div>
          </div>
        </div>
      </dialog>
    </ResumeContext.Provider>
  );
}

// A real link to the PDF, so it works without JavaScript
export function ResumeLink({ className, children }) {
  const { open, prepare } = useContext(ResumeContext);
  return (
    <a className={className} href={personal.resume} onClick={open} onPointerEnter={prepare} onFocus={prepare} onTouchStart={prepare}>
      {children}
    </a>
  );
}
