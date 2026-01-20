import s from "./MenuOptions.module.scss";
import Breakfast from "@/components/UI/BreakfastButton/BreakfastButton";
import Dinner from "@/components/UI/DinnerButton/DinnerButton";
import Dessert from "@/components/UI/DessertButton/DessertButton";

type MenuCategory = "Dessert" | "Dinner" | "Breakfast";

type MenuOptionsProps = {
  activeCategory: MenuCategory;
  onChangeCategory: (category: MenuCategory) => void;
};

export default function MenuOptions({
  activeCategory,
  onChangeCategory,
}: MenuOptionsProps) {
  return (
    <section className={s.menuOptions}>
      <h1 className={s.menuOptionsTitle}>Browse our menu</h1>
      <p className={s.menuOptionsText}>
        Use our menu to place an order online, or{" "}
        <span className={s.menuOptionsPhone}>phone</span> <br />
        our store to place a pickup order. Fast and fresh food.
      </p>

      <div className={s.menuOptionsTabs}>
        <Dessert
          isActive={activeCategory === "Dessert"}
          onClick={() => onChangeCategory("Dessert")}
        />

        <Dinner
          isActive={activeCategory === "Dinner"}
          onClick={() => onChangeCategory("Dinner")}
        />

        <Breakfast
          isActive={activeCategory === "Breakfast"}
          onClick={() => onChangeCategory("Breakfast")}
        />
      </div>
    </section>
  );
}
