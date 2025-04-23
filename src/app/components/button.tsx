import clsx from "clsx";

interface Props {
    children: React.ReactNode;
    action: () => void;
    className?: string;
}

export const Button = ({ children, action, className }: Props) => {
    return (
        <button
            type="button"
            className={clsx(
                className ? className : "transition-all duration-500 relative w-48 h-[50px] bg-transparent mt-2 text-blue-200 border-b-2 border-blue-200 rounded-xl flex justify-center items-center flex-nowrap hover:shadow-sm hover:shadow-blue-200 active:scale-90 before:transition-all before:duration-500 before:absolute before:top-0 before:left-1/2 before:border-t-2 before:border-blue-200 before:rounded-xl before:w-0 before:h-2 hover:before:w-[95%] hover:before:left-1"
            )}
            onClick={action}
        >
            {children}
        </button >
    );
}