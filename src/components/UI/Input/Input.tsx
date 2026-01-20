import createNumberChangeHandler from "@/utils/numberChange";
import s from "./Input.module.scss";

type InputProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  className?: string;
};

export default function Input({
  value,
  onChange,
  min = 1,
  className = "",
}: InputProps) {
  const handleChange = createNumberChangeHandler(min, onChange);

  return (
    <input
      className={`${s.input} ${className}`}
      type="number"
      min={min}
      value={value}
      onChange={handleChange}
    />
  );
}
