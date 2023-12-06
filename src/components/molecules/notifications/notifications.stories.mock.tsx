import { Fragment, useContext } from "react";
import { Notifications } from "./notifications";
import { XmasHackDispatchContext } from "@/context/context/context";
import { Button } from "@/components/atoms/button/button";
import { INotificationState } from "@/context/state/state.types";
import { setNotificationData } from "@/context/actions/notification/notification.action";

export const MockedNotifications = () => {
  const dispatch = useContext(XmasHackDispatchContext);

  const notificationsData: INotificationState[] = [
    {
      type: "buy",
      title: "You have bought something!",
    },
    {
      type: "sell",
      title: "You have sold something!",
    },
    {
      type: "info",
      title: "This is just some info",
    },
  ];

  const handleDefaultModal = () => {
    dispatch(setNotificationData(notificationsData));
  };

  return (
    <Fragment>
      <div className="flex items-center justify-center w-full gap-3">
        <Button onClick={handleDefaultModal}>Create notifications</Button>
      </div>
      <Notifications />
    </Fragment>
  );
};
