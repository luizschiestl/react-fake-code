import { LineType } from "../types/LineType";

function getNumberOfLines(minLines: number, maxLines: number) {
  return Math.floor(Math.random() * (maxLines - minLines)) + minLines;
}

function getRandomIndentation(maxIndent: number) {
  return Math.floor(Math.random() * maxIndent);
}

export function getRandomCode(
  minWords: number,
  maxWords: number,
  minWidth: number,
  maxWidth: number,
  minLines: number,
  maxLines: number,
  maxIndent: number,
  colors: string[]
) {
  const getRandomWidth = () => {
    return Math.floor(Math.random() * (maxWidth - minWidth)) + minWidth;
  };

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getRandomLine = (indent: number) => {
    const min = minWords;
    const maxMinusMin = maxWords - min;
    return {
      indent,
      words: Array.apply(
        null,
        Array(Math.floor(Math.random() * maxMinusMin) + min)
      ).map(() => ({
        width: getRandomWidth(),
        color: getRandomColor(),
      })),
    };
  };

  const getUnindentedLine = () => {
    return getRandomLine(0);
  };

  const getSafelyIndentedLine = (lastLine: LineType) => {
    let indent = getRandomIndentation(maxIndent);
    if (Math.abs(lastLine.indent - indent) > 1) {
      indent = Math.floor(Math.random()) + lastLine.indent;
    }
    return getRandomLine(indent);
  };

  const numberOfLines = getNumberOfLines(minLines, maxLines);
  let lines = [] as LineType[];

  for (let i = 0; i < numberOfLines; i++) {
    lines.push(
      i === 0 || i === numberOfLines - 1
        ? getUnindentedLine()
        : getSafelyIndentedLine(lines[lines.length - 1])
    );
  }
  return lines;
}
