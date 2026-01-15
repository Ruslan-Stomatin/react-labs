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
    <div className={s.cardOrder}>
      <div className={s.mainOrderInfo}>
        <img className={s.img} src={item.image} width={100} alt={item.title} />
        <a>{item.title}</a>
      </div>

      <div className={s.orderOptions}>
        <span className={s.price}>${item.price}</span>

        <Input
          className={s.qty}
          value={item.qty}
          onChange={(value) =>
            dispatch(setQty({ id: item.id, qty: value }))
          }
        />

        {/* Temporary solution */}
        <button
          className={s.removeItem}
          onClick={() => dispatch(removeItem(item.id))}
        >
          X
        </button>
      </div>
    </div>
  );
}
