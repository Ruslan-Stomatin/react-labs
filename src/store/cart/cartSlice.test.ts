import { describe, it, expect } from "vitest";

import reducer, {
  addItem,
  removeItem,
  setQty,
  clearCart,
  selectCartCount,
  selectCartItems,
  selectCartTotal,
  type CartItem,
} from "./cartSlice";


const item = (overrides: Partial<CartItem> = {}): CartItem => ({
  id: "1",
  title: "Pizza",
  price: 10,
  image: "img",
  qty: 1,
  ...overrides,
});

const makeState = (items: CartItem[]) =>
  ({ cart: { items } } as any);



describe("cartSlice reducers", () => {
  it("should return initial state", () => {
    const state = reducer(undefined, { type: "unknown" });
    expect(state.items).toEqual([]);
  });

  describe("addItem", () => {
    it("should add new item with safe qty", () => {
      const state = reducer(
        { items: [] },
        addItem({ item: item({ qty: 999 }), qty: 2 })
      );

      expect(state.items).toHaveLength(1);
      expect(state.items[0]).toMatchObject({
        id: "1",
        title: "Pizza",
        price: 10,
        image: "img",
        qty: 2,
      });
    });

    it("should increase qty if item already exists", () => {
      const state = reducer(
        { items: [item({ qty: 2 })] },
        addItem({ item: { id: "1" }, qty: 3 })
      );

      expect(state.items).toHaveLength(1);
      expect(state.items[0].qty).toBe(5);
    });

    it("should ignore if payload missing id", () => {
      const state = reducer(
        { items: [] },
        addItem({ item: { title: "X" } } as any)
      );
      expect(state.items).toEqual([]);
    });
  });

  describe("setQty", () => {
    it("should set qty with min=1 and number coercion", () => {
      const state1 = reducer(
        { items: [item({ qty: 5 })] },
        setQty({ id: "1", qty: "2" })
      );
      expect(state1.items[0].qty).toBe(2);

      const state2 = reducer(
        { items: [item({ qty: 5 })] },
        setQty({ id: "1", qty: 0 })
      );
      expect(state2.items[0].qty).toBe(1);
    });
  });

  describe("removeItem", () => {
    it("should remove item by id", () => {
      const state = reducer(
        { items: [item()] },
        removeItem("1")
      );
      expect(state.items).toEqual([]);
    });
  });

  describe("clearCart", () => {
    it("should clear all items", () => {
      const state = reducer(
        { items: [item()] },
        clearCart()
      );
      expect(state.items).toEqual([]);
    });
  });
});


describe("cartSlice selectors", () => {
  describe("selectCartItems", () => {
    it("should return items", () => {
      const items = [item({ qty: 2 })];
      expect(selectCartItems(makeState(items))).toEqual(items);
    });
  });

  describe("selectCartCount", () => {
    it("should sum qty", () => {
      const items = [item({ qty: 2 }), item({ id: "2", title: "B", qty: 3 })];
      expect(selectCartCount(makeState(items))).toBe(5);
    });
  });

  describe("selectCartTotal", () => {
    it("should sum qty * price", () => {
      const items = [
        item({ price: 10, qty: 2 }), 
        item({ id: "2", title: "B", price: 3, qty: 4 }), 
      ];
      expect(selectCartTotal(makeState(items))).toBe(32);
    });
  });
});
