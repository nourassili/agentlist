import { Separator } from "../ui/separator";

export const WelcomeLB = () => (
  <>
    <header className="fixed top-0 left-0 w-full z-50 bg-green-900 py-5 px-8 flex flex-col md:flex-row md:justify-between md:items-center shadow-lg border-b border-green-800">
      <span className="font-serif text-green-100 text-3xl md:text-4xl font-bold tracking-wider mb-2 md:mb-0">
        🌱 AgentList
      </span>
      <nav className="flex gap-8 text-green-100 text-xl md:text-2xl tracking-wider">
        <a href="#" className="hover:text-white transition-colors">
          Explore
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Newsletter
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Login
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Sign up
        </a>
      </nav>
    </header>
    {/* Add padding to the top of the page content so it isn't hidden behind the fixed header */}
    <div className="h-24" />
    <Separator />
  </>
);
