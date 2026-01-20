import { useState } from "react";
import { useDispatch } from "react-redux";

import type { AppDispatch } from "@/store/store";
import type { Meal } from "@/utils/mapMeal";
import { addItem } from "@/store/cart/cartSlice";

import AddToCartButton from "@/components/UI/AddToCartButton/AddToCartButton";
import Input from "@/components/UI/Input/Input";
import s from "./MenuCard.module.scss";

type MenuCardProps = {
  meal: Meal | null | undefined;
};

export default function MenuCard({ meal }: MenuCardProps) {
  const [qty, setQty] = useState<number>(1);
  const dispatch = useDispatch<AppDispatch>();

  if (!meal) return null;

  const title = meal.title || "Untitled meal";
  const image = meal.image || "https://picsum.photos/seed/meal/160/120";
  const desc = meal.description || "Tasty meal from our menu.";
  const price = Number(meal.price ?? 0);

  const handleAdd = () => {
    dispatch(addItem({ item: meal, qty }));
  };

  return (
    <div className={s.card}>
      <img className={s.pic} src={image} alt={title} />
      <div className={s.body}>
        <div className={s.rowTop}>
          <h3 className={s.title}>{title}</h3>
          <div className={s.price}>
            ${price.toFixed(2)} <span>USD</span>
          </div>
        </div>

        <p className={s.desc}>{desc}</p>

        <div className={s.rowBottom}>
          <Input value={qty} onChange={setQty} min={1} />
          <AddToCartButton qty={qty} onAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
}
