import Button from "../Button/Button";
import s from "./DinnerButton.module.scss";

function DinnerButton({ isActive = false, children = "Dinner", className = "", ...props }) {
  const mergedClass = `${s.dinner} ${isActive ? s.active : ""} ${className}`;

  return (
    <Button {...props} icon={null} className={mergedClass}>
      {children}
    </Button>
  );
}

export default DinnerButton;
