import { TimeCounter } from "@/components/atoms/counter/counter";

export const Footer = () => {
    return (
        <footer className="flex-end mt-auto">
            <div className="flex">Time taken: <TimeCounter /></div>
        </footer>
    )
}