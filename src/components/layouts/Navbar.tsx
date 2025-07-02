import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import logo from '../../images/logo.png';

// --- Types ---
type NavItem = {
  name: string;
  link: string;
  category?: string;
  description?: string;
};

type CategoryFilter = {
  name: string;
  filter: string;
};

type DropdownData = {
  title: string;
  categories: { title: string; filters: CategoryFilter[] }[];
  featured: NavItem[];
};

type MainNavItem =
  | { name: string; link: string; type: 'link' }
  | { name: string; type: 'dropdown'; items: NavItem[]; filters: CategoryFilter[] };

// --- Navigation Data ---
const navigationData: Record<'solutions' | 'products', DropdownData> = {
  solutions: {
    title: 'Solutions',
    categories: [
      {
        title: 'Categories',
        filters: [
          { name: 'Management Tools', filter: 'management' },
          { name: 'HR Tools', filter: 'hr' },
          { name: 'Custom ERP', filter: 'erp' }
        ]
      }
    ],
    featured: [
      {
        name: 'School ERP',
        link: '/solutions/school-erp',
        category: 'management',
        description: 'Complete school management with AI-powered tools.'
      },
      {
        name: 'Employee Suite',
        link: '/solutions/employee-suite',
        category: 'hr',
        description: 'Manage hiring, tasks and payrolls efficiently.'
      },
      {
        name: 'Recruitment AI',
        link: '/solutions/recruitment-ai',
        category: 'hr',
        description: 'Smart candidate analysis and resume filtering.'
      },
      {
        name: 'Custom ERP Solution',
        link: '/solutions/custom-erp',
        category: 'erp',
        description: 'Tailored ERP solutions for your business.'
      }
    ]
  },
  products: {
    title: 'Products',
    categories: [
      {
        title: 'Categories',
        filters: [
          { name: 'Developer Tools', filter: 'developer' },
          { name: 'Frontend Libraries', filter: 'frontend' },
          { name: 'Backend Services', filter: 'backend' },
          { name: 'Form Builders', filter: 'forms' }
        ]
      }
    ],
    featured: [
      {
        name: 'Port Killer',
        link: '/port-killer',
        category: 'developer',
        description: 'One-click tool to free Windows ports instantly.'
      },
      {
        name: 'OORB Forms',
        link: '/oorb-forms',
        category: 'forms',
        description: 'Beautiful form builder with advanced analytics.'
      },
      {
        name: 'Animation Library',
        link: '/products/animation-library',
        category: 'frontend',
        description: 'Scroll-based animation components for React.'
      },
      {
        name: 'Data Fetcher',
        link: '/products/data-fetcher',
        category: 'frontend',
        description: 'API and DB query testing tool for frontend devs.'
      },
      {
        name: 'API Gateway',
        link: '/products/api-gateway',
        category: 'backend',
        description: 'Manage and secure your backend services.'
      }
    ]
  }
};

const mainNavigationData: MainNavItem[] = [
  { name: 'Home', link: '/', type: 'link' },
  { name: 'About', link: '/about', type: 'link' },
  { name: 'Contact', link: '/contact', type: 'link' },
  { name: 'Careers', link: '/careers', type: 'link' },
  {
    name: 'Solutions',
    type: 'dropdown',
    items: navigationData.solutions.featured,
    filters: navigationData.solutions.categories[0].filters
  },
  {
    name: 'Products',
    type: 'dropdown',
    items: navigationData.products.featured,
    filters: navigationData.products.categories[0].filters
  }
];

// --- Component ---
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});
  const [activeFilters, setActiveFilters] = useState<Record<string, string | null>>({
    solutions: null,
    products: null
  });

  const solutionsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const productsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleMobile = () => setIsOpen(!isOpen);

  const toggleMobileDropdown = (itemName: string) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  const handleFilterClick = (dropdownType: 'solutions' | 'products', filter: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [dropdownType]: prev[dropdownType] === filter ? null : filter
    }));
  };

  const getFilteredItems = (dropdownType: 'solutions' | 'products') => {
    const activeFilter = activeFilters[dropdownType];
    if (!activeFilter) return navigationData[dropdownType].featured;
    return navigationData[dropdownType].featured.filter(item => item.category === activeFilter);
  };

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isOpen);
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
      if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setMobileDropdowns({});
    }
  }, [isOpen]);

  const renderDesktopDropdown = (
    dropdownType: 'solutions' | 'products',
    isVisible: boolean,
    timeoutRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>,
    setVisible: (val: boolean) => void
  ) => {
    if (!isVisible) return null;

    const dropdownData = navigationData[dropdownType];
    const filteredItems = getFilteredItems(dropdownType);

    return (
      <div
        className="fixed mt-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-5xl w-full bg-white shadow-2xl rounded-md border z-50 flex"
        onMouseEnter={() => clearTimeout(timeoutRef.current!)}
        onMouseLeave={() => {
          timeoutRef.current = setTimeout(() => setVisible(false), 200);
        }}
      >
        <div className="w-1/4 border-r p-6">
          <h4 className="text-sm font-semibold text-gray-800 mb-4">
            {dropdownData.categories[0].title}
          </h4>
          <ul className="space-y-3 text-sm">
            {dropdownData.categories[0].filters.map((filter, index) => (
              <li key={index}>
                <button
                  onClick={() => handleFilterClick(dropdownType, filter.filter)}
                  className={`text-gray-700 hover:text-blue-600 cursor-pointer ${
                    activeFilters[dropdownType] === filter.filter ? 'text-blue-600 font-medium' : ''
                  }`}
                >
                  {filter.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4 grid grid-cols-3 gap-6 p-6">
          {filteredItems.map((item, index) => (
            <Link key={index} to={item.link} className="hover:text-blue-600">
              <div>
                <h5 className="text-sm font-semibold text-gray-900 mb-1">{item.name}</h5>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  const renderMobileNavigationItem = (item: MainNavItem, index: number) => {
    const isLastItem = index === mainNavigationData.length - 1;
    const borderClass = isLastItem ? '' : 'border-b border-gray-100';

    if (item.type === 'dropdown') {
      const dropdownType = item.name.toLowerCase() as 'solutions' | 'products';
      const filteredItems = getFilteredItems(dropdownType);

      return (
        <div key={item.name} className={borderClass}>
          <button
            onClick={() => toggleMobileDropdown(item.name)}
            className="w-full flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-50"
          >
            <span className="text-sm">{item.name}</span>
            <ChevronRight size={16} className="text-gray-400" />
          </button>
          {mobileDropdowns[item.name] && (
            <div className="bg-gray-50 border-t border-gray-100">
              {/* Filters */}
              <div className="px-4 py-2">
                <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Categories
                </h5>
                <div className="space-y-2">
                  {item.filters.map((filter, filterIndex) => (
                    <button
                      key={filterIndex}
                      onClick={() => handleFilterClick(dropdownType, filter.filter)}
                      className={`block w-full text-left px-2 py-1 text-sm rounded ${
                        activeFilters[dropdownType] === filter.filter
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {filter.name}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Items */}
              {filteredItems.map((subItem, subIndex) => (
                <Link
                  key={subIndex}
                  to={subItem.link}
                  onClick={toggleMobile}
                  className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  {subItem.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.name}
        to={item.link}
        onClick={toggleMobile}
        className={`block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 ${borderClass}`}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <nav className="fixed w-full z-50 bg-white bg-opacity-95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} className="h-6" alt="OORB Logo" />
            <span className="text-xl font-semibold text-gray-900 tracking-tight">OORB</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-8 relative">
            {mainNavigationData.map((item) => {
              if (item.type === 'dropdown') {
                const isProducts = item.name === 'Products';
                const dropdownType = isProducts ? 'products' : 'solutions';
                const isVisible = isProducts ? showProducts : showSolutions;
                const setVisible = isProducts ? setShowProducts : setShowSolutions;
                const timeoutRef = isProducts ? productsTimeoutRef : solutionsTimeoutRef;

                return (
                  <div
                    key={item.name}
                    onMouseEnter={() => {
                      if (timeoutRef.current) clearTimeout(timeoutRef.current);
                      setVisible(true);
                    }}
                    onMouseLeave={() => {
                      timeoutRef.current = setTimeout(() => setVisible(false), 200);
                    }}
                    className="relative"
                  >
                    <button
                      className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 text-sm font-medium"
                      aria-expanded={isVisible}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} />
                    </button>
                    {renderDesktopDropdown(dropdownType, isVisible, timeoutRef, setVisible)}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.link}
                  className="text-gray-600 hover:text-blue-600 text-sm font-medium"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobile}
              className="text-gray-600 hover:text-blue-600 p-2 rounded-md hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="py-2">
              {mainNavigationData.map((item, index) =>
                renderMobileNavigationItem(item, index)
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;