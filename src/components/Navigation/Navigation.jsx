import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink
          className={({ isActive }) => clsx(css.link, isActive && css.active)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => clsx(css.link, isActive && css.active)}
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;