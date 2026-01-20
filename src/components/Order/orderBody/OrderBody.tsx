import OrderList from "@/components/Order/OrderList/OrderList";
import OrderSummary from "@/components/Order/OrderSummary/OrderSummary";
import OrderForm from "@/components/Order/OrderForm/OrderForm";
import s from "./OrderBody.module.scss";

function OrderBody() {
  return (
    <section className={s.order}>
      <div className="container">
        <h1 className={s.orderTitle}>Finish your order</h1>

        <OrderList />
        <OrderSummary />
        <OrderForm />
      </div>
    </section>
  );
}

export default OrderBody;
