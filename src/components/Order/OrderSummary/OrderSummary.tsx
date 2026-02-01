import { useSelector } from "react-redux";
import { selectCartTotal } from "@/store/cart/cartSlice";
import s from "@/components/Order/OrderSummary/OrderSummary.module.scss";

export default function OrderSummary() {
  const total = useSelector(selectCartTotal);

  return (
    <h3 className={s.orderSummaryTotal}>
      Total: ${total.toFixed(2)}
    </h3>
  );
}
