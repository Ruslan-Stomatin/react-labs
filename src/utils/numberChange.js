function createNumberChangeHandler(min, externalOnChange) {
  return function (event) {
    const textValue = event.target.value;
    const numberValue = Number(textValue);
    let nextValue;

    if (isFinite(numberValue)) {
      if (numberValue < min) {
        nextValue = min;
      } else {
        nextValue = numberValue;
      }
    } else {
      nextValue = min;
    }

    externalOnChange(nextValue);
  };
}

export default createNumberChangeHandler;
