import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store/store";
import { removeItem, setQty } from "@/store/cart/cartSlice";
import type { CartItem } from "@/store/cart/cartSlice";

import Input from "@/components/UI/Input/Input";
import s from "./OrderItem.module.scss";

type OrderItemProps = {
  item: CartItem;
};

export default function OrderItem({ item }: OrderItemProps) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={s.orderItem}>
      <div className={s.orderItemInfo}>
        <img
          className={s.orderItemImage}
          src={item.image}
          width={100}
          alt={item.title}
        />
        <a>{item.title}</a>
      </div>

      <div className={s.orderItemActions}>
        <span className={s.orderItemPrice}>${item.price}</span>

        <Input
          className={s.qty}
          value={item.qty}
          onChange={(value) =>
            dispatch(setQty({ id: item.id, qty: value }))
          }
        />

        {/* @TODO: Temporary solution */}
        <button
          className={s.orderItemRemove}
          onClick={() => dispatch(removeItem(item.id))}
        >
          X
        </button>
      </div>
    </div>
  );
}
