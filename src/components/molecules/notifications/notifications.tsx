import { IconConfirm } from "@/components/icons/confirm/confirm";
import { IconCurrency } from "@/components/icons/currency/currency";
import { IconInfo } from "@/components/icons/info/info";
import { setNotificationData } from "@/context/actions/notification/notification.action";
import {
  XmasHackDispatchContext,
  XmasHackStateContext,
} from "@/context/context/context";
import { notificationTimeoutMS } from "@/settings/settings";
import { AnimatePresence } from "framer-motion";
import { FC, Fragment, useContext, useEffect } from "react";
import { motion } from "framer-motion";

export const Notifications: FC = () => {
  const { notifications } = useContext(XmasHackStateContext);
  const dispatch = useContext(XmasHackDispatchContext);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!notifications.length) return;
      const trimmedNotifications = notifications.slice(1);
      dispatch(setNotificationData(trimmedNotifications));
    }, notificationTimeoutMS);
    return () => {
      clearInterval(interval);
    };
  }, [notifications, dispatch]);

  const getIcon = (type: string) => {
    switch (type) {
      case "buy":
        return <IconConfirm />;
      case "sell":
        return <IconCurrency />;
      default:
        return <IconInfo />;
    }
  };

  const getNotificationStyles = (type: string) => {
    switch (type) {
      case "buy":
        return "alert-success";
      case "sell":
        return "alert-error";
      default:
        return "alert-info";
    }
  };

  return (
    <Fragment>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="toast toast-bottom toast-end"
        >
          <AnimatePresence>
            {notifications.map(({ title, type }, index) => (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                key={`notification-${index}`}
                className={`alert ${getNotificationStyles(type)}`}
              >
                {getIcon(type)}
                <span>{title}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </Fragment>
  );
};
