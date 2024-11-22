import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import { skeleton, contentPath } from "@skeletonlabs/skeleton/plugin";
import * as themes from "@skeletonlabs/skeleton/themes";
import tutors from "./src/lib/ui/themes/styles/tutors";
import type { Config } from "tailwindcss";

export default {
  darkMode: "selector",
  content: ["./src/**/*.{html,js,svelte,ts}", contentPath(import.meta.url, "svelte")],
  safelist: [
    {
      pattern: /border|text/
    }
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": { content: '""' },
            "code::after": { content: '""' }
          }
        }
      }
    }
  },

  plugins: [
    typography,
    forms,
    skeleton({
      // NOTE: each theme included will be added to your CSS bundle
      themes: [
        themes.cerberus,
        themes.rose,
        themes.nosh,
        themes.mona,
        themes.nosh,
        themes.fennec,
        tutors,
        themes.concord,
        themes.nouveau
      ]
    })
  ]
} satisfies Config;
