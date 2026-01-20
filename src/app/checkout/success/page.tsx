"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CheckCircle, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/store/cart";

export default function CheckoutSuccessPage() {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Order Confirmed!
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Thank you for your purchase. We&apos;ve sent a confirmation email with
          your order details.
        </p>

        <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Package className="w-6 h-6 text-purple-600" />
            <span className="font-semibold text-gray-900">
              What happens next?
            </span>
          </div>
          <ul className="text-left space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0">
                1
              </span>
              You&apos;ll receive an order confirmation email shortly
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0">
                2
              </span>
              We&apos;ll process and ship your order
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0">
                3
              </span>
              You&apos;ll receive tracking information once shipped
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/account/orders">
            <Button variant="outline">View Order History</Button>
          </Link>
          <Link href="/products">
            <Button>
              Continue Shopping
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
