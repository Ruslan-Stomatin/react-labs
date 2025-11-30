export function mapMeal(raw) {
  const price = Number(raw?.price ?? 0);
  const text = String(raw?.instructions ?? "")
    .replace(/\s+/g, " ")
    .trim();
  return {
    id: String(raw?.id ?? ""),
    title: String(raw?.meal ?? "Untitled"),
    price: Number.isFinite(price) ? price : 0,
    image: raw?.img || "https://picsum.photos/seed/meal/160/120",
    description: text.length > 160 ? `${text.slice(0, 160)}…` : text,
    category: raw?.category || null,
  };
}
