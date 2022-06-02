import * as React from "react";
import { Code } from "./Code";
import { FakeCodeContextProvider } from "./contexts";
import { FakeCodeContextProps } from "./types";

export const CodeSkeleton: React.FC<FakeCodeContextProps> = (
  props?: FakeCodeContextProps
) => {
  return (
    <FakeCodeContextProvider {...props}>
      <Code />
    </FakeCodeContextProvider>
  );
};
