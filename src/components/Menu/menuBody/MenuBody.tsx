import { useEffect, useState } from "react";
import { getMeals } from "@/services/api";
import type { Meal } from "@/utils/mapMeal";

import MenuCatalog from "@/components/Menu/MenuCatalog/MenuCatalog";
import MenuOptions from "../MenuOptions/MenuOptions";
import SeeMoreButton from "../../UI/SeeMoreButton/SeeMoreButton";
import MenuCard from "../MenuCard/MenuCard";
import s from "./MenuBody.module.scss";

const INITIAL_LIMIT = 6;
const LOAD_MORE_STEP = 6;

export default function MenuBody() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("Dessert");
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_LIMIT);
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setErr] = useState<string>("");

  useEffect(() => {
    setLoading(true);

    (async () => {
      try {
        const list = await getMeals();
        setMeals(list);
      } catch (e: unknown) {
        console.error("API Error:", e);
        setErr("Не удалось загрузить меню");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (err) {
    return <p style={{ color: "#b91c1c", textAlign: "center" }}>{err}</p>;
  }

  if (loading && meals.length === 0) {
    return <p style={{ textAlign: "center" }}>Загрузка…</p>;
  }

  const filteredMeals = meals.filter(
    (meal) => meal.category === activeCategory
  );
  const shownMeals = filteredMeals.slice(0, visibleCount);
  const hasMore = visibleCount < filteredMeals.length;

  const handleLoadMore = () => {
    setVisibleCount((v) =>
      Math.min(v + LOAD_MORE_STEP, filteredMeals.length)
    );
  };

  return (
    <section className={s.menu}>
      <div className="container">
        <MenuOptions
          activeCategory={activeCategory}
          onChangeCategory={(c: string) => {
            setActiveCategory(c);
            setVisibleCount(INITIAL_LIMIT);
          }}
        />

        <MenuCatalog
          meals={shownMeals}
          onAdd={(meal: Meal, qty: number) =>
            console.log("ADD:", meal.title, qty)
          }
        />

        {hasMore && (
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <SeeMoreButton
              onClick={handleLoadMore}
              className="load-more-button"
            />
          </div>

          
        )}
      </div>
    </section>
  );
}
