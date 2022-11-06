/** @type {import('tailwindcss').Config} */
module.exports = {
   daisyui: {
      themes: [
         {
            light: {
               "primary": "#FF2D54",
               "secondary": "#F000B8",
               "accent": "#37CDBE",
               "neutral": "#2F2F2F",
               "neutral-focus": "#0F0F0F",
               "neutral-content": "#D1D1D6",
               "neutral2": "#0F0F0F",
               "background": "#E5E5E5",
               "base-100": "#FFFFFF",
               "info": "#3ABFF8",
               "success": "#36D399",
               "warning": "#FBBD23",
               "error": "#F87272",
            },
         }
      ]
   },
   content: [],
   theme: {
      extend: {},
   },
   plugins: [require('daisyui')],
}
