import { useEffect, useState } from "react";
import { getMeals } from "@/services/api";
import type { Meal } from "@/utils/mapMeal";

import MenuCatalog from "@/components/Menu/MenuCatalog/MenuCatalog";
import MenuOptions from "../MenuOptions/MenuOptions";
import SeeMoreButton from "../../UI/SeeMoreButton/SeeMoreButton";
import s from "./MenuBody.module.scss";

type MenuCategory = "Dessert" | "Dinner" | "Breakfast";

const INITIAL_LIMIT = 6;
const LOAD_MORE_STEP = 6;

export default function MenuBody() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("Dessert");
  const [visibleCount, setVisibleCount] = useState(INITIAL_LIMIT);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        setLoading(true);
        const list = await getMeals();
        if (!cancelled) setMeals(list);
      } catch (e) {
        console.error("API Error:", e);
        if (!cancelled) setErr("Не удалось загрузить меню");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  if (err) return <p style={{ color: "#b91c1c", textAlign: "center" }}>{err}</p>;
  if (loading && meals.length === 0) return <p style={{ textAlign: "center" }}>Загрузка…</p>;

  const filteredMeals = meals.filter((m) => m.category === activeCategory);
  const shownMeals = filteredMeals.slice(0, visibleCount);
  const hasMore = visibleCount < filteredMeals.length;

  const handleLoadMore = () => {
    setVisibleCount((v) => Math.min(v + LOAD_MORE_STEP, filteredMeals.length));
  };

  const handleChangeCategory = (c: MenuCategory) => {
    setActiveCategory(c);
    setVisibleCount(INITIAL_LIMIT);
  };

  return (
    <section className={s.menu}>
      <div className="container">
        <MenuOptions activeCategory={activeCategory} onChangeCategory={handleChangeCategory} />
        <MenuCatalog meals={shownMeals} />

        {hasMore && (
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <SeeMoreButton onClick={handleLoadMore} className="load-more-button" />
          </div>
        )}
      </div>
    </section>
  );
}
