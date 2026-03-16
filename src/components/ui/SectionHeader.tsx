import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    align?: "left" | "center";
}

export function SectionHeader({ title, subtitle, className, align = "center" }: SectionHeaderProps) {
    return (
        <div className={cn(
            "mb-12 space-y-4",
            align === "center" ? "text-center" : "text-left",
            className
        )}>
            <h2 className="section-title">
                {title}
            </h2>
            {subtitle && (
                <p className="section-desc text-slate-600 max-w-2xl">
                    {subtitle}
                </p>
            )}
            <div className={cn(
                "h-1.5 w-20 rounded-full bg-brand",
                align === "center" ? "mx-auto" : "mr-auto"
            )} />
        </div>
    );
}
