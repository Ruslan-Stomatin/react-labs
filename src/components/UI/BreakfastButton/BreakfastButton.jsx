import Button from "../Button/Button";
import s from "./BreakfastButton.module.scss";

function BreakfastButton({ children = "Breakfast", ...props }) {
  return (
    <Button {...props} icon={null} className={s.breakfast}>
      {children}
    </Button>
  );
}

export default BreakfastButton;
