interface NavItem {
  label: string;
  ref: React.RefObject<HTMLElement | null>;
  logo?: string; // Optional logo image URL
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
          className="px-2 sm:px-4 py-1 sm:py-2 text-gray-800 hover:text-accent-foreground transition-colors text-xs sm:text-base"
        >
          {item.logo ? (
            <img
              src={item.logo}
              alt={item.label}
              className="h-8 w-auto sm:h-10"
            />
          ) : (
            item.label
          )}
        </button>
      ))}
    </div>
  </nav>
);

export default Navbar;
