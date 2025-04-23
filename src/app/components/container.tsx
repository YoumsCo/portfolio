import clsx from "clsx";

interface Props {
    children: React.ReactNode;
    className?: string;
}

export const Container = ({ children, className }: Props) => {

    return (
        <div className={clsx(
            className ? className : "transition-all duration-500 w-screen min-h-screen flex flex-col justify-start items-center")
        }>
            {children}
        </div>
    );
}