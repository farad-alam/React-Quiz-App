import React from "react";
import Checkbox from "./Checkbox";

function Options() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-12">
        <Checkbox label="Answer One" />
        <Checkbox label="Answer Two" />
        <Checkbox label="Answer Three" />
        <Checkbox label="Answer Four" />
        <Checkbox label="Answer Five" />
      </div>
    </>
  );
}

export default Options;
