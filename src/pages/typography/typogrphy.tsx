import {
    TypographyH1,
    TypographyH2,
    TypographyH3,
    TypographyH4,
    TypographyH5,
} from "./components/h";
import { TypographyP1, Caption } from "./components/body1";

export const Typography = () => {
    const headers = [
        <TypographyH1 className="text-left" />,
        <TypographyH2 />,
        <TypographyH3 />,
        <TypographyH4 />,
        <TypographyH5 />,
        <TypographyP1 className="" />,
        <TypographyP1 className="font-bold" />,
        <TypographyP1 className="text-[15px]" />,
        <TypographyP1 className="text-[15px] font-medium" />,
        <TypographyP1 className="text-[15px] font-bold" />,
        <Caption />,
    ];
    return (
        <div className="w-[1200px] mx-auto">
            {headers.map((header, index) => (
                <div key={index} className="py-5">
                    {header}
                </div>
            ))}
        </div>
    );
};
