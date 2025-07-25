import { ProteinTask } from "../../../types/protein.types";

const className = {
  wrapper: "flex flex-col items-center relative w-full h-full",
  info: "z-10 text-white p-4 absolute top-2 w-96 left-2 flex flex-col gap-3",
  image:
    "w-full h-full object-cover absolute top-0 left-0 bg-cover z-0 bg-gradint-radial",
};

export const Protein = ({ task }: { task: ProteinTask }) => {
  return (
    <div className={className.wrapper}>
      <div className={className.info}>
        <h1 className="font-bold text-headings-lg">{task.name}</h1>
        <p className="font-thin text-paragraph font-proxima">
          {task.description}
        </p>
        <a className="font-thin text-paragraph" href={task.rscbLink}>
          Read more rcb.org &#x2192;
        </a>
      </div>
      <img
        className={className.image}
        src={task.imageSrc}
        alt={task.imageAlt}
      />
    </div>
  );
};
