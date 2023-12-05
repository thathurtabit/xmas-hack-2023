import { TimeCounter } from "@/components/atoms/counter/counter";

export const Footer = () => {
    return (
      <footer className="flex-end mt-auto">
        <div className="flex gap-1">
          <span>Time taken:</span> <TimeCounter />
        </div>
      </footer>
    );
}