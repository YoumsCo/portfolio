import clsx from "clsx";

interface ParagraphProps {
    children: React.ReactNode;
    className?: string;
}

export const P = ({ children, className }: ParagraphProps) => {
    return (
        <p className={clsx(
            className ? className : "w-full min-h-full"
        )}>
            {children}
        </p>
    )
}