
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Minecraft Hosting", path: "/minecraft" },
    { name: "VPS Hosting", path: "/vps" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-400">SPXCloud</Link>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`hover:text-green-400 transition-colors ${
                location.pathname === item.path ? 'text-green-400' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Button className="bg-green-600 hover:bg-green-700">Join Discord</Button>
      </div>
    </nav>
  );
};

export default Navigation;
