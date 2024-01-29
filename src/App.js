import { useState } from "react";
import "./App.css";
import styles from "./CSS/App.module.css";
// import inputField from "./CSS/AppHeading.module.css"

import Button from "./Components/Button";
import Display from "./Components/Display";

function App() {
  const button_list = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    ".",
    "=",
  ];

  const [calValue, setCalValue] = useState("");
  const OnButtonClicked = (buttonValue) => {
    try {
      if (buttonValue === "C") {
        setCalValue("");
      } else if (buttonValue === "=") {
        const result = eval(calValue);
        setCalValue(result);
      } else {
        const displayValue = calValue + buttonValue;
        setCalValue(displayValue);
      }
    } catch (error) {
      // Handle the error gracefully, e.g., display an error message
      console.error("An error occurred:", error.message);
      setCalValue("Invalid expression ");
    }
  };
  return (
    <div className={styles.cal_div}>
      <Display displayValue={calValue} />
      <Button OnButtonClicked={OnButtonClicked} button_list={button_list} />
    </div>
  );
}

export default App;
