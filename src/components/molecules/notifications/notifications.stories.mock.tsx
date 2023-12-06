import { Fragment, useContext } from "react";
import { Notifications } from "./notifications";
import { XmasHackDispatchContext } from "@/context/context/context";
import { Button } from "@/components/atoms/button/button";
import { INotificationState } from "@/context/state/state.types";
import {
  setAllNotificationData,
  setNewNotification,
} from "@/context/actions/notification/notification.action";

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

  const handleAddMultipleNotifications = () => {
    dispatch(setAllNotificationData(notificationsData));
  };

  const handleAddSingleNotification = () => {
    dispatch(setNewNotification(notificationsData[0]));
  };

  return (
    <Fragment>
      <div className="flex items-center justify-center w-full gap-3">
        <Button onClick={handleAddMultipleNotifications}>
          Create notifications
        </Button>
        <Button onClick={handleAddSingleNotification}>New notification</Button>
      </div>
      <Notifications />
    </Fragment>
  );
};
