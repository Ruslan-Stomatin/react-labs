type RawMeal = {
  id?: string | number;
  meal?: string;
  price?: number | string;
  img?: string;
  instructions?: string;
  category?: string | null;
};

export type Meal = {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string | null;
};

export function mapMeal(raw: RawMeal): Meal {
  const priceNum = Number(raw.price ?? 0);

  const text = String(raw.instructions ?? "")
    .replace(/\s+/g, " ")
    .trim();

  return {
    id: String(raw.id ?? ""),
    title: String(raw.meal ?? "Untitled"),
    price: Number.isFinite(priceNum) ? priceNum : 0,
    image: raw.img ?? "https://picsum.photos/seed/meal/160/120",
    description: text.length > 160 ? `${text.slice(0, 160)}…` : text,
    category: raw.category ?? null,
  };
}
