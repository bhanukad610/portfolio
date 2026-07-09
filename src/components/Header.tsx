import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './styles/Header.css';

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'active' : undefined;

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/" end className={navLinkClassName}>Home</NavLink></li>
          <li><NavLink to="/about" className={navLinkClassName}>About</NavLink></li>
          <li><NavLink to="/resume" className={navLinkClassName}>Resume</NavLink></li>
          <li><NavLink to="/projects" className={navLinkClassName}>Projects</NavLink></li>
          <li><NavLink to="/blog" className={navLinkClassName}>Blog</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClassName}>Contact</NavLink></li>
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;