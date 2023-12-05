import type { FC, KeyboardEvent } from "react";
import FocusTrap from "focus-trap-react";
import { useContext, useState, useEffect } from "react";
import {
  XmasHackDispatchContext,
  XmasHackStateContext,
} from "../../../context/context/context";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { modalBGTransitions, modalTransitions } from "./modal.transitions";
import { Button } from "../../atoms/button/button";
import { IconCancel } from "../../icons/cancel/cancel";
import { IconConfirm } from "../../icons/confirm/confirm";
import { setModalClose } from "@/context/actions/modal/modal.action";

export const Modal: FC = () => {
  const [showDialog, setShowDialog] = useState(false);
  const { modal } = useContext(XmasHackStateContext);
  const dispatch = useContext(XmasHackDispatchContext);

  const { isOpen, content, size, title, footer } = modal;
  const { cancel, confirm } = footer ?? {};
  const {
    onClick: passedCancelOnClick,
    text: cancelText = "Nope",
    loading: cancelLoading = false,
    icon: cancelIcon = <IconCancel size={size === "small" ? 19 : 21} />,
    variant: cancelVariant = "secondary",
  } = cancel ?? {};
  const {
    onClick: passedConfirmOnClick,
    text: confirmText = "Yep",
    loading: confirmLoading = false,
    icon: confirmIcon = <IconConfirm size={size === "small" ? 20 : 23} />,
    variant: confirmVariant = "primary",
  } = confirm ?? {};

  const handleCloseModal = () => {
    dispatch(setModalClose());
  };

  const onCancel = () => {
    passedCancelOnClick?.();
    handleCloseModal();
  };

  const onConfirm = () => {
    handleCloseModal();
    passedConfirmOnClick?.();
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const timeout = setTimeout(() => {
      setShowDialog(true);
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, [isOpen]);

  const getModalClasses = () => {
    switch (size) {
      case "small": {
        return "max-w-sm";
      }

      case "large": {
        return "max-w-4xl";
      }

      default: {
        return "max-w-2xl";
      }
    }
  };

  const modalClasses = getModalClasses();

  const handleKeyDown = (event: KeyboardEvent) => {
    event.stopPropagation();
    if (event.key === "Escape") {
      dispatch(setModalClose());
    }
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <FocusTrap>
          <motion.section
            data-cy="modal-bg"
            className="fixed bottom-0 left-0 right-0 top-0 z-modal grid place-items-center bg-black/5 bg-opacity-50 backdrop-blur-xl"
            role="button"
            tabIndex={0}
            onClick={handleCloseModal}
            onKeyDown={handleKeyDown}
            {...modalBGTransitions}
          >
            <div
              className={`relative grid w-full cursor-auto place-items-center shadow-lg ${modalClasses}`}
              tabIndex={0}
              role="button"
              onClick={(event) => event.stopPropagation()}
              onKeyDown={handleKeyDown}
            >
              {showDialog && (
                <motion.dialog
                  open
                  data-cy="modal"
                  className="relative w-full bg-black/20 overflow-hidden rounded-md p-0 text-copy-inverse"
                  {...modalTransitions}
                >
                  <header
                    data-cy="modal-header"
                    className="flex w-full mt-3 relative px-5 py-0 text-center font-semibold justify-between"
                  >
                    <div>{title}</div>
                    <button
                      type="button"
                      title="Close modal"
                      className="flex h-6 w-6 flex-col items-center justify-center rounded-full transition-colors hover:bg-action"
                      onClick={handleCloseModal}
                    >
                      <IconCancel size={20} />
                    </button>
                  </header>
                  <div className={`modal-content p-8 font-medium`}>
                    {content}
                  </div>
                  {footer && (
                    <footer
                      data-cy="modal-footer"
                      className={`flex justify-end gap-4 p-2`}
                    >
                      {cancel && (
                        <Button
                          variant={cancelVariant}
                          loading={cancelLoading}
                          size={"small"}
                          onClick={onCancel}
                        >
                          {cancelIcon && (
                            <span className="pr-0">{cancelIcon}</span>
                          )}
                          {cancelText}
                        </Button>
                      )}
                      {confirm && (
                        <Button
                          variant={confirmVariant}
                          size={"small"}
                          loading={confirmLoading}
                          onClick={onConfirm}
                        >
                          {confirmIcon && (
                            <span className="pr-1">{confirmIcon}</span>
                          )}
                          {confirmText}
                        </Button>
                      )}
                    </footer>
                  )}
                </motion.dialog>
              )}
            </div>
          </motion.section>
        </FocusTrap>
      ) : null}
    </AnimatePresence>
  );
};
