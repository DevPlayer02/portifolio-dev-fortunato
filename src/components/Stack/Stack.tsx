import { useMemo } from "react";

interface StackProps {
  title: string;
}

const Stack = ({ title }: StackProps) => {
  const { bg, text } = useMemo(() => {
    // eslint-disable-next-line react-hooks/purity
    const hue = Math.floor(Math.random() * 360);

    return {
      bg: `hsla(${hue}, 70%, 50%, 0.20)`,
      text: `hsl(${hue}, 70%, 80%)`,
    };
  }, []);
  return (
    <div
      style={{ backgroundColor: bg, color: text }}
      className="w-auto px-3 h-8 text-[14px] flex items-center justify-center text-center font-medium rounded-sm"
    >
      {title}
    </div>
  );
};

export default Stack;
