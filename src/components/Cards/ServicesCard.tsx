/* eslint-disable @next/next/no-img-element */

interface CardsProps {
    className?: string;
    children: React.ReactNode;
}

const ServicesCards = ({
  children,
  className,
}: CardsProps) => {
  return (
    <div
      className={`relative h-[550px] border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_0_40px_-10px_rgba(0,0,0,0.4)] ${className}`}
    >
              {children}
    </div>
  );
};

export default ServicesCards;
