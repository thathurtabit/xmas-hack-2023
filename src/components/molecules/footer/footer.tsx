import { TimeCounter } from "@/components/atoms/counter/counter";

export const Footer = () => {
  return (
    <footer className="flex-end mt-auto text-black pt-[32px]">
      <div className="flex gap-1">
        <span className="text-2xl text-white">Time taken:</span> <TimeCounter />
      </div>
    </footer>
  );
};
