import * as React from "react";
import { defaultValues } from "../default";
import { getRandomCode } from "../functions/randomCode";
import { FakeCodeContextProps, LineType } from "../types";

export const FakeCodeContext = React.createContext({} as FakeCodeContextProps);

function makeLines(predefinedLines?: LineType[], props?: FakeCodeContextProps) {
  if (predefinedLines) {
    return predefinedLines;
  }
  return getRandomCode(
    props?.minWordsPerLine || defaultValues.minWordsPerLine,
    props?.maxWordsPerLine || defaultValues.maxWordsPerLine,
    props?.minWordWidth || defaultValues.minWordWidth,
    props?.maxWordWidth || defaultValues.maxWordWidth,
    props?.minLines || defaultValues.minLines,
    props?.maxLines || defaultValues.maxLines,
    props?.maxIndent || defaultValues.maxIndent,
    props?.colors || defaultValues.colors
  );
}

export const FakeCodeContextProvider: React.FC<FakeCodeContextProps> = ({
  children,
  minWordsPerLine,
  maxWordsPerLine,
  minWordWidth,
  maxWordWidth,
  minLines,
  maxLines,
  maxIndent,
  colors,
  predefinedLines,
  ...rest
}: FakeCodeContextProps) => {
  const [currLines, setCurrLines] = React.useState<LineType[]>(
    [] as LineType[]
  );

  React.useEffect(() => {
    setCurrLines(
      makeLines(predefinedLines, {
        minWordsPerLine,
        maxWordsPerLine,
        minWordWidth,
        maxWordWidth,
        minLines,
        maxLines,
        maxIndent,
        colors,
      })
    );
  }, [
    minWordsPerLine,
    maxWordsPerLine,
    minWordWidth,
    maxWordWidth,
    minLines,
    maxLines,
    maxIndent,
    colors,
    predefinedLines,
  ]);

  return (
    <FakeCodeContext.Provider
      value={{ lines: currLines, ...rest } as FakeCodeContextProps}
    >
      {children}
    </FakeCodeContext.Provider>
  );
};
