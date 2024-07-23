interface Trophy {
    range: number | number[];
    title: string;
    image: string
}

const trophiesList: Trophy[] = [
    {
        range: 0,
        title: "Ecomostro",
        image: "/img/0.png"
    },
    {
        range: [1, 2, 3, 4],
        title: "Apprendista",
        image: "/img/14.png"
    },
    {
        range: [5, 6, 7],
        title: "Divulgatore",
        image: "/img/57.png"
    },
    {
        range: [8, 9],
        title: "Ricercatore",
        image: "/img/89.png"
    },
    {
        range: 10,
        title: "Maestro",
        image: "/img/10.png"
    },
]

export default trophiesList