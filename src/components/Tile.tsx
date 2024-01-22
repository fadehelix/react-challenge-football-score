import { twMerge } from 'tailwind-merge';

type TileProps = {
  title?: string;
  children: React.ReactNode;
} & React.HTMLProps<HTMLDivElement>;

const Tile = ({ title, children, ...props }: TileProps) => {
  return (
    <div {...props} className={twMerge('border border-black p-4 m-2', props.className)}>
      {title && <h2 className="text-sm text-center mb-4">{title}</h2>}
      {children}
    </div>
  );
};

export { Tile };
