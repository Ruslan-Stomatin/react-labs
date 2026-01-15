import type { ChangeEvent } from "react";

type NumberChangeHandler = (value: number) => void;

export function createNumberChangeHandler(
  min: number,
  externalOnChange: NumberChangeHandler
) {
  return function (event: ChangeEvent<HTMLInputElement>) {
    const textValue = event.target.value;
    const numberValue = Number(textValue);

    const nextValue =
      Number.isFinite(numberValue) && numberValue >= min
        ? numberValue
        : min;

    externalOnChange(nextValue);
  };
}
export default createNumberChangeHandler;
