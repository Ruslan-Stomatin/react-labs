import type { Meal } from "@/utils/mapMeal";
import MenuCard from "@/components/Menu/MenuCard/MenuCard";
import s from "./MenuCatalog.module.scss";

type MenuCatalogProps = {
  meals?: Array<Meal | null | undefined>;
  onAdd?: (meal: Meal, qty: number) => void;
};

export default function MenuCatalog({ meals = [], onAdd }: MenuCatalogProps) {
  const safeMeals = (meals ?? []).filter(Boolean) as Meal[];

  return (
    <section className={s.menuCatalog}>
      <div className={s.menuCatalogGrid}>
        {safeMeals.map((meal) => (
          <MenuCard key={meal.id || crypto.randomUUID()} meal={meal} />
        ))}
      </div>
    </section>
  );
}
