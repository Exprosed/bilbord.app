import React, { useState, ChangeEvent, MouseEvent, useEffect } from "react";
import "./AutoComplete.scss";

interface AutoCompleteProps {}

const options = ["a", "ab", "abc", "bc", "ac", "bac"];

const AutoComplete: React.FC<AutoCompleteProps> = () => {
  const [buttonLabels, setButtonLabels] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  function rerenderButtonLabels(newInput: string) {
    const newLabels = options.filter((option) => option.startsWith(newInput));
    setButtonLabels(newLabels);
  }

  function updateInput(event: ChangeEvent<HTMLInputElement>) {
    const newInput = event.target.value;
    rerenderButtonLabels(newInput);
    setInputValue(newInput);
  }

  function buttonClicked(event: MouseEvent<HTMLButtonElement>) {
    const targetElement = event.target;
    if (targetElement instanceof HTMLElement) {
      const newInput = targetElement.dataset.value as string;
      rerenderButtonLabels(newInput);
      setInputValue(newInput);
    }
  }

  useEffect(() => {
    rerenderButtonLabels("");
  }, []);

  return (
    <div>
      <input type="text" value={inputValue} onChange={updateInput}></input>
      <div>
        <ul>
          {buttonLabels.map((label, index) => (
            <li key={index}>
              <button onClick={buttonClicked} data-value={label}>
                Select: {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AutoComplete;
