interface SpanProps {
    children: React.ReactNode;
}

export const Span = ({ children }: SpanProps) => {
    return (
        <span className="text-blue-200">{children}</span>
    );
}