import type { ReactNode } from "react";
import Button from "@/components/UI/Button/Button";
import s from "./AddToCartButton.module.scss";

type AddToCartButtonProps = {
  onAdd?: (qty: number) => void;
  qty: number;
  children?: ReactNode;
  className?: string;
};

export default function AddToCartButton({
  onAdd,
  qty,
  children = "Add to cart",
  className = "",
}: AddToCartButtonProps) {
  return (
    <Button
      onClick={() => onAdd?.(qty)}
      icon={null}
      className={`${s.addToCartButton} ${className}`}
    >
      {children}
    </Button>
  );
}

