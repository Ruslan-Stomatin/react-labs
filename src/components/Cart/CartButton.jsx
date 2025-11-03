import Button from '../UI/Button/Button';
import CartIcon from '@/assets/icons/Cart.svg';
import s from '@/components/Cart/CartButton.module.scss';

function CartButton() {
    return (
        <div className={s.cartWrap}>
        <Button className={s.big} >
        <img src={CartIcon} alt="" className={s.cart} aria-hidden />
        </Button>
        </div>
    )
}

export default CartButton;