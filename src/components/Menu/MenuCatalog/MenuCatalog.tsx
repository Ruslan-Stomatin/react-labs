import type { Meal } from "@/utils/mapMeal";
import MenuCard from "@/components/Menu/MenuCard/MenuCard";
import s from "./MenuCatalog.module.scss";

type MenuCatalogProps = {
  meals?: Array<Meal | null | undefined>;
};

export default function MenuCatalog({ meals = [] }: MenuCatalogProps) {
  const safeMeals = meals.filter((m): m is Meal => Boolean(m));

  return (
    <section className={s.menuCatalog}>
      <div className={s.menuCatalogGrid}>
        {safeMeals.map((meal) => (
          <MenuCard key={meal.id} meal={meal} />
        ))}
      </div>
    </section>
  );
}
