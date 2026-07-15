import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const ROLES = ['Software Engineer', 'Full-Stack Developer', 'Problem Solver'];
const ROLE_INTERVAL_MS = 2500;

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((current) => (current + 1) % ROLES.length);
    }, ROLE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center gap-6 px-4 py-16 text-center">
      <img
        src={`${import.meta.env.BASE_URL}images/home-image.jpg`}
        alt="Bhanuka Dissanayake"
        className="h-40 w-40 rounded-full object-cover shadow-lg sm:h-48 sm:w-48"
      />

      <h1 className="text-3xl font-bold text-heading sm:text-4xl md:text-5xl">
        Bhanuka Dissanayake
      </h1>

      <div className="h-8 sm:h-10">
        <AnimatePresence mode="wait">
          <motion.p
            key={ROLES[roleIndex]}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="text-xl font-medium text-accent sm:text-2xl"
          >
            {ROLES[roleIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          to="/about"
          className="rounded-lg bg-accent px-6 py-3 text-lg font-medium text-white shadow transition-colors hover:bg-accent-hover"
        >
          About Me
        </Link>
        <Link
          to="/projects"
          className="rounded-lg border border-accent px-6 py-3 text-lg font-medium text-accent shadow transition-colors hover:bg-accent hover:text-white"
        >
          View Projects
        </Link>
      </div>
    </section>
  );
};

export default Home;
