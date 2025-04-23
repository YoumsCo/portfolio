import clsx from "clsx";
import { LegacyRef } from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
    ref?: LegacyRef<HTMLHeadingElement>;
}

export const Title = ({ children, className, ref }: Props) => {
    return (
        ref ? 
        <h1 ref={ref} className={clsx(
            className ? className : "transition-all duration-500 relative w-11/12 flex justify-start my-10 text-blue-200 text-2xl font-bold before:absolute before:w-16 before:h-[2px] before:left-0 before:-bottom-1 after:absolute after:w-10 after:h-[2px] after:left-0 after:-bottom-4 before:bg-blue-200 after:bg-blue-200"
        )}
        >
            {children}
        </h1>
        :
        <h1 className={clsx(
            className ? className : "transition-all duration-500 relative w-11/12 flex justify-start my-10 text-blue-200 text-2xl font-bold before:absolute before:w-16 before:h-[2px] before:left-0 before:-bottom-1 after:absolute after:w-10 after:h-[2px] after:left-0 after:-bottom-4 before:bg-blue-200 after:bg-blue-200"
        )}
        >
            {children}
        </h1>

    );
}