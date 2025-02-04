/* eslint-disable */
import { hsl, oklch, formatHex } from "culori";

// HSL values from your CSS
const hslColors = {
  "--background": "hsl(0 0% 3.9%)",
  "--foreground": "hsl(0 0% 98%)",
  "--primary": "hsl(0 0% 98%)",
  "--primary-foreground": "hsl(0 0% 9%)",
  "--destructive": "hsl(0 62.8% 30.6%)",
  "--ring": "hsl(0 0% 83.1%)",
  "--chart-1": "hsl(220 70% 50%)",
  "--chart-2": "hsl(160 60% 45%)",
  "--chart-3": "hsl(30 80% 55%)",
  "--chart-4": "hsl(280 65% 60%)",
  "--chart-5": "hsl(340 75% 55%)",
};

// Convert HSL to OKLCH
const convertHsltoOklch = (hslColorsData: any) => {
  const convertedColors = {};
  for (const key in hslColorsData) {
    const hslValue = hsl(hslColorsData[key]);
    if (!hslValue) return;
    else {
      const oklchValue = oklch(hslValue);
      console.log(oklchValue);
      //   // @ts-ignore
      //   const l = (oklchValue as number).l.toFixed(4);
      //   // @ts-ignore
      //   const c = (oklchValue as number).c.toFixed(4);
      //   // @ts-ignore
      //   const h = (oklchValue as number).h.toFixed(2);
      //   // @ts-ignore
      //   convertedColors[key] = `oklch(${l}${c}${h})`;
    }
  }
  return convertedColors;
};

const convertedColors = convertHsltoOklch(hslColors);
export { convertedColors, convertHsltoOklch };
