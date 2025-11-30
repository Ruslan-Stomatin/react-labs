import BtnIcon from '@/assets/icons/btn.svg';
import s from './Button.module.scss';

function Button({ onClick, className, style, icon = BtnIcon, children }) {
  return (
    <button
      type="button"
      className={`${s.btn} ${className || ''}`}
      style={style}
      onClick={onClick}
    >
      {icon ? <img src={icon} alt="" aria-hidden className={s.icon} /> : null}
      {children}
    </button>
  );
}

export default Button;
