import { incrementTimeInDays } from "@/context/actions/example/hello-world";
import {
    XmasHackDispatchContext,
    XmasHackStateContext,
} from "@/context/context/context";
import { pluraliseString } from "@/utils/pluralise-string";
import { useContext, useEffect } from "react";

export const TimeCounter = () => {
    const dispatch = useContext(XmasHackDispatchContext);
    const { timeInDays } = useContext(XmasHackStateContext);

    useEffect(() => {
        const interval = setInterval(() => dispatch(incrementTimeInDays()), 1000);

        return () => clearInterval(interval);
    }, [dispatch]);

    const formatTime = () => {
        const years = Math.floor(timeInDays / 365);
        const days = timeInDays % 365;

        const yearsString = years && `${years} ${pluraliseString(years, "year")}`;
        const daysString = (days || !years) && `${days} ${pluraliseString(days, "day")}`;

        return [yearsString, daysString].filter(Boolean).join(" and ");
    };

    return <div>{formatTime()}</div>;
};
