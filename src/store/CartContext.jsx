import { createContext, useContext, useMemo, useState } from "react";

const CartCountContext = createContext(null);

export function CartCountProvider({ children }) {
  const [count, setCount] = useState(0);

  const value = useMemo(() => ({
    count,
    add: (n = 1) => setCount(c => c + Math.max(0, Number(n) || 0)),
    reset: () => setCount(0),
  }), [count]);

  return (
    <CartCountContext.Provider value={value}>
      {children}
    </CartCountContext.Provider>
  );
}

export function useCartCount() {
  const ctx = useContext(CartCountContext);
  if (!ctx) throw new Error("useCartCount should be inside CartCountProvider");
  return ctx;
}
