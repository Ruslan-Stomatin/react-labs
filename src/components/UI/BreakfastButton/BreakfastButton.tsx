import type { ReactNode } from "react";
import Button from "../Button/Button";
import s from "./BreakfastButton.module.scss";

type BreakfastButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  "icon" | "className" | "children"
> & {
  isActive?: boolean;
  children?: ReactNode;
  className?: string;
};

export default function BreakfastButton({
  isActive = false,
  children = "Breakfast",
  className = "",
  ...props
}: BreakfastButtonProps) {
  const mergedClass = `${s.menuCategoryButton} ${
    isActive ? s.menuCategoryButtonActive : ""
  } ${className}`;

  return (
    <Button {...props} icon={null} className={mergedClass}>
      {children}
    </Button>
  );
}
