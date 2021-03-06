import iconStyles from '../icons.module.scss';
import menuStyles from './menu.module.scss';

export interface CloseMenuIcon {
  onClick: () => void;
  isOpen: boolean;
}

export const CloseMenuIcon = ({ onClick, isOpen }: CloseMenuIcon) => {
  return (
    <button
      type="button"
      className={`${iconStyles.iconButton} ${menuStyles.menuItem} ${isOpen ? menuStyles.show : menuStyles.hidden}`}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
        <path
          fill="#F9EFCD"
          d="M13.4 12l6.3-6.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L12 10.6 5.7 4.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l6.3 6.3-6.3 6.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l6.3-6.3 6.3 6.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12z"
        />
      </svg>
    </button>
  );
};
