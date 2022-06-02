import * as React from "react";
import { FakeCodeContext } from "../contexts/FakeCodeContext";
import "../styles.scss";

interface LineProps {
  position: number;
}

const getLineAnimationDuration = (
  linesLength: number,
  animationTime?: number
) => {
  return (animationTime || 2) / linesLength;
};

const getWordAnimationDuration = (
  lineAnimationDuration: number,
  wordsLength: number
) => {
  return `${lineAnimationDuration / wordsLength + 0.1}s`;
};

const getWordAnimationDelay = (
  lineAnimationDuration: number,
  wordsLength: number,
  currentWordIndex: number
) => {
  return `${lineAnimationDuration * (currentWordIndex / wordsLength)}s`;
};

export const Line: React.FC<LineProps> = ({ position }: LineProps) => {
  const { lines, animationTime, wordStyle } = React.useContext(FakeCodeContext);
  const [show, setShow] = React.useState(false);

  const lineAnimationDuration = getLineAnimationDuration(
    lines!.length,
    animationTime
  );
  const wordAnimationDuration = getWordAnimationDuration(
    lineAnimationDuration,
    lines![position].words.length
  );

  function init() {
    setTimeout(() => {
      setShow(true);
    }, lineAnimationDuration * (position + 1) * 1000);
  }

  React.useEffect(init, [lines, position, lineAnimationDuration]);

  const getWordStyle = (
    word: { color: string; width: number },
    wordIndex: number
  ) => {
    let style = {
      background: word.color,
      width: word.width,
    } as React.CSSProperties;
    if (show) {
      style = {
        ...style,
        animationDuration: wordAnimationDuration,
        animationDelay: getWordAnimationDelay(
          lineAnimationDuration,
          lines![position].words.length,
          wordIndex
        ),
        animationName: "var(--wordAnimation)",
        animationFillMode: "forwards",
        animationTimingFunction: "ease",
      };
    }
    if (wordStyle) {
      style = { ...style, ...wordStyle };
    }
    return style;
  };

  return (
    <div style={{ marginLeft: 20 * lines![position].indent, display: "flex" }}>
      {lines![position].words.map((word, x) => (
        <div
          key={x}
          className="code-skeleton-word"
          style={getWordStyle(word, x)}
        ></div>
      ))}
    </div>
  );
};
