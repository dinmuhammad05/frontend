import { cn } from "@/lib/utils"; // sening cn() funksiyang
import type { IProps } from "./type";

export const TypographyH1 = ({
    text = "Taxing Laughter: The Joke Tax Chronicles",
    className,
}: IProps) => {
    return (
        <h1
            className={cn(
                "scroll-m-20 text-center text-black text-4xl font-extrabold tracking-tight text-balance",
                className
            )}
        >
            {text}
        </h1>
    );
};

export function TypographyH2({
    text = " The People of the Kingdom",
    className,
}: IProps) {
    return (
        <h2
            className={cn(
                "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
                className
            )}
        >
            {text}
        </h2>
    );
}

export function TypographyH3({ text = "The Joke Tax", className }: IProps) {
    return (
        <h3
            className={cn(
                "scroll-m-20 text-2xl font-semibold tracking-tight",
                className
            )}
        >
            {text}
        </h3>
    );
}

export function TypographyH4({
    text = "People stopped telling jokes",
    className,
}: IProps) {
    return (
        <h4
            className={cn(
                "scroll-m-20 text-2xl font-semibold tracking-tight",
                className
            )}
        >
            {text}{" "}
        </h4>
    );
}

export function TypographyH5({
    text = "People stopped telling jokes",
    className,
}: IProps) {
    return (
        <h5
            className={cn(
                "scroll-m-20 text-2xl font-semibold tracking-tight",
                className
            )}
        >
            {text}{" "}
        </h5>
    );
}
