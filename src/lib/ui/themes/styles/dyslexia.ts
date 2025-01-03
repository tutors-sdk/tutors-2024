import type { Theme } from '@skeletonlabs/skeleton/themes';

const dyslexia = {
  name: "dyslexia",
  properties: {
    "--type-scale-factor": "1.067",
    "--type-scale-1": "calc(0.75rem * var(--type-scale-factor))",
    "--type-scale-2": "calc(0.875rem * var(--type-scale-factor))",
    "--type-scale-3": "calc(1rem * var(--type-scale-factor))",
    "--type-scale-4": "calc(1.125rem * var(--type-scale-factor))",
    "--type-scale-5": "calc(1.25rem * var(--type-scale-factor))",
    "--type-scale-6": "calc(1.5rem * var(--type-scale-factor))",
    "--type-scale-7": "calc(1.875rem * var(--type-scale-factor))",
    "--type-scale-8": "calc(2.25rem * var(--type-scale-factor))",
    "--type-scale-9": "calc(3rem * var(--type-scale-factor))",
    "--type-scale-10": "calc(3.75rem * var(--type-scale-factor))",
    "--type-scale-11": "calc(4.5rem * var(--type-scale-factor))",
    "--type-scale-12": "calc(6rem * var(--type-scale-factor))",
    "--type-scale-13": "calc(8rem * var(--type-scale-factor))",
    "--base-font-color": "var(--color-surface-950)",
    "--base-font-color-dark": "var(--color-surface-50)",
    "--base-font-family": "OpenDyslexic, sans-serif",
    "--base-font-size": "inherit",
    "--base-line-height": "inherit",
    "--base-font-weight": "normal",
    "--base-font-style": "normal",
    "--base-letter-spacing": "0em",
    "--heading-font-color": "inherit",
    "--heading-font-color-dark": "inherit",
    "--heading-font-family": "inherit",
    "--heading-font-weight": "bold",
    "--heading-font-style": "normal",
    "--heading-letter-spacing": "inherit",
    "--anchor-font-color": "var(--color-primary-500)",
    "--anchor-font-color-dark": "var(--color-primary-500)",
    "--anchor-font-family": "inherit",
    "--anchor-font-size": "inherit",
    "--anchor-line-height": "inherit",
    "--anchor-font-weight": "inherit",
    "--anchor-font-style": "inherit",
    "--anchor-letter-spacing": "inherit",
    "--anchor-text-decoration": "none",
    "--anchor-text-decoration-hover": "underline",
    "--anchor-text-decoration-active": "none",
    "--anchor-text-decoration-focus": "none",
    "--space-scale-factor": "1",
    "--radii-default": "6px",
    "--radii-container": "12px",
    "--border-width-default": "1px",
    "--divide-width-default": "1px",
    "--outline-width-default": "1px",
    "--ring-width-default": "1px",
    "--body-background-color": "var(--color-surface-50)",
    "--body-background-color-dark": "var(--color-surface-950)",
    "--color-primary-50": "241 240 224",
    "--color-primary-100": "230 229 220",
    "--color-primary-200": "232 231 203",
    "--color-primary-300": "217 216 172",
    "--color-primary-400": "189 186 110",
    "--color-primary-500": "161 157 48",
    "--color-primary-600": "145 141 43",
    "--color-primary-700": "121 118 36",
    "--color-primary-800": "97 94 29",
    "--color-primary-900": "66 60 14",
    "--color-primary-950": "59 58 18",
    "--color-primary-contrast-dark": "var(--color-primary-950)",
    "--color-primary-contrast-light": "var(--color-primary-50)",
    "--color-primary-contrast-50": "var(--color-primary-contrast-dark)",
    "--color-primary-contrast-100": "var(--color-primary-contrast-dark)",
    "--color-primary-contrast-200": "var(--color-primary-contrast-dark)",
    "--color-primary-contrast-300": "var(--color-primary-contrast-dark)",
    "--color-primary-contrast-400": "var(--color-primary-contrast-dark)",
    "--color-primary-contrast-500": "var(--color-primary-contrast-light)",
    "--color-primary-contrast-600": "var(--color-primary-contrast-light)",
    "--color-primary-contrast-700": "var(--color-primary-contrast-light)",
    "--color-primary-contrast-800": "var(--color-primary-contrast-light)",
    "--color-primary-contrast-900": "var(--color-primary-contrast-light)",
    "--color-primary-contrast-950": "var(--color-primary-contrast-light)",
    "--color-secondary-50": "241 240 224",
    "--color-secondary-100": "230 229 220",
    "--color-secondary-200": "232 231 203",
    "--color-secondary-300": "217 216 172",
    "--color-secondary-400": "189 186 110",
    "--color-secondary-500": "161 157 48",
    "--color-secondary-600": "145 141 43",
    "--color-secondary-700": "121 118 36",
    "--color-secondary-800": "97 94 29",
    "--color-secondary-900": "66 60 14",
    "--color-secondary-950": "59 58 18",
    "--color-secondary-contrast-dark": "var(--color-secondary-950)",
    "--color-secondary-contrast-light": "var(--color-secondary-50)",
    "--color-secondary-contrast-50": "var(--color-secondary-contrast-dark)",
    "--color-secondary-contrast-100": "var(--color-secondary-contrast-dark)",
    "--color-secondary-contrast-200": "var(--color-secondary-contrast-dark)",
    "--color-secondary-contrast-300": "var(--color-secondary-contrast-dark)",
    "--color-secondary-contrast-400": "var(--color-secondary-contrast-dark)",
    "--color-secondary-contrast-500": "var(--color-secondary-contrast-dark)",
    "--color-secondary-contrast-600": "var(--color-secondary-contrast-dark)",
    "--color-secondary-contrast-700": "var(--color-secondary-contrast-light)",
    "--color-secondary-contrast-800": "var(--color-secondary-contrast-light)",
    "--color-secondary-contrast-900": "var(--color-secondary-contrast-light)",
    "--color-secondary-contrast-950": "var(--color-secondary-contrast-light)",
    "--color-tertiary-50": "251 243 218",
    "--color-tertiary-100": "230 229 220",
    "--color-tertiary-200": "248 234 193",
    "--color-tertiary-300": "243 222 156",
    "--color-tertiary-400": "235 197 82",
    "--color-tertiary-500": "226 172 8",
    "--color-tertiary-600": "203 155 7",
    "--color-tertiary-700": "170 129 6",
    "--color-tertiary-800": "136 103 5",
    "--color-tertiary-900": "66 60 14",
    "--color-tertiary-950": "91 68 1",
    "--color-tertiary-contrast-dark": "var(--color-tertiary-950)",
    "--color-tertiary-contrast-light": "var(--color-tertiary-50)",
    "--color-tertiary-contrast-50": "var(--color-tertiary-contrast-dark)",
    "--color-tertiary-contrast-100": "var(--color-tertiary-contrast-dark)",
    "--color-tertiary-contrast-200": "var(--color-tertiary-contrast-dark)",
    "--color-tertiary-contrast-300": "var(--color-tertiary-contrast-dark)",
    "--color-tertiary-contrast-400": "var(--color-tertiary-contrast-dark)",
    "--color-tertiary-contrast-500": "var(--color-tertiary-contrast-dark)",
    "--color-tertiary-contrast-600": "var(--color-tertiary-contrast-dark)",
    "--color-tertiary-contrast-700": "var(--color-tertiary-contrast-light)",
    "--color-tertiary-contrast-800": "var(--color-tertiary-contrast-light)",
    "--color-tertiary-contrast-900": "var(--color-tertiary-contrast-light)",
    "--color-tertiary-contrast-950": "var(--color-tertiary-contrast-light)",
    "--color-success-50": "226 243 236",
    "--color-success-100": "230 229 220",
    "--color-success-200": "207 235 224",
    "--color-success-300": "177 223 205",
    "--color-success-400": "119 198 167",
    "--color-success-500": "61 174 129",
    "--color-success-600": "55 157 116",
    "--color-success-700": "46 131 97",
    "--color-success-800": "37 104 77",
    "--color-success-900": "66 60 14",
    "--color-success-950": "23 64 47",
    "--color-success-contrast-dark": "var(--color-success-950)",
    "--color-success-contrast-light": "var(--color-success-50)",
    "--color-success-contrast-50": "var(--color-success-contrast-dark)",
    "--color-success-contrast-100": "var(--color-success-contrast-dark)",
    "--color-success-contrast-200": "var(--color-success-contrast-dark)",
    "--color-success-contrast-300": "var(--color-success-contrast-dark)",
    "--color-success-contrast-400": "var(--color-success-contrast-dark)",
    "--color-success-contrast-500": "var(--color-success-contrast-dark)",
    "--color-success-contrast-600": "var(--color-success-contrast-dark)",
    "--color-success-contrast-700": "var(--color-success-contrast-light)",
    "--color-success-contrast-800": "var(--color-success-contrast-light)",
    "--color-success-contrast-900": "var(--color-success-contrast-light)",
    "--color-success-contrast-950": "var(--color-success-contrast-light)",
    "--color-warning-50": "251 243 218",
    "--color-warning-100": "230 229 220",
    "--color-warning-200": "248 234 193",
    "--color-warning-300": "243 222 156",
    "--color-warning-400": "235 197 82",
    "--color-warning-500": "226 172 8",
    "--color-warning-600": "203 155 7",
    "--color-warning-700": "170 129 6",
    "--color-warning-800": "136 103 5",
    "--color-warning-900": "66 60 14",
    "--color-warning-950": "93 71 4",
    "--color-warning-contrast-dark": "var(--color-warning-950)",
    "--color-warning-contrast-light": "var(--color-warning-50)",
    "--color-warning-contrast-50": "var(--color-warning-contrast-dark)",
    "--color-warning-contrast-100": "var(--color-warning-contrast-dark)",
    "--color-warning-contrast-200": "var(--color-warning-contrast-dark)",
    "--color-warning-contrast-300": "var(--color-warning-contrast-dark)",
    "--color-warning-contrast-400": "var(--color-warning-contrast-dark)",
    "--color-warning-contrast-500": "var(--color-warning-contrast-dark)",
    "--color-warning-contrast-600": "var(--color-warning-contrast-light)",
    "--color-warning-contrast-700": "var(--color-warning-contrast-light)",
    "--color-warning-contrast-800": "var(--color-warning-contrast-light)",
    "--color-warning-contrast-900": "var(--color-warning-contrast-light)",
    "--color-warning-contrast-950": "var(--color-warning-contrast-light)",
    "--color-error-50": "250 219 224",
    "--color-error-100": "230 229 220",
    "--color-error-200": "247 195 203",
    "--color-error-300": "242 158 172",
    "--color-error-400": "232 86 110",
    "--color-error-500": "222 13 48",
    "--color-error-600": "200 12 43",
    "--color-error-700": "167 10 36",
    "--color-error-800": "133 8 29",
    "--color-error-900": "66 60 14",
    "--color-error-950": "92 5 19",
    "--color-error-contrast-dark": "var(--color-error-950)",
    "--color-error-contrast-light": "var(--color-error-50)",
    "--color-error-contrast-50": "var(--color-error-contrast-dark)",
    "--color-error-contrast-100": "var(--color-error-contrast-dark)",
    "--color-error-contrast-200": "var(--color-error-contrast-dark)",
    "--color-error-contrast-300": "var(--color-error-contrast-dark)",
    "--color-error-contrast-400": "var(--color-error-contrast-light)",
    "--color-error-contrast-500": "var(--color-error-contrast-light)",
    "--color-error-contrast-600": "var(--color-error-contrast-light)",
    "--color-error-contrast-700": "var(--color-error-contrast-light)",
    "--color-error-contrast-800": "var(--color-error-contrast-light)",
    "--color-error-contrast-900": "var(--color-error-contrast-light)",
    "--color-error-contrast-950": "var(--color-error-contrast-light)",
    "--color-surface-50": "230 229 220",
    "--color-surface-100": "222 220 208",
    "--color-surface-200": "213 211 196",
    "--color-surface-300": "188 185 161",
    "--color-surface-400": "138 133 90",
    "--color-surface-500": "88 80 19",
    "--color-surface-600": "79 72 17",
    "--color-surface-700": "66 60 14",
    "--color-surface-800": "53 48 11",
    "--color-surface-900": "43 39 9",
    "--color-surface-950": "39 35 7",
    "--color-surface-contrast-dark": "var(--color-surface-950)",
    "--color-surface-contrast-light": "var(--color-surface-50)",
    "--color-surface-contrast-50": "var(--color-surface-contrast-dark)",
    "--color-surface-contrast-100": "var(--color-surface-contrast-dark)",
    "--color-surface-contrast-200": "var(--color-surface-contrast-dark)",
    "--color-surface-contrast-300": "var(--color-surface-contrast-dark)",
    "--color-surface-contrast-400": "var(--color-surface-contrast-light)",
    "--color-surface-contrast-500": "var(--color-surface-contrast-light)",
    "--color-surface-contrast-600": "var(--color-surface-contrast-light)",
    "--color-surface-contrast-700": "var(--color-surface-contrast-light)",
    "--color-surface-contrast-800": "var(--color-surface-contrast-light)",
    "--color-surface-contrast-900": "var(--color-surface-contrast-light)",
    "--color-surface-contrast-950": "var(--color-surface-contrast-light)"
  },
  metadata: {
    version: "3.0.0"
  }
} satisfies Theme;

export default dyslexia;
