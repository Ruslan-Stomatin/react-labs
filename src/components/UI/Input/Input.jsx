import createNumberChangeHandler from '@/utils/numberChange';
import s from './Input.module.scss';

function Input({ value, onChange, min = 1 }) {
  const handleChange = createNumberChangeHandler(min, onChange);

  return (
    <input
      className={s.input}
      type="number"
      min={min}
      value={value}
      onChange={handleChange}
    />
  );
}

export default Input;