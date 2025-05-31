
import { Users, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-green-400 mb-4">SPXCloud</div>
            <p className="text-gray-400">Premium game & VPS hosting with unmatched performance and support.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/minecraft" className="hover:text-green-400">Minecraft Hosting</Link></li>
              <li><Link to="/vps" className="hover:text-green-400">VPS Hosting</Link></li>
              <li><a href="#" className="hover:text-green-400">Server Status</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
              <li><a href="https://discord.gg/bSKas2SFAc" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">Discord</a></li>
              <li><a href="#" className="hover:text-green-400">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-400">Terms & Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 SPXCloud. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://discord.gg/bSKas2SFAc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400">
              <Users className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
