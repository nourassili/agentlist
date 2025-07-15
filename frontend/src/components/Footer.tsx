const Footer = () => (
  <footer className="w-full bg-green-900 text-green-100 py-4 flex flex-col items-center mt-10">
    <span className="font-serif text-lg">© {new Date().getFullYear()} AgentList</span>
    <span className="text-sm mt-1">Made with 🌱 by Nour</span>
  </footer>
);

export default Footer;