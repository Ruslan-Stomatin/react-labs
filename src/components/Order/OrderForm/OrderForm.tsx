import s from "@/components/Order/OrderForm/OrderForm.module.scss";

export default function OrderForm() {
  return (
    <form className={s.orderForm}>
      {/* This is a temporary solution adopted during the current sprint deadline. Refactoring will be performed shortly.  */}
      <label className={s.label} htmlFor="street">Street</label>
      <input className={s.input} id="street" placeholder="" />

      <label className={s.label} htmlFor="house">House</label>
      <input className={s.input} id="house" placeholder="" />

      <button className={s.button} type="submit">Order</button>
    </form>
  );
}
