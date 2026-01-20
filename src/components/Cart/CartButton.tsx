import { useSelector } from "react-redux";
import { selectCartCount } from "@/store/cart/cartSlice";
import { Link } from "react-router-dom";
import Button from "@/components/UI/Button/Button";
import CartIcon from "@/assets/icons/Cart.svg";
import s from "./CartButton.module.scss";

export default function CartButton() {
  const count = useSelector(selectCartCount);

  return (
    <div className={s.cartButton}>
      <Link to="/order">
        <Button className={s.cartButton__button}>
          <img
            src={CartIcon}
            alt=""
            className={s.cartButton__icon}
            aria-hidden
          />
        </Button>
      </Link>

      <span className={s.cartButton__badge} aria-live="polite">
        {count}
      </span>
    </div>
  );
}
