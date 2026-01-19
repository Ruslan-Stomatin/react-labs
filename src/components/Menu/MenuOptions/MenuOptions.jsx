import s from './MenuOptions.module.scss';
import Breakfast from '@/components/UI/BreakfastButton/BreakfastButton';
import Dinner from '@/components/UI/DinnerButton/DinnerButton';
import Dessert from '@/components/UI/DessertButton/DessertButton';

export default function MenuOptions({ activeCategory, onChangeCategory }) {
  return (
    <section className={s.options}>
      <h1 className={s.title}>Browse our menu</h1>
      <p className={s.text}>
        Use our menu to place an order online, or{" "}
        <span className={s.phone}>phone</span> <br />
        our store to place a pickup order. Fast and fresh food.
      </p>

      <div className={s.tabs}>
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
