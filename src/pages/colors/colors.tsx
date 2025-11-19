export const Colors = () => {
    const colors = [
        { name: "Green", value: "#4BA06C" },
        { name: "Purple", value: "#5564D7" },
        { name: "Yellow", value: "#F1BE5B" },
        { name: "Red", value: "#E04B43" },
        { name: "Green 2", value: "#64D26F" },
        { name: "Dark", value: "#01221D" },
        { name: "White", value: "#FFFFFF" },
        { name: "Neutral/01", value: "#36414F" },
        { name: "Neutral/02", value: "#828FA2" },
        { name: "Neutral/03", value: "#C0C7D0" },
        { name: "Neutral/04", value: "#E2E8ED" },
        { name: "Neutral/05", value: "#FFFFFF" },
        { name: "Background", value: "#FAFAFA" },
    ];

    return (
        <div className="flex flex-wrap justify-between mx-auto gap-4 p-6 w-[1200px] ">
         
            {colors.map(({ name, value }, index) => (
                <div
                    key={index}
                    className="w-[161px] h-[161px] border rounded-lg overflow-hidden shadow-lg"
                >
                    <div
                        className="w-full h-[100px]"
                        style={{ backgroundColor: value }}
                    ></div>
                    <div className="p-2 flex flex-col items-center justify-center">
                        <p className="font-semibold">{name}</p>
                        <p className="text-sm text-gray-600">{value}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
