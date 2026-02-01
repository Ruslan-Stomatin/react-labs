import { useState } from "react";
import { useDispatch } from "react-redux";

import type { AppDispatch } from "@/store/store";
import type { Meal } from "@/utils/mapMeal";
import { addItem } from "@/store/cart/cartSlice";

import AddToCartButton from "@/components/UI/AddToCartButton/AddToCartButton";
import Input from "@/components/UI/Input/Input";
import s from "./MenuCard.module.scss";

type MenuCardProps = {
  meal: Meal;
};

export default function MenuCard({ meal }: MenuCardProps) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch<AppDispatch>();

  const title = meal.title ?? "Untitled meal";
  const image = meal.image ?? "https://picsum.photos/seed/meal/160/120";
  const desc = meal.description ?? "Tasty meal from our menu.";
  const price = Number(meal.price ?? 0);

  const handleAdd = () => dispatch(addItem({ item: meal, qty }));

  return (
    <div className={s.menuCard}>
      <img className={s.menuCardImage} src={image} alt={title} />

      <div className={s.menuCardBody}>
        <div className={s.menuCardHeader}>
          <h3 className={s.menuCardTitle}>{title}</h3>
          <div className={s.menuCardPrice}>
            ${price.toFixed(2)} <span>USD</span>
          </div>
        </div>

        <p className={s.menuCardDesc}>{desc}</p>

        <div className={s.menuCardActions}>
          <Input value={qty} onChange={setQty} min={1} />
          <AddToCartButton qty={qty} onAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
}
