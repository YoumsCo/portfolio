interface Props {
    children: React.ReactNode;
    divKey?: string;
}

export const Div = ({ children, divKey }: Props) => {
    return (
        <div key={divKey && divKey} className="desc transition-all duration-500 relative w-full min-h-24 flex flex-col justify-center items-start gap-2 p-7 pt-0 pl-9 before:transition-all before:duraton-500 before:absolute before:left-0 before:top-0 before:w-5 before:h-5 before:border-4 before:border-blue-200 before:rounded-full after:transition-all after:duraton-500 after:absolute after:left-[9px] after:top-5 after:w-[2px] after:bg-blue-200">
            {children}
        </div>
    );
}