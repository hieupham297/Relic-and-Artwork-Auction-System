import "./CustomButton.css";

export const CustomButton = (props) => {
  return (
    <>
      <div className="button-wrapper">
        <button
          id="custom-button"
          style={{ width: props.width, height: props.height }}
        >
          {props.name}
        </button>
      </div>
    </>
  );
};
