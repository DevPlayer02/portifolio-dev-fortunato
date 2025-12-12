/* eslint-disable @next/next/no-img-element */
import Button from "../Button/Button";
import Stack from "../Stack/Stack";
import styles from "./Cards.module.css";

interface CardsProps {
  img?: string;
  title: string;
  subtitle: string;
  button?: boolean;
  stacks?: string[];
  className?: string;
}

const ProjectCards = ({ img, title, subtitle, stacks, className, button }: CardsProps) => {
  return (
    <div className={`relative h-[550px] border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_0_40px_-10px_rgba(0,0,0,0.4)] ${className}`}>
      <img
        src={img}
        alt="project-image"
        className={`${styles.imageCards} w-full h-full`}
      />
      <div className="absolute bottom-4 left-4 right-4 z-10 space-y-2 text-primary mx-[7%] my-10">
        <span className="flex gap-2 text-[10px] font-medium rounded-md text-main-light-grey">
          {(stacks ?? []).map((stack) => (
            <Stack key={stack} title={stack} />
          ))}
        </span>

        <h3 className="text-2xl font-semibold">{title}</h3>

        <p className="text-sm text-secondary opacity-90">{subtitle}</p>

        {button && (   
          <Button className="mt-2 px-4 py-2 text-[12px]">Ver projeto</Button>
        )}

      </div>
    </div>
  );
};

export default ProjectCards;
