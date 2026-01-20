"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  inventory: number;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0] || "/placeholder.jpg",
      maxQuantity: product.inventory,
    });
  };

  const isOutOfStock = product.inventory <= 0;

  return (
    <Link
      href={`/products/${product.id}`}
      className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="aspect-square relative bg-gray-100 overflow-hidden">
        {product.images[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <ShoppingCart className="w-12 h-12" />
          </div>
        )}
        {isOutOfStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
              Out of Stock
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs text-purple-600 font-medium uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-1 text-gray-500 text-sm line-clamp-2">
          {product.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          <Button
            size="sm"
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Link>
  );
}
