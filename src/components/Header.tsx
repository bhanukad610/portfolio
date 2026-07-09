import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './styles/Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;