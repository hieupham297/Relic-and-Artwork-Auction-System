import "./CustomInput.css";

export const CustomInput = (props) => {
  return (
    <>
      <div className="custom-input">
        <span className="icon material-symbols-outlined">{props.iconName}</span>
        <input type={props.inputType} placeholder={props.placeholder} />
      </div>
    </>
  );
};
