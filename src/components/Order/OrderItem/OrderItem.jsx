import { useDispatch } from "react-redux";
import { removeItem, setQty } from "@/store/cart/cartSlice";
import Input from "@/components/UI/Input/Input";
import s from "./OrderItem.module.scss"

export default function OrderItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className={s.cardOrder}>
        <div className={s.mainOrderInfo}>
      <img className={s.img} src={item.image} width={100} />
      <a>{item.title}</a>
      </div>

      <div className={s.orderOptions}>
      <span className={s.price} >${item.price}</span>

      <Input
        className={s.qty}
        value={item.qty}
        onChange={(e) =>
          dispatch(setQty({ id: item.id, qty: e.target.value }))
        }
      />

      {/* This is a temporary solution adopted during the current sprint deadline. Refactoring will be performed shortly.  */}
      <button className={s.removeItem} onClick={() => dispatch(removeItem(item.id))}>
        X
      </button>
      </div>
    </div>
  );
}
