import { http } from "./http";
import { mapMeal, type Meal } from "../utils/mapMeal";

export async function getMeals(): Promise<Meal[]> {
  const raw = await http.get<unknown[]>("meals");
  return raw.map(mapMeal);
}
