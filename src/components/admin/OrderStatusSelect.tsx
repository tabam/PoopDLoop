"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const statuses = [
  { value: "PENDING", label: "Pending", color: "bg-gray-100 text-gray-700" },
  { value: "PAID", label: "Paid", color: "bg-purple-100 text-purple-700" },
  { value: "PROCESSING", label: "Processing", color: "bg-yellow-100 text-yellow-700" },
  { value: "SHIPPED", label: "Shipped", color: "bg-blue-100 text-blue-700" },
  { value: "DELIVERED", label: "Delivered", color: "bg-green-100 text-green-700" },
  { value: "CANCELLED", label: "Cancelled", color: "bg-red-100 text-red-700" },
];

interface OrderStatusSelectProps {
  orderId: string;
  currentStatus: string;
}

export function OrderStatusSelect({
  orderId,
  currentStatus,
}: OrderStatusSelectProps) {
  const router = useRouter();
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStatusChange = async (newStatus: string) => {
    setIsUpdating(true);

    try {
      const response = await fetch(`/api/admin/orders/${orderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      router.refresh();
    } catch (error) {
      console.error("Update status error:", error);
      alert("Failed to update order status");
    } finally {
      setIsUpdating(false);
    }
  };

  const currentStatusInfo = statuses.find((s) => s.value === currentStatus);

  return (
    <select
      value={currentStatus}
      onChange={(e) => handleStatusChange(e.target.value)}
      disabled={isUpdating}
      className={`px-3 py-1 text-sm font-medium rounded-full border-0 cursor-pointer ${
        currentStatusInfo?.color || "bg-gray-100 text-gray-700"
      } ${isUpdating ? "opacity-50" : ""}`}
    >
      {statuses.map((status) => (
        <option key={status.value} value={status.value}>
          {status.label}
        </option>
      ))}
    </select>
  );
}
