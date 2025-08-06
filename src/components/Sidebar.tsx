import { useState, useMemo } from "react";
import { brands, Brand } from "@/data/brands";
import { Info, Navigation, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface SidebarProps {
  onBrandInfo: (brand: Brand) => void;
  onBrandNavigation: (brand: Brand) => void;
}

export const Sidebar = ({ onBrandInfo, onBrandNavigation }: SidebarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Get unique categories for the dropdown
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(brands.map(brand => brand.category)));
    return ["all", ...uniqueCategories];
  }, []);

  // Filter brands based on search query and category
  const filteredBrands = useMemo(() => {
    let filtered = brands;
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(brand => 
        brand.name.toLowerCase().includes(query) ||
        brand.category.toLowerCase().includes(query) ||
        brand.description.toLowerCase().includes(query)
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(brand => brand.category === selectedCategory);
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  return (
    <aside
      className="fixed left-0 top-0 h-full w-80 bg-gradient-glass border-r border-glass-border backdrop-blur-xl shadow-glass z-50 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-glass-border">
        <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          ESSENSAI 067 Map
        </h1>
      </div>

      {/* Search and Filter */}
      <div className="p-4 border-b border-glass-border space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search brands..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-10 bg-muted/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-muted/70"
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="bg-muted/50 border-border/50">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category} value={category}>
                {category === "all" ? "All Categories" : category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {searchQuery || selectedCategory !== "all" ? (
          <p className="text-xs text-muted-foreground">
            {filteredBrands.length} brand{filteredBrands.length !== 1 ? 's' : ''} found
          </p>
        ) : null}
      </div>

      {/* Brand List with Scroll */}
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="p-4 space-y-3">
            {filteredBrands.length > 0 ? (
              filteredBrands.map((brand) => (
                <div
                  key={brand.id}
                  className="group relative bg-card/50 rounded-lg border border-border/50 p-4 hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {brand.name}
                    </h3>
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: brand.color }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {brand.category}
                  </p>
                  <div className="flex gap-2 flex-row">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onBrandInfo(brand)}
                      className="flex-1 hover:bg-primary/10 hover:border-primary/50"
                    >
                      <Info className="h-4 w-4" />
                      <span className="ml-2">Info</span>
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => onBrandNavigation(brand)}
                      className="flex-1 bg-gradient-primary hover:shadow-glow"
                    >
                      <Navigation className="h-4 w-4" />
                      <span className="ml-2">Navigate</span>
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <Search className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  No brands found matching your criteria
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearSearch}
                  className="mt-2 text-primary hover:text-primary/80"
                >
                  Clear search and filter
                </Button>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      {/* Brand Count Footer */}
      <div className="p-4 border-t border-glass-border">
        <p className="text-xs text-muted-foreground text-center">
          {brands.length} premium brands available
        </p>
      </div>
    </aside>
  );
};