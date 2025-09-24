import { Product } from "@/types/product";


export const productsData: Product[] = [
  {
    name: "AK-900 Wired Keyboard",
    price: 1160,
    offerPrice: 960,
    discount: 35,
    rating: 4,
    reviews: 75,
    image:
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImageWithoutBg.png",
  },
  {
    name: "Gaming Mouse Pro",
    price: 800,
    offerPrice: 600,
    discount: 25,
    rating: 5,
    reviews: 120,
    image:
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImageWithoutBg.png",
  },
  ...Array(4).fill({
    name: "Gaming Mouse Pro",
    price: 800,
    offerPrice: 600,
    discount: 25,
    rating: 5,
    reviews: 120,
    image:
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImageWithoutBg.png",
  }),
];
