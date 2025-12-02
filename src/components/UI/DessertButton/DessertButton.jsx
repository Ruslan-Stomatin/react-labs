import Button from "../Button/Button";
import s from "./DessertButton.module.scss";

function DessertButton({ isActive = false, className = "", ...props }) {
  const mergedClass = `${s.dessert} ${isActive ? s.active : ""} ${className}`;

  return (
    <Button {...props} icon={null} className={mergedClass}>
      <p className={s.btnText}>Dessert</p>
    </Button>
  );
}

export default DessertButton;
