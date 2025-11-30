import { useCartCount } from "@/store/CartContext.jsx";
import Button from "@/components/UI/Button/Button";
import CartIcon from "@/assets/icons/Cart.svg";
import s from "./CartButton.module.scss";

export default function CartButton() {
  const { count } = useCartCount();

  return (
    <div className={s.cartWrap}>
      <Button className={s.big}>
        <img src={CartIcon} alt="" className={s.cart} aria-hidden />
      </Button>
      <span className={s.badge} aria-live="polite">{count}</span>
    </div>
  );
}
