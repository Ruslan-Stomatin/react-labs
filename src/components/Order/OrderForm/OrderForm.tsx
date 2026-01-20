import s from "@/components/Order/OrderForm/OrderForm.module.scss";

export default function OrderForm() {
  return (
    <form className={s.orderForm}>
      {/* @TODO: This is a temporary solution adopted during the current sprint deadline. Refactoring will be performed shortly. */}
      <label className={s.orderFormLabel} htmlFor="street">
        Street
      </label>
      <input className={s.orderFormInput} id="street" placeholder="" />

      <label className={s.orderFormLabel} htmlFor="house">
        House
      </label>
      <input className={s.orderFormInput} id="house" placeholder="" />

      <button className={s.orderFormSubmit} type="submit">
        Order
      </button>
    </form>
  );
}
