import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { selectCartItems } from "@/store/cart/cartSlice";

import OrderItem from "@/components/Order/OrderItem/OrderItem";
import s from "@/components/Order/OrderList/OrderList.module.scss";

export default function OrderList() {
  const items = useSelector((state: RootState) => selectCartItems(state));

  return (
    <div className={s.orderList}>
      {!items.length ? (
        <p className={s.orderListEmpty}>Your cart is empty</p>
      ) : (
        items.map((item) => <OrderItem key={item.id} item={item} />)
      )}
    </div>
  );
}
