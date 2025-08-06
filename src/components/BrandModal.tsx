import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Brand } from "@/data/brands";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BrandModalProps {
  brand: Brand | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BrandModal = ({ brand, isOpen, onClose }: BrandModalProps) => {
  if (!brand) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gradient-glass border-glass-border backdrop-blur-xl shadow-glass">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {brand.name}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-muted/50"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
              {brand.category}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {brand.description}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Brand Gallery</h3>
            <div className="grid grid-cols-1 gap-4">
              {brand.images.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg bg-muted/50 shadow-glass"
                >
                  <img
                    src={image}
                    alt={`${brand.name} product ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              onClick={onClose}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              Explore More
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};