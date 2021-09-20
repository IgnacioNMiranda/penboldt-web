import iconStyles from '../icons.module.scss';
import menuStyles from './menu.module.scss';

export interface MenuIconProps {
  onClick: () => void;
  isOpen: boolean;
}

export const MenuIcon = ({ onClick, isOpen }: MenuIconProps) => {
  return (
    <button
      type="button"
      className={`${iconStyles.iconButton} ${menuStyles.menuItem} ${isOpen ? menuStyles.hidden : menuStyles.show}`}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
        <path
          fill="#F9EFCD"
          d="M20 11H4c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1s-.4-1-1-1zM4 8h16c.6 0 1-.4 1-1s-.4-1-1-1H4c-.6 0-1 .4-1 1s.4 1 1 1zm16 8H4c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1s-.4-1-1-1z"
        />
      </svg>
    </button>
  );
};
