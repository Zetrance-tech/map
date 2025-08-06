// Brand data configuration
import welcomeBg from "@/assets/welcome-bg.jpg";
import nikeDirection from "@/assets/ikea.gif";
import adidasDirection from "@/assets/balance-spa.gif";
import benettonDirection from "@/assets/benetton-direction.jpg";
import pumaDirection from "@/assets/puma-direction.jpg";
import chanelDirection from "@/assets/chanel-direction.jpg";
import gucciDirection from "@/assets/freedom-tree.gif";
import louisVuittonDirection from "@/assets/play-salon.gif";
import versaceDirection from "@/assets/versace-direction.jpg";
import hermesDirection from "@/assets/hermes-direction.jpg";
import rolexDirection from "@/assets/rolex-direction.jpg";
import appleDirection from "@/assets/lakeview.gif";
import samsungDirection from "@/assets/samsung-direction.jpg";
import zaraDirection from "@/assets/zara-direction.jpg";
import hmDirection from "@/assets/hm-direction.jpg";
import uniqloDirection from "@/assets/uniqlo-direction.jpg";
import diorDirection from "@/assets/dior-direction.jpg";
import burberryDirection from "@/assets/burberry-direction.jpg";
import balenciagaDirection from "@/assets/balenciaga-direction.jpg";
import offWhiteDirection from "@/assets/off-white-direction.jpg";
import supremeDirection from "@/assets/supreme-direction.jpg";
import stoneIslandDirection from "@/assets/stone-island-direction.jpg";
import monclerDirection from "@/assets/moncler-direction.jpg";
import canadaGooseDirection from "@/assets/canada-goose-direction.jpg";
import patagoniaDirection from "@/assets/patagonia-direction.jpg";
import northFaceDirection from "@/assets/north-face-direction.jpg";

import nike1 from "@/assets/ikea.jpg";
import adidas1 from "@/assets/freedom-tree.jpg";
import benetton1 from "@/assets/balance-spa.jpg";
import puma1 from "@/assets/play-salon.jpg";
import chanel1 from "@/assets/lakeview.jpg";

export interface Brand {
  id: string;
  name: string;
  description: string;
  directionGif: string;
  images: string[];
  category: string;
  color: string;
}

export const brands: Brand[] = [
  {
    id: "nike",
    name: "Ikea",
    description: "It is about experiencing solutions first hand and getting to know ideas and inspirations that can fit perfectly into your home. ",
    directionGif: nikeDirection,
    images: [nike1],
    category: "Home Decor & Furniture",
    color: "hsl(217 91% 60%)"
  },
  {
    id: "adidas",
    name: "Balance Spa",
    description: "Balance Wellness Spa offers massages (Swedish, Deep Tissue, Balinese, Bamboo), facials, hair treatments, waxing, and more.",
    directionGif: adidasDirection,
    images: [benetton1],
    category: "Beauty & Wellness",
    color: "hsl(0 0% 0%)"
  },
  {
    id: "gucci",
    name: "Freedom Tree",
    description: "India's Happiest Home Store. The work of many heads, hearts, and hands, we're a creative Home Décor & Furnishings Store. We design with joy, no pretense",
    directionGif: gucciDirection,
    images: [adidas1],
    category: "Home Decor & Furniture",
    color: "hsl(120 100% 25%)"
  },
  {
    id: "louis-vuitton",
    name: "Play Salon",
    description: "25+ Years Experienced Professionals. Our highly trained stylists and technicians are dedicated to delivering the highest quality beauty services.",
    directionGif: louisVuittonDirection,
    images: [puma1],
    category: "Beauty & Wellness",
    color: "hsl(35 100% 50%)"
  },
  {
    id: "apple",
    name: "Lakeview Milkbar",
    description: "Lakeview has been baking cakes for me sinces decades , and the cakes only gets better with designs and taste! ",
    directionGif: appleDirection,
    images: [chanel1],
    category: "Food & Beverage",
    color: "hsl(0 0% 60%)"
  },
  // {
  //   id: "samsung",
  //   name: "Samsung",
  //   description: "Do What You Can't. Experience cutting-edge technology and innovation that pushes the boundaries of what's possible.",
  //   directionGif: samsungDirection,
  //   images: [adidas1],
  //   category: "Electronics",
  //   color: "hsl(217 91% 60%)"
  // },
  // {
  //   id: "versace",
  //   name: "Versace",
  //   description: "Italian luxury fashion company and trade name founded by Gianni Versace. Known for bold designs and glamorous aesthetic.",
  //   directionGif: versaceDirection,
  //   images: [puma1],
  //   category: "High Fashion",
  //   color: "hsl(45 93% 47%)"
  // },
  // {
  //   id: "hermes",
  //   name: "Hermès",
  //   description: "French luxury goods manufacturer specializing in leather goods, perfumery, luxury goods, and ready-to-wear fashion.",
  //   directionGif: hermesDirection,
  //   images: [chanel1],
  //   category: "Luxury Leather",
  //   color: "hsl(25 100% 50%)"
  // },
  // {
  //   id: "rolex",
  //   name: "Rolex",
  //   description: "Swiss luxury watch manufacturer known for precision, reliability, and prestige. A crown for every achievement.",
  //   directionGif: rolexDirection,
  //   images: [nike1],
  //   category: "Luxury Watches",
  //   color: "hsl(120 100% 30%)"
  // },
  // {
  //   id: "chanel",
  //   name: "Chanel",
  //   description: "Timeless elegance redefined. Experience the sophistication of French haute couture and the legendary fragrance that captivates the world.",
  //   directionGif: chanelDirection,
  //   images: [chanel1],
  //   category: "Luxury Fragrance",
  //   color: "hsl(271 91% 65%)"
  // },
  // {
  //   id: "zara",
  //   name: "Zara",
  //   description: "Spanish fast fashion retailer known for trendy, affordable fashion that brings runway styles to everyday wardrobes.",
  //   directionGif: zaraDirection,
  //   images: [benetton1],
  //   category: "Fast Fashion",
  //   color: "hsl(0 0% 20%)"
  // },
  // {
  //   id: "hm",
  //   name: "H&M",
  //   description: "Swedish fashion retailer offering fashion and quality at the best price in a sustainable way. Style that's accessible to all.",
  //   directionGif: hmDirection,
  //   images: [nike1],
  //   category: "Affordable Fashion",
  //   color: "hsl(0 84% 60%)"
  // },
  // {
  //   id: "uniqlo",
  //   name: "Uniqlo",
  //   description: "Japanese casual wear designer, manufacturer and retailer. LifeWear - simple, high-quality everyday clothing.",
  //   directionGif: uniqloDirection,
  //   images: [adidas1],
  //   category: "Casual Wear",
  //   color: "hsl(0 84% 60%)"
  // },
  // {
  //   id: "dior",
  //   name: "Dior",
  //   description: "French luxury fashion house founded in 1946. Known for revolutionary designs and the New Look that redefined feminine elegance.",
  //   directionGif: diorDirection,
  //   images: [chanel1],
  //   category: "Haute Couture",
  //   color: "hsl(0 0% 70%)"
  // },
  // {
  //   id: "burberry",
  //   name: "Burberry",
  //   description: "British luxury fashion house known for its iconic trench coats, distinctive check pattern, and modern British style.",
  //   directionGif: burberryDirection,
  //   images: [puma1],
  //   category: "British Luxury",
  //   color: "hsl(30 100% 50%)"
  // },
  // {
  //   id: "balenciaga",
  //   name: "Balenciaga",
  //   description: "Spanish luxury fashion house founded by Cristóbal Balenciaga. Known for innovative silhouettes and architectural design.",
  //   directionGif: balenciagaDirection,
  //   images: [nike1],
  //   category: "Avant-Garde Fashion",
  //   color: "hsl(0 0% 0%)"
  // },
  // {
  //   id: "off-white",
  //   name: "Off-White",
  //   description: "Italian luxury fashion label founded by Virgil Abloh. Streetwear meets high fashion in contemporary urban design.",
  //   directionGif: offWhiteDirection,
  //   images: [adidas1],
  //   category: "Streetwear Luxury",
  //   color: "hsl(25 100% 50%)"
  // },
  // {
  //   id: "supreme",
  //   name: "Supreme",
  //   description: "American clothing and skateboarding lifestyle brand. Known for limited releases and collaborations with major brands.",
  //   directionGif: supremeDirection,
  //   images: [benetton1],
  //   category: "Streetwear",
  //   color: "hsl(0 84% 60%)"
  // },
  // {
  //   id: "stone-island",
  //   name: "Stone Island",
  //   description: "Italian menswear brand known for innovative fabrics and dyeing techniques. Premium sportswear with military influence.",
  //   directionGif: stoneIslandDirection,
  //   images: [puma1],
  //   category: "Technical Wear",
  //   color: "hsl(60 100% 50%)"
  // },
  // {
  //   id: "moncler",
  //   name: "Moncler",
  //   description: "French-Italian luxury fashion brand specializing in ready-to-wear outerwear known for its down jackets and sportswear.",
  //   directionGif: monclerDirection,
  //   images: [nike1],
  //   category: "Luxury Outerwear",
  //   color: "hsl(217 91% 60%)"
  // },
  // {
  //   id: "benetton",
  //   name: "United Colors of Benetton",
  //   description: "United Colors of Benetton celebrates diversity and unity through vibrant fashion. Embrace colorful expressions of contemporary Italian style.",
  //   directionGif: benettonDirection,
  //   images: [benetton1],
  //   category: "Fashion & Lifestyle",
  //   color: "hsl(120 100% 50%)"
  // },
  // {
  //   id: "puma",
  //   name: "Puma",
  //   description: "Forever Faster. Feel the power and agility that drives athletes worldwide. Puma combines sport performance with street-smart style.",
  //   directionGif: pumaDirection,
  //   images: [puma1],
  //   category: "Athletic Performance",
  //   color: "hsl(45 93% 47%)"
  // },
  // {
  //   id: "canada-goose",
  //   name: "Canada Goose",
  //   description: "Canadian luxury clothing manufacturer known for premium winter wear and arctic-tested outerwear since 1957.",
  //   directionGif: canadaGooseDirection,
  //   images: [chanel1],
  //   category: "Winter Outerwear",
  //   color: "hsl(0 84% 60%)"
  // },
  // {
  //   id: "patagonia",
  //   name: "Patagonia",
  //   description: "American clothing company focused on outdoor clothing and gear. Committed to environmental responsibility and activism.",
  //   directionGif: patagoniaDirection,
  //   images: [adidas1],
  //   category: "Outdoor Gear",
  //   color: "hsl(120 100% 40%)"
  // },
  // {
  //   id: "north-face",
  //   name: "The North Face",
  //   description: "Never Stop Exploring. American outdoor recreation product company specializing in outerwear, fleece, and equipment.",
  //   directionGif: northFaceDirection,
  //   images: [nike1],
  //   category: "Outdoor Equipment",
  //   color: "hsl(0 0% 0%)"
  // }
];

export const defaultBackground = welcomeBg;