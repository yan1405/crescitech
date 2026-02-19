import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#0066FF",
                    light: "#E6F0FF",
                    dark: "#0052CC",
                    50: "#E6F0FF",
                    100: "#CCE0FF",
                    200: "#99C2FF",
                    300: "#66A3FF",
                    400: "#3385FF",
                    500: "#0066FF",
                    600: "#0052CC",
                    700: "#003D99",
                    800: "#002966",
                    900: "#001433",
                },
                neutral: {
                    50: "#F9FAFB",
                    100: "#F3F4F6",
                    200: "#E5E7EB",
                    300: "#D1D5DB",
                    400: "#9CA3AF",
                    500: "#6B7280",
                    600: "#4B5563",
                    700: "#374151",
                    800: "#1F2937",
                    900: "#111827",
                },
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
    ],
};

export default config;
