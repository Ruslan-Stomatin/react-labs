import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export type CartItem = {
  id: string | number;
  title: string;
  price: number;
  image: string;
  qty: number;
};

type CartState = {
  items: CartItem[];
};

type AddItemPayload = {
  item?: Partial<CartItem> & { id?: CartItem["id"] };
  qty?: number | string;
};

type SetQtyPayload = {
  id?: CartItem["id"];
  qty?: number | string;
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<AddItemPayload | undefined>) {
      const { item, qty = 1 } = action.payload || {};
      if (!item?.id) return;

      const n = Number(qty);
      const safeQty = Number.isFinite(n) ? Math.max(1, n) : 1;

      const existing = state.items.find((x) => x.id === item.id);
      if (existing) {
        existing.qty += safeQty;
      } else {
        state.items.push({
          id: item.id,
          title: item.title ?? "Untitled meal",
          price: Number(item.price ?? 0),
          image: item.image ?? "",
          qty: safeQty,
        });
      }
    },

    removeItem(state, action: PayloadAction<CartItem["id"]>) {
      const id = action.payload;
      state.items = state.items.filter((x) => x.id !== id);
    },

    setQty(state, action: PayloadAction<SetQtyPayload | undefined>) {
      const { id, qty } = action.payload || {};
      if (id === undefined) return;

      const n = Number(qty);
      const safeQty = Number.isFinite(n) ? Math.max(1, n) : 1;

      const item = state.items.find((x) => x.id === id);
      if (item) item.qty = safeQty;
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, setQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;


export const selectCartItems = (state: RootState) =>
  state.cart.items;
export const selectCartCount = (state: RootState) =>
  state.cart.items.reduce((sum, x) => sum + x.qty, 0);
export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce(
    (sum, x) => sum + x.qty * (Number(x.price) || 0),
    0
  );
