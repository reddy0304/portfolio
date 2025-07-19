import React, { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const Particles = () => {
  const COLORS = ['#2DD4BF', '#A78BFA', '#60A5FA', '#F472B6'];
  const PARTICLE_COUNT = 30;

  const getRandom = (min, max) => Math.random() * (max - min) + min;

  const Particle = useCallback(({ color }) => {
    const size = getRandom(5, 15);
    const duration = getRandom(15, 30);
    const delay = getRandom(0, 10);
    const x = getRandom(0, 100);
    const y = getRandom(-20, 120);

    return (
      <motion.div
        className="absolute rounded-full opacity-70"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          left: `${x}%`,
          top: `${y}%`,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.7, 0],
          y: [0, getRandom(-100, 100)],
          x: [0, getRandom(-50, 50)],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
        <Particle key={i} color={COLORS[i % COLORS.length]} />
      ))}
    </div>
  );
};

export default Particles;