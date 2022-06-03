import * as React from "react";
import { LineType } from ".";

export interface FakeCodeContextProps {
  minLines?: number;
  maxLines?: number;
  minWordsPerLine?: number;
  maxWordsPerLine?: number;
  minWordWidth?: number;
  maxWordWidth?: number;
  maxIndent?: number;
  animationTime?: number;
  colors?: string[];
  children?: React.ReactNode;
  lines?: LineType[];
  predefinedLines?: LineType[];
  wordStyle?: React.CSSProperties;
  tabWidth?: number;
}
