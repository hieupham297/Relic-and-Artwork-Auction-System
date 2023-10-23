import "./CustomLabel.css";

export const CustomLabel = (props) => {
  return (
    <>
      <label className="custom-label" htmlFor="">{props.label}</label>
    </>
  );
};
