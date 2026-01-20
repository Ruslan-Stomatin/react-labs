import Button from "../Button/Button";
import s from "./BreakfastButton.module.scss";

function BreakfastButton({ isActive = false, children = "Breakfast", className = "", ...props }) {
  const mergedClass = `${s.breakfast} ${isActive ? s.active : ""} ${className}`;

  return (
    <Button {...props} icon={null} className={mergedClass}>
      {children}
    </Button>
  );
}

export default BreakfastButton;
