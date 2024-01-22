import { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge('rounded border border-black bg-white hover:bg-slate-200 px-2 py-1', props.className)}
    >
      {props.children}
    </button>
  );
};

export { Button };
