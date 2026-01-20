import { config } from "dotenv";
config({ path: ".env.local" });

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const poopDLoopProducts = [
  // Core Product - POOP D LOOP Hoops
  {
    name: "POOP D LOOP - Fluorescent Orange",
    description:
      "The original hands-free animal waste collection hoop. Precision-engineered with an 8.0\" outer diameter and 5.0\" inner opening. Features an innovative elastic band groove (0.125\" wide × 0.250\" deep) and four semi-circular notches at 90° intervals for easy bag installation and removal. The fluorescent orange color provides maximum visibility up to 100 feet - perfect for marking waste locations and returning later! Embossed 'POOP D LOOP D POOP' branding around the rim. Symmetrical 0.25\" thick design works from either side. Injection-molded with UV-resistant pigments.",
    price: 1999,
    images: ["/images/demo/hoop-with-bag.jpg", "/images/products/poop-d-loop-diagram.png", "/images/demo/collection-demo-1.jpg"],
    category: "Hoops",
    inventory: 100,
  },
  {
    name: "POOP D LOOP - Fluorescent Yellow",
    description:
      "The hands-free animal waste collection hoop in high-visibility fluorescent yellow. Precision specs: 8.0\" outer diameter, 5.0\" inner opening, 0.25\" thickness. Features the patented elastic band groove system (0.125\" × 0.250\") and four semi-circular notches for easy bag handling. Perfect for marking waste locations in varied terrain - visible from 50-100 feet. Embossed branding and symmetrical design.",
    price: 1999,
    images: ["/images/demo/hoop-with-bag.jpg", "/images/products/poop-d-loop-diagram.png", "/images/demo/collection-demo-1.jpg"],
    category: "Hoops",
    inventory: 75,
  },
  {
    name: "POOP D LOOP - Bright Pink",
    description:
      "Stand out with the bright pink POOP D LOOP! Same precision engineering: 8.0\" outer diameter, 5.0\" inner opening, elastic band groove, and four semi-circular notches. The bright pink color is uncommon in nature, making it easy to spot from across the park. Perfect for dog moms who want style and function. UV-resistant and built to last.",
    price: 1999,
    images: ["/images/demo/hoop-with-bag.jpg", "/images/products/poop-d-loop-diagram.png", "/images/demo/collection-demo-1.jpg"],
    category: "Hoops",
    inventory: 60,
  },
  {
    name: "POOP D LOOP - Bright Blue",
    description:
      "The POOP D LOOP in vibrant bright blue. Engineered to spec: 8.0\" OD × 5.0\" ID × 0.25\" thick. Features circumferential groove (0.125\" × 0.250\") for secure elastic band retention and four notches for easy bag handling. High visibility on grass and dirt surfaces. Durable injection-molded construction with UV-resistant pigments.",
    price: 1999,
    images: ["/images/demo/hoop-with-bag.jpg", "/images/products/poop-d-loop-diagram.png", "/images/demo/collection-demo-1.jpg"],
    category: "Hoops",
    inventory: 50,
  },
  {
    name: "POOP D LOOP - Bright Red",
    description:
      "Classic bright red POOP D LOOP for traditional high-visibility waste collection. Full specifications: 8.0\" outer diameter, 5.0\" inner opening, 0.25\" thickness, elastic groove 0.125\" × 0.250\", four semi-circular notches. Strong contrast with green grass and natural environments. Same innovative hands-free design.",
    price: 1999,
    images: ["/images/demo/hoop-with-bag.jpg", "/images/products/poop-d-loop-diagram.png", "/images/demo/collection-demo-1.jpg"],
    category: "Hoops",
    inventory: 45,
  },

  // SCOOP D POOP - Backup Scooper
  {
    name: "SCOOP D POOP - Fluorescent Orange",
    description:
      "For the ones that got away! SCOOP D POOP is the perfect backup collection tool for waste you missed or found in the yard. Traditional jaw-style scooper with long 30-inch handle for no-bend operation. Features embossed 'SCOOP D POOP' branding, built-in bag storage in handle, and color-matched to your POOP D LOOP hoops. Collects waste directly into POOP D LOOP bags.",
    price: 1499,
    images: ["https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500"],
    category: "Accessories",
    inventory: 40,
  },
  {
    name: "SCOOP D POOP - Fluorescent Yellow",
    description:
      "The backup scooper in fluorescent yellow. SCOOP D POOP handles missed or pre-existing waste with ease. Long ergonomic handle, lightweight ABS construction, and bag attachment clips for direct collection. Hanging loop for storage on your HOOP D LOOP rack.",
    price: 1499,
    images: ["https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500"],
    category: "Accessories",
    inventory: 35,
  },

  // COUP D POOP - Storage Container
  {
    name: "COUP D POOP - Medium (10 Gallon)",
    description:
      "Your waste's final stop before the trash! COUP D POOP is a dedicated waste storage bin with odor-blocking technology. Features activated carbon filter in lid, step-on pedal for hands-free opening, and weather-resistant construction for outdoor placement. Direct drop-through slot sized for POOP D LOOP bags. UV-stabilized plastic in neutral gray with bright orange lid.",
    price: 4999,
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500"],
    category: "Storage",
    inventory: 25,
  },
  {
    name: "COUP D POOP - Large (18 Gallon)",
    description:
      "The large capacity COUP D POOP for multi-dog households or extended periods between trash pickup. Features premium carbon filter system, locking lid option, and optional wheeled base. Tight-fitting gasket seal keeps odors contained. Perfect for professional dog facilities, kennels, or serious pet owners.",
    price: 6999,
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500"],
    category: "Storage",
    inventory: 15,
  },

  // HOOP D LOOP - Storage Rack
  {
    name: "HOOP D LOOP Rack - Wall Mount (4 Hoops)",
    description:
      "Organize the loop! The HOOP D LOOP rack keeps your pre-assembled hoops ready to grab and go. Wall-mounted design holds 4 POOP D LOOP hoops with integrated shelf for bag refill storage. Individual slots with spacing for bagged hoops. Embossed 'HOOP D LOOP' branding. Perfect for mudrooms or garages.",
    price: 2499,
    images: ["https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=500"],
    category: "Storage",
    inventory: 30,
  },
  {
    name: "HOOP D LOOP Rack - Deluxe (8 Hoops)",
    description:
      "The deluxe HOOP D LOOP rack for multi-dog households. Holds 8 hoops with room for SCOOP D POOP storage. Free-standing or wall-mount options. Color-coded peg system, drainage design for cleaned hoops, and magnetic label holders for dog identification. Professional grade organization.",
    price: 3999,
    images: ["https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=500"],
    category: "Storage",
    inventory: 20,
  },

  // Disposable Bags
  {
    name: "POOP D LOOP Bags - Standard (50 Pack)",
    description:
      "Replacement bags for your POOP D LOOP system. Standard plastic construction with sewn-in elastic band that snaps securely into the hoop's 0.125\" × 0.250\" groove. 12-inch depth provides ample room for collection and cinching. Compatible with all POOP D LOOP hoops. 36+ month shelf life.",
    price: 1299,
    images: ["https://images.unsplash.com/photo-1567225591450-06036b3392a6?w=500"],
    category: "Refills",
    inventory: 200,
  },
  {
    name: "POOP D LOOP Bags - Biodegradable (50 Pack)",
    description:
      "Eco-friendly replacement bags made from certified compostable bioplastic (PLA/PBAT blend). ASTM D6400 certified for industrial composting. Breaks down in 90-180 days in commercial composting facilities. Same great fit with elastic band system. Perfect for environmentally conscious pet owners. 12-18 month shelf life.",
    price: 1999,
    images: ["https://images.unsplash.com/photo-1567225591450-06036b3392a6?w=500"],
    category: "Refills",
    inventory: 150,
  },
  {
    name: "POOP D LOOP Bags - Paper Premium (30 Pack)",
    description:
      "Maximum eco-friendly option! Heavy-duty 60-80 lb kraft paper bags with biodegradable moisture-resistant coating. Naturally biodegrades in 2-6 weeks. Elastic band attached via industrial sewing. For immediate disposal or home composting. The greenest choice for responsible pet owners.",
    price: 2499,
    images: ["https://images.unsplash.com/photo-1567225591450-06036b3392a6?w=500"],
    category: "Refills",
    inventory: 100,
  },

  // Bundle Packages
  {
    name: "POOP D LOOP Starter Kit",
    description:
      "Everything you need to get started! Includes 2 POOP D LOOP hoops (your choice of colors), 25 standard bags, and a quick-start instruction guide. Each hoop: 8.0\" OD × 5.0\" ID × 0.25\" thick with elastic groove and notches. Perfect for new pet owners or those wanting to try the hands-free collection revolution.",
    price: 3499,
    images: ["/images/demo/hoop-with-bag.jpg", "/images/products/poop-d-loop-diagram.png", "/images/demo/collection-demo-1.jpg"],
    category: "Bundles",
    inventory: 50,
  },
  {
    name: "POOP D LOOP Standard Package",
    description:
      "Our most popular bundle! Includes 3 POOP D LOOP hoops in mixed colors, 50 standard bags, and 1 SCOOP D POOP backup scooper. Complete collection solution for everyday dog owners. Save 15% compared to buying separately.",
    price: 5499,
    images: ["/images/demo/hoop-with-bag.jpg", "/images/products/poop-d-loop-diagram.png", "/images/demo/collection-demo-1.jpg"],
    category: "Bundles",
    inventory: 40,
  },
  {
    name: "POOP D LOOP Deluxe Package",
    description:
      "The premium choice for serious pet owners! Includes 4 POOP D LOOP hoops in assorted colors, 100 standard bags, 1 SCOOP D POOP, and 1 HOOP D LOOP wall rack. Stay organized and always ready. Save 20% compared to individual items.",
    price: 8999,
    images: ["/images/demo/hoop-with-bag.jpg", "/images/products/poop-d-loop-diagram.png", "/images/demo/collection-demo-1.jpg"],
    category: "Bundles",
    inventory: 25,
  },
  {
    name: "POOP D LOOP Ultimate System",
    description:
      "The complete waste management ecosystem! Includes 6 POOP D LOOP hoops (all 5 colors + extra orange), 200 standard bags, 1 SCOOP D POOP, 1 HOOP D LOOP deluxe rack, and 1 COUP D POOP medium container. Everything you need for a multi-dog household or professional use. Save 25%!",
    price: 14999,
    images: ["/images/demo/hoop-with-bag.jpg", "/images/products/poop-d-loop-diagram.png", "/images/demo/collection-demo-1.jpg"],
    category: "Bundles",
    inventory: 15,
  },

  // Multi-Color Hoop Sets
  {
    name: "POOP D LOOP Multi-Color Set (3 Hoops)",
    description:
      "Track multiple waste locations with color-coded hoops! Set includes Orange, Yellow, and Pink POOP D LOOP hoops. Each hoop: 8.0\" OD × 5.0\" ID with elastic groove and 4 notches. Perfect for multi-dog walks - assign each dog a color or mark multiple locations. Visible from 50-100 feet. Save 10% vs individual hoops.",
    price: 5399,
    images: ["/images/demo/hoop-with-bag.jpg", "/images/products/poop-d-loop-diagram.png", "/images/demo/collection-demo-1.jpg"],
    category: "Hoops",
    inventory: 35,
  },
  {
    name: "POOP D LOOP Complete Color Set (5 Hoops)",
    description:
      "Get every color in the POOP D LOOP rainbow! Includes all 5 vibrant colors: Fluorescent Orange, Fluorescent Yellow, Bright Pink, Bright Blue, and Bright Red. Each precision-engineered to spec: 8.0\" × 5.0\" × 0.25\" with groove and notches. Maximum visibility options and color-coding possibilities. Save 15%.",
    price: 8499,
    images: ["/images/demo/hoop-with-bag.jpg", "/images/products/poop-d-loop-diagram.png", "/images/demo/collection-demo-1.jpg"],
    category: "Hoops",
    inventory: 25,
  },
];

async function main() {
  console.log("Starting seed with POOP D LOOP products...");

  // Delete existing products
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();

  // Create products
  for (const product of poopDLoopProducts) {
    await prisma.product.create({
      data: product,
    });
    console.log(`Created product: ${product.name}`);
  }

  console.log("Seed completed successfully!");
  console.log(`Total products created: ${poopDLoopProducts.length}`);
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
