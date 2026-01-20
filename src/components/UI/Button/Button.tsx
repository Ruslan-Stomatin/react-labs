import type { CSSProperties, MouseEventHandler, ReactNode } from "react";
import BtnIcon from "@/assets/icons/btn.svg";
import s from "./Button.module.scss";

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: CSSProperties;
  icon?: string | null;
  children: ReactNode;
};

export default function Button({
  onClick,
  className,
  style,
  icon = BtnIcon,
  children,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`${s.btn} ${className || ""}`}
      style={style}
      onClick={onClick}
    >
      {icon ? <img src={icon} alt="" aria-hidden className={s.icon} /> : null}
      {children}
    </button>
  );
}
