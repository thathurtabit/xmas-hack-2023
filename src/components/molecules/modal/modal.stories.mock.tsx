import { Fragment, useContext } from "react";
import { Modal } from "./modal";
import { XmasHackDispatchContext } from "@/context/context/context";
import { Button } from "@/components/atoms/button/button";
import { setModalData } from "@/context/actions/modal/modal.action";
import { IModalState } from "@/context/state/state.types";

export const MockedModal = () => {
  const dispatch = useContext(XmasHackDispatchContext);

  const modalData: IModalState = {
    isOpen: true,
    title: "Default Modal",
    size: "small",
    footer: {
      cancel: {
        variant: "secondary",
        onClick: () => console.log("cancel"),
      },
      confirm: {
        onClick: () => console.log("confirm"),
      },
    },
    content: (
      <p>
        This is some modal content, set by the place where I'm triggering the
        modal to open
      </p>
    ),
  };

  const handleDefaultModal = () => {
    dispatch(
      setModalData({
        ...modalData,
      }),
    );
  };

  const handleMediumModal = () => {
    dispatch(
      setModalData({
        ...modalData,
        size: "medium",
      }),
    );
  };

  const handleLargeModal = () => {
    dispatch(
      setModalData({
        ...modalData,
        size: "large",
      }),
    );
  };

  return (
    <Fragment>
      <div className="flex items-center justify-center w-full gap-3">
        <Button onClick={handleDefaultModal}>Default</Button>
        <Button onClick={handleMediumModal}>Medium</Button>
        <Button onClick={handleLargeModal}>Large</Button>
      </div>
      <Modal />
    </Fragment>
  );
};
