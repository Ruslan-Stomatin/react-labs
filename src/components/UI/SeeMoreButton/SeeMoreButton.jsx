import Button from '@/components/UI/Button/Button';
import s from './SeeMoreButton.module.scss';

function SeeMoreButton({ onClick, children = 'See more', className = '' }) {
  return (
    <Button
      onClick={onClick}
      icon={null}
      className={`${s.seeMore} ${className}`}
    >
      {children}
    </Button>
  );
}

export default SeeMoreButton;