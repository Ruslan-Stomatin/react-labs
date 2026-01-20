import MenuCard from '@/components/Menu/MenuCard/MenuCard';
import s from './MenuCatalog.module.scss';


export default function MenuCatalog({ meals = [], onAdd }) {
  const safeMeals = (meals ?? []).filter(Boolean);

  return (
    <section className={s.catalog}>
      <div className={s.grid}>
        {safeMeals.map(meal => (
          <MenuCard key={meal.id ?? crypto.randomUUID()} meal={meal} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}
