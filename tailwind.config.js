module.exports = {
    purge: [],
    darkMode: "class", // or 'media' or 'class'

    theme: {
        screens: {
            // 'xs': '0px',
            // => @media (min-width: 0px) { ... }

            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1290px",
            // => @media (min-width: 1280px) { ... }

            //'2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            zIndex: {
                1: "1",
                "-1": "-1",
                "-2": "-2",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
