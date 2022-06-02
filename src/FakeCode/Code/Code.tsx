import * as React from "react";
import { useContext } from "react";
import { FakeCodeContext } from "../contexts/FakeCodeContext";
import { Line } from "../Line";
import "../styles.scss";

export function Code() {
  const { lines } = useContext(FakeCodeContext);
  return (
    <div className="code">
      {lines!.map((_, i) => (
        <Line key={i} position={i} />
      ))}
    </div>
  );
}
