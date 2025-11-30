import Button from '@/components/UI/Button/Button';
import s from './AddToCartButton.module.scss';

function AddToCartButton({ onAdd, qty, children = 'Add to cart', className = '' }) {
  return (
    <Button
      onClick={() => onAdd?.(qty)}
      icon={null}
      className={`${s.addToCart} ${className}`}
    >
      {children}
    </Button>
  );
}

export default AddToCartButton;