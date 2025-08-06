import { useState, useEffect } from "react";
import { Sidebar } from "@/components/Sidebar";
import { BrandModal } from "@/components/BrandModal";
import { BackgroundDisplay } from "@/components/BackgroundDisplay";
import { brands, Brand, defaultBackground } from "@/data/brands";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBackground, setCurrentBackground] = useState(defaultBackground);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const isMobile = useIsMobile();

  // Auto-collapse sidebar on mobile
  useEffect(() => {
    setIsSidebarCollapsed(isMobile);
  }, [isMobile]);

  const handleBrandInfo = (brand: Brand) => {
    setSelectedBrand(brand);
    setIsModalOpen(true);
    // Auto-collapse sidebar on mobile when modal opens
    if (isMobile) {
      setIsSidebarCollapsed(true);
    }
  };

  const handleBrandNavigation = (brand: Brand) => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentBackground(brand.directionGif);
      setIsTransitioning(false);
    }, 500);

    // Auto-collapse sidebar on mobile when navigating
    if (isMobile) {
      setIsSidebarCollapsed(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedBrand(null);
  };

  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background */}
      <BackgroundDisplay 
        backgroundImage={currentBackground} 
        isTransitioning={isTransitioning}
      />

      {/* Sidebar */}
      <Sidebar
        onBrandInfo={handleBrandInfo}
        onBrandNavigation={handleBrandNavigation}
        isCollapsed={isSidebarCollapsed}
        onToggle={handleSidebarToggle}
      />

      {/* Main Content */}
      <main 
        className={`relative z-10 min-h-screen transition-all duration-300 ${
          isSidebarCollapsed ? 'lg:ml-16' : 'lg:ml-80'
        }`}
      >
        <div className="flex items-center justify-center min-h-screen p-8">
          <div className="text-center max-w-2xl">
            {/* <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
              Brand Discovery
            </h1> */}
            {/* <p className="text-xl text-foreground/80 mb-8 animate-fade-in">
              Explore premium brands and discover directions to their exclusive stores
            </p> */}
            {/* <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
              {brands.slice(0, 3).map((brand) => (
                <div
                  key={brand.id}
                  className="flex items-center gap-2 px-4 py-2 bg-glass border border-glass-border rounded-full backdrop-blur-sm hover:shadow-glow transition-all duration-300"
                >
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: brand.color }}
                  />
                  <span className="text-sm font-medium text-foreground/70">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </main>

      {/* Brand Modal */}
      <BrandModal
        brand={selectedBrand}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default Index;
