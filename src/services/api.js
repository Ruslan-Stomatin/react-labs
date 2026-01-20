import { http } from "./http";
import { mapMeal } from "../utils/mapMeal";

export async function getMeals() {
  const raw = await http.get("meals");

  const arr = Array.isArray(raw) ? raw : [];

  return arr.map(mapMeal);
}

export async function createOrder(payload) {
  const raw = await http.post("orders", { body: payload });

  return raw;
}
