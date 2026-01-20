import type { ReactNode } from "react";
import Button from "../Button/Button";
import s from "./DessertButton.module.scss";

type DessertButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  "icon" | "className" | "children"
> & {
  isActive?: boolean;
  children?: ReactNode;
  className?: string;
};

export default function DessertButton({
  isActive = false,
  children = "Dessert",
  className = "",
  ...props
}: DessertButtonProps) {
  const mergedClass = `${s.menuCategoryButton} ${
    isActive ? s.menuCategoryButtonActive : ""
  } ${className}`;

  return (
    <Button {...props} icon={null} className={mergedClass}>
      <p className={s.menuCategoryButtonText}>{children}</p>
    </Button>
  );
}
