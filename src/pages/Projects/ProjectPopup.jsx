import React from 'react';
import { motion } from 'framer-motion';

const ProjectPopup = ({ projects }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute z-50 top-0 left-full ml-4 bg-[#1e1e1e] p-4 rounded-xl shadow-xl w-72 space-y-2 border border-[#333]"
    >
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="bg-[#2a2a2a] rounded-md p-2 flex items-start gap-3 hover:bg-[#333] transition"
        >
          <img
            src={project.img}
            alt={project.title}
            className="w-12 h-12 rounded-md object-cover"
          />
          <div>
            <h4 className="text-white text-sm font-semibold">{project.title}</h4>
            <p className="text-xs text-gray-400">{project.desc}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default ProjectPopup;
