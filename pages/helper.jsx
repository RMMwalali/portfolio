import { useState, useEffect } from 'react';
import { m, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import Badges from '../../utils/badge.list.util';
import Icon from '../../utils/icon.util';

import css from '../../../styles/sections/projects/featured.module.scss';
import content from '../../../content/projects/featured.json';

// Get unique categories from your projects data
const categories = [...new Set(content.map(project => project.category))];

export default function FeaturedProjects() {
  const [currentTab, setCurrentTab] = useState(categories[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % content.length);
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {categories.map((category, i) => (
        <button key={i} onClick={() => setCurrentTab(category)}>
          {category}
        </button>
      ))}

      <AnimatePresence>
        {content.filter(project => project.category === currentTab).map((project, i) => 
          i === index && <FeaturedProject key={i} content={project} />
        )}
      </AnimatePresence>
    </div>
  );
}

function FeaturedProject({ content }) {
  const { project, url, repo, descriptionTitle, description, stack, imageOptions, images } = content;

  const controls = useAnimation();
  const { ref, inView } = useInView({
    "threshold": 0.25,
    "triggerOnce": false
  });

  useEffect(() => {
    if (inView) { controls.start("visible") }
    if (!inView) { controls.start("hidden") }
  }, [controls, inView]);

  return (
    <m.section
      className={css.project}
      framer-motion
      ref={ref}
      variants={container}
      initial={["rest", "hidden"]}
      whileHover="hover"
      animate={controls}
    >
      {/* Your project details */}
    </m.section>
  );
}
