import { defineConfig } from 'windicss/helpers';

const variable = variableName => {
  let fullVariable = `var(--${variableName})`;

  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(${fullVariable}, ${opacityValue})`;
    }

    if (opacityVariable !== undefined) {
      return `rgba(${fullVariable}, var(${opacityVariable}, 1))`;
    }

    return fullVariable;
  };
};

export default defineConfig({
  theme: {
    extend: {
      colors: {
        background: {
          app: variable("color-app"),
          DEFAULT: variable("color-background"),
          darker: variable("color-background-darker"),
        },
        body: variable("color-body"),
        primary: variable("color-primary"),
        placeholder: variable("color-placeholder"),
        border: variable("color-border"),
      },
      screens: {
        "3xl": "1800px",
        950: "950px",
      },
    },
    fontSize: {
      "2xs": [
        "0.5rem",
        {
          letterSpacing: "0.01em",
        },
      ],
      xs: [
        "0.75rem",
        {
          letterSpacing: "0.0004908em",
        },
      ],
      sm: [
        "0.875rem",
        {
          letterSpacing: "-0.0062235em",
        },
      ],
      base: [
        "1rem",
        {
          letterSpacing: "-0.0109598em",
        },
      ],
      lg: [
        "1.125rem",
        {
          letterSpacing: "-0.0143007em",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          letterSpacing: "-0.0194923em",
        },
      ],
      "3xl": [
        "1.875rem",
        {
          letterSpacing: "-0.0213145em",
        },
      ],
      "4xl": [
        "2.25rem",
        {
          letterSpacing: "-0.0219541em",
        },
      ],
      "5xl": [
        "3rem",
        {
          letterSpacing: "-0.0222574em",
        },
      ],
      "6xl": [
        "4rem",
        {
          letterSpacing: "-0.0222974em",
        },
      ],
    },
    fontFamily: {
      sans: ["InterVariable", "Inter", "sans-serif"],
    },
  },
  extract: {
    include: ['**/*.{js,jsx,css}'],
    exclude: ['node_modules', '.git', '.next/**/*'],
  },
});
