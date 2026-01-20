import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { EditProductForm } from "@/components/admin/EditProductForm";

interface EditProductPageProps {
  params: Promise<{ id: string }>;
}

async function getProduct(id: string) {
  return prisma.product.findUnique({
    where: { id },
  });
}

export default async function EditProductPage({ params }: EditProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return <EditProductForm product={product} />;
}
