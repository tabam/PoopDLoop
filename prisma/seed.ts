import { config } from "dotenv";
config({ path: ".env.local" });

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const sampleProducts = [
  {
    name: "Premium Wireless Headphones",
    description:
      "Experience crystal-clear audio with our premium wireless headphones. Features active noise cancellation, 30-hour battery life, and ultra-comfortable ear cushions for all-day wear.",
    price: 14999,
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"],
    category: "Electronics",
    inventory: 50,
  },
  {
    name: "Organic Cotton T-Shirt",
    description:
      "Soft, breathable, and sustainably made. This organic cotton t-shirt is perfect for everyday wear. Available in multiple colors.",
    price: 2999,
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"],
    category: "Clothing",
    inventory: 100,
  },
  {
    name: "Stainless Steel Water Bottle",
    description:
      "Keep your drinks cold for 24 hours or hot for 12 hours with our double-walled insulated water bottle. BPA-free and eco-friendly.",
    price: 3499,
    images: ["https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500"],
    category: "Home & Kitchen",
    inventory: 75,
  },
  {
    name: "Leather Laptop Sleeve",
    description:
      "Protect your laptop in style with this genuine leather sleeve. Fits laptops up to 15 inches with a soft microfiber interior.",
    price: 7999,
    images: ["https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500"],
    category: "Accessories",
    inventory: 30,
  },
  {
    name: "Smart Fitness Watch",
    description:
      "Track your health and fitness goals with this advanced smartwatch. Features heart rate monitoring, GPS, sleep tracking, and 7-day battery life.",
    price: 19999,
    images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"],
    category: "Electronics",
    inventory: 40,
  },
  {
    name: "Artisan Coffee Beans",
    description:
      "Single-origin, freshly roasted coffee beans from the highlands of Colombia. Rich, smooth flavor with notes of chocolate and caramel.",
    price: 1899,
    images: ["https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500"],
    category: "Food & Beverage",
    inventory: 200,
  },
  {
    name: "Yoga Mat Premium",
    description:
      "Non-slip, eco-friendly yoga mat made from natural rubber. Extra thick for comfort and durability. Perfect for yoga, pilates, and stretching.",
    price: 5999,
    images: ["https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500"],
    category: "Sports & Fitness",
    inventory: 60,
  },
  {
    name: "Minimalist Desk Lamp",
    description:
      "Modern LED desk lamp with adjustable brightness and color temperature. USB charging port included. Perfect for home office or study.",
    price: 4999,
    images: ["https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"],
    category: "Home & Kitchen",
    inventory: 45,
  },
  {
    name: "Canvas Backpack",
    description:
      "Durable canvas backpack with laptop compartment and multiple pockets. Water-resistant coating and reinforced stitching for everyday use.",
    price: 6999,
    images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"],
    category: "Accessories",
    inventory: 55,
  },
  {
    name: "Bamboo Cutting Board Set",
    description:
      "Set of 3 bamboo cutting boards in different sizes. Naturally antimicrobial, gentle on knives, and easy to clean.",
    price: 3999,
    images: ["https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=500"],
    category: "Home & Kitchen",
    inventory: 80,
  },
  {
    name: "Wireless Charging Pad",
    description:
      "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator and non-slip surface.",
    price: 2499,
    images: ["https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=500"],
    category: "Electronics",
    inventory: 90,
  },
  {
    name: "Ceramic Plant Pot Set",
    description:
      "Set of 3 handcrafted ceramic plant pots with drainage holes and saucers. Modern minimalist design perfect for succulents and small plants.",
    price: 4499,
    images: ["https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500"],
    category: "Home & Kitchen",
    inventory: 35,
  },
];

async function main() {
  console.log("Starting seed...");

  // Delete existing products
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();

  // Create products
  for (const product of sampleProducts) {
    await prisma.product.create({
      data: product,
    });
    console.log(`Created product: ${product.name}`);
  }

  console.log("Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
