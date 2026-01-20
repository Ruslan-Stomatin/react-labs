import Button from "@/components/UI/Button/Button";
import s from "./SeeMoreButton.module.scss";
import type { ReactNode } from "react";

type SeeMoreButtonProps = {
  onClick: () => void;
  children?: ReactNode;
  className?: string;
};

export default function SeeMoreButton({
  onClick,
  children = "See more",
  className = "",
}: SeeMoreButtonProps) {
  return (
    <Button onClick={onClick} icon={null} className={`${s.seeMore} ${className}`}>
      {children}
    </Button>
  );
}
