import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { selectCartTotal } from "@/store/cart/cartSlice";
import s from "@/components/Order/OrderSummary/OrderSummary.module.scss";

export default function OrderSummary() {
  const total = useSelector((state: RootState) => selectCartTotal(state));

  return <h3 className={s.totalSum}>Total: ${total.toFixed(2)}</h3>;
}
