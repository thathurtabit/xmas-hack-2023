import { TimeCounter } from "@/components/atoms/counter/counter";

export const Footer = () => {
    return (
        <footer className="absolute bottom-0">
            <div className="flex">Time taken: <TimeCounter /></div>
        </footer>
    )
}