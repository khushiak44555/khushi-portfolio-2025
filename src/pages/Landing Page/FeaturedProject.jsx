// FeaturedProject.jsx
const FeaturedProject = () => (
  <div className="text-white space-y-6">
    <h3 className="text-2xl font-bold">🧠 Featured Project: Khaatabook</h3>
    <p>A digital ledger system for small businesses. Built with React, Node.js, MongoDB. Handled complex CRUD ops, user auth, and charts.</p>
    <ul className="list-disc list-inside text-gray-400">
      <li>Used JWT for secure login</li>
      <li>Integrated Chart.js for financial reports</li>
      <li>Deployed on Vercel with MongoDB Atlas</li>
    </ul>
    <a href="https://github.com/..." className="text-[#2FA4FF] hover:underline">View on GitHub</a>
  </div>
);
export default FeaturedProject;
