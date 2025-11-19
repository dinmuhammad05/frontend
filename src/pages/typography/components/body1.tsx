import { cn } from "@/lib/utils";
import type { IProps } from "./type";

export function TypographyP1({
    text = "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
    className,
}: IProps) {
    return (
        <p className={cn("leading-7 not-first:mt-6 text-[24px]", className)}>
            {text}
        </p>
    );
}


export function Caption({
    text = "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
    className,
}: IProps) {
    return (
        <body className={cn("leading-7 not-first:mt-6]", className)}>
            {text}
        </body>
    );
}
