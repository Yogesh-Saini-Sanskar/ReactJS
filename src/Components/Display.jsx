import inputField from "../CSS/Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <div className={inputField.display_parent}>
      <input
        className={`${inputField.input_div} focus:outline-none`}
        type="text"
        value={displayValue}
        readOnly
      ></input>
    </div>
  );
};
export default Display;
