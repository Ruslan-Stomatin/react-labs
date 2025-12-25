import { useSelector } from "react-redux";
import { selectCartItems } from "@/store/cart/cartSlice";
import OrderItem from "@/components/Order/OrderItem/OrderItem";
import s from "@/components/Order/OrderList/OrderList.module.scss"

export default function OrderList() {
  const items = useSelector(selectCartItems);

  return (
    <div className={s.list}>
      {!items.length ? (
        <p className={s.empty}>Your cart is empty</p>
      ) : (
        items.map(item => <OrderItem key={item.id} item={item} />)
      )}
    </div>
  );
}
