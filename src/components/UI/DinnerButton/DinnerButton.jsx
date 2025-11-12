import Button from "../Button/Button";
import s from "./DinnerButton.module.scss";

function DinnerButton({ children = "Dinner", ...props }) {
  return (
    <Button {...props} icon={null} className={s.dinner}>
      {children}
    </Button>
  );
}

export default DinnerButton;
