import { getRandomColor } from "./randomColor";
import { getRandomWidth } from "./randomWidth";

export function getRandomLine(
  minWords: number,
  maxWords: number,
  minWidth: number,
  maxWidth: number,
  indent: number,
  colors: string[]
) {
  const min = minWords;
  const maxMinusMin = maxWords - min;
  return {
    indent,
    words: Array.apply(
      null,
      Array(Math.floor(Math.random() * maxMinusMin) + min)
    ).map(() => ({
      width: getRandomWidth(minWidth, maxWidth),
      color: getRandomColor(colors),
    })),
  };
}
