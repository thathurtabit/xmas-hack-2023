import { XmasHackStateContext } from '@/context/context/context';
import { useContext } from 'react'

export const TimeCounter = () => {

    const { timeDays } = useContext(XmasHackStateContext);

    return (
        <div>{timeDays} days</div>
    )
}
