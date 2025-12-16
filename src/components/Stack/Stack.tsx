interface StackProps {
  title: string;
}

function stringToHue(str: string) {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  return Math.abs(hash) % 360;
}

const Stack = ({ title }: StackProps) => {
  const hue = stringToHue(title);

  return (
    <div
      style={{
        backgroundColor: `hsla(${hue}, 70%, 50%, 0.20)`,
        color: `hsl(${hue}, 70%, 80%)`,
      }}
      className="w-auto px-3 h-8 text-[14px] flex items-center justify-center text-center font-medium rounded-sm"
    >
      {title}
    </div>
  );
};

export default Stack;
