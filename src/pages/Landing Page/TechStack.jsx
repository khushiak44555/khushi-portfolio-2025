// TechStack.jsx
const TechStack = () => {
  const tools = ['React', 'Tailwind', 'Node.js', 'MongoDB', 'Framer Motion', 'Agile', 'Git', 'Figma'];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-white">
      {tools.map((tool, i) => (
        <div key={i} className="bg-[#1a1a1a] p-4 rounded-xl shadow-md hover:bg-[#2a2a2a] transition">
          <span className="text-lg font-semibold">{tool}</span>
        </div>
      ))}
    </div>
  );
};
export default TechStack;
