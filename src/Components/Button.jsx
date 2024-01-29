import buttonStyle from "../CSS/ButtonContent.module.css";

const Button = ({ button_list, OnButtonClicked, index }) => {
  return (
    <div className={buttonStyle.button_div}>
      {button_list.map((button) => (
        <button
          key={index}
          className={`${buttonStyle.buttons} ${
            button === "=" ? buttonStyle.equalsButton : ""
          } `}
          onClick={() => OnButtonClicked(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default Button;
