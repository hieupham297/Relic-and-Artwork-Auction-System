import { NavLink } from "react-router-dom";
import "./CustomButton.css";

export const CustomButton = (props) => {
  return (
    <>
      <div className="button-wrapper">
        <NavLink to={props.route}>
          <button
            id="custom-button"
            style={{ width: props.width, height: props.height }}
          >
            {props.name}
          </button>
        </NavLink>
      </div>
    </>
  );
};
