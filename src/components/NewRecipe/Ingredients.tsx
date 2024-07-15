import React, { useState } from "react";

export function Ingredients() {
  const [amount, setAmount] = useState(0);

  const addInput = () => {
    setAmount((c) => c + 1);
  };

  const handleEnter = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    ev.preventDefault();
    ev.stopPropagation();
  };

  const isLastInput = (position: number) => position === amount;

  return (
    <div className="ingredients">
      <h3>Ingredients:</h3>
      {amount > 0 ? (
        <ul>
          {Array.from({ length: amount }).map((_, idx) => (
            <li key={`ingredient-${idx}`}>
              <input
                onKeyUp={(e) => {
                  if (e.code.toLowerCase() === "enter") {
                    addInput();
                    handleEnter(e);
                    return false;
                  }
                }}
                onKeyDown={(e) => {
                  if (e.code.toLowerCase() === "enter") {
                    handleEnter(e);
                    return false;
                  }
                }}
                className="focus-highlight"
                autoFocus={isLastInput(idx + 1)}
                type="text"
                name="ingredient"
              />{" "}
              {isLastInput(idx + 1) ? (
                <button
                  className="focus-highlight"
                  onClick={addInput}
                  type="button"
                >
                  +
                </button>
              ) : null}
            </li>
          ))}
        </ul>
      ) : (
        <button type="button" onClick={addInput}>
          Add ingredient
        </button>
      )}
    </div>
  );
}
