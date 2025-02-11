export const getRandomBG = () => {
    const colors = [
        "#e85657",
        "#e89f56",
        "#f6b100",
        "#025cca",
        "#02ca3a"
    ];
    const color = colors[Math.floor(Math.random() * colors.length)]
    return "bg-[" + color + "]";
}

export const getBackground = () => {
    const colors = [
        "#2874a6",
        "#cd6155",
        "#76448a",
        "#138d75",
        "#af601a"
    ];
    const color = colors[Math.floor(Math.random() * colors.length)]
    return color;
}