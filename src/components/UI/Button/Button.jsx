import BtnIcon from '@/assets/icons/btn.svg';
import s from './Button.module.scss';

export default function Button({ onClick, className, style, icon = BtnIcon, children }) {
  return (
    <button
      type="button"
      className={`${s.btn} ${className || ''}`}
      style={style}
      onClick={onClick}
    >
      <img src={icon} alt="icon" className={s.icon} />
      {children}
    </button>
  );
}
