import Button from "../Button/Button";
import s from "./DessertButton.module.scss";

function DessertButton({...props }) {
  return (
    <Button {...props} className={s.dessert}>
      <p className={s.btnText}>Dessert</p>
    </Button>
  );
}

export default DessertButton;
