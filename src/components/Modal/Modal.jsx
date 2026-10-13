import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

// Модальное окно поверх страницы.
// Рендерится через портал в #modal-root, вне дерева #root,
// поэтому не влияет на вёрстку карточки-родителя.
// Закрывается по Escape, клику по затемнению и кнопке «Закрыть».
export const Modal = ({ title, onClose, children }) => {
  const titleId = useId();
  const dialogRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const previouslyFocused = document.activeElement;
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [onClose]);

  const portalRoot = document.getElementById("modal-root");

  return createPortal(
    <div className="modal" onClick={onClose}>
      <div
        className="modal__dialog frame"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        ref={dialogRef}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal__header">
          <h2 className="modal__title" id={titleId}>
            {title}
          </h2>
          <button
            type="button"
            className="modal__close"
            onClick={onClose}
            aria-label="Закрыть"
          >
            ×
          </button>
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>,
    portalRoot,
  );
};
