interface NavItem {
  label: string;
  ref: React.RefObject<HTMLElement | null>;
  logo?: string;
}

interface NavbarProps {
  items: NavItem[];
  onNavClick: (ref: React.RefObject<HTMLElement | null>) => void;
}

const Navbar = ({ items, onNavClick }: NavbarProps) => (
  <nav className="fixed top-0 w-full bg-white shadow-md z-50">
    <div className="container mx-auto px-2 sm:px-4 py-2 flex justify-center space-x-2 sm:space-x-8">
      {items.map((item) => (
        <button
          key={item.label}
          onClick={() => onNavClick(item.ref)}
          className="px-3 py-1.5 rounded-md transition-all duration-200
                    text-gray-700 hover:text-gray-900 
                    hover:bg-gray-100/80 active:bg-gray-200/60
                    text-sm sm:text-base font-medium"
        >
          {item.logo ? (
            <img
              src={item.logo}
              alt={item.label}
              className="h-6 w-auto sm:h-8 opacity-90 hover:opacity-100 transition-opacity"
            />
          ) : (
            <span className="tracking-wide">{item.label}</span>
          )}
        </button>
      ))}
    </div>
  </nav>
);

export default Navbar;
