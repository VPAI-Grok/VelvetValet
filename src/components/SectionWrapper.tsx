import { clsx } from "clsx";

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export default function SectionWrapper({ children, className, id }: SectionWrapperProps) {
    return (
        <section id={id} className={clsx("py-20 md:py-28 relative", className)}>
            <div className="container mx-auto px-6 md:px-8 relative z-10">
                {children}
            </div>
        </section>
    );
}
