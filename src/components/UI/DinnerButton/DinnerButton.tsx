import type { ReactNode } from "react";
import Button from "../Button/Button";
import s from "./DinnerButton.module.scss";

type DinnerButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  "icon" | "className" | "children"
> & {
  isActive?: boolean;
  children?: ReactNode;
  className?: string;
};

export default function DinnerButton({
  isActive = false,
  children = "Dinner",
  className = "",
  ...props
}: DinnerButtonProps) {
  const mergedClass = `${s.menuCategoryButton} ${
    isActive ? s.menuCategoryButtonActive : ""
  } ${className}`;

  return (
    <Button {...props} icon={null} className={mergedClass}>
      {children}
    </Button>
  );
}
