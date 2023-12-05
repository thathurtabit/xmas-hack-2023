import { incrementTimeDays } from '@/context/actions/example/hello-world';
import { XmasHackDispatchContext, XmasHackStateContext } from '@/context/context/context';
import { useContext, useEffect } from 'react'

export const TimeCounter = () => {
    const dispatch = useContext(XmasHackDispatchContext);
    const { timeDays } = useContext(XmasHackStateContext);

    useEffect(() => {
        const interval = setInterval(() => dispatch(incrementTimeDays()), 1000);

        return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <div>{timeDays} days</div>
    )
}
