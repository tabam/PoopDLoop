import { redirect } from "next/navigation";
import Link from "next/link";
import { Package, User, MapPin, LogOut } from "lucide-react";
import { auth, signOut } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/Button";

async function getUserData(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      orders: {
        orderBy: { createdAt: "desc" },
        take: 5,
      },
      addresses: {
        where: { isDefault: true },
        take: 1,
      },
    },
  });
  return user;
}

export default async function AccountPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/signin?callbackUrl=/account");
  }

  const user = await getUserData(session.user.id);

  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">Profile</h2>
              <p className="text-sm text-gray-500">Manage your account</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-900 font-medium">{user.name || "No name set"}</p>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        {/* Orders Card */}
        <Link
          href="/account/orders"
          className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 transition-colors"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Package className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">Orders</h2>
              <p className="text-sm text-gray-500">View order history</p>
            </div>
          </div>
          <p className="text-gray-600">
            {user.orders.length} {user.orders.length === 1 ? "order" : "orders"}
          </p>
        </Link>

        {/* Address Card */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">Shipping Address</h2>
              <p className="text-sm text-gray-500">Your default address</p>
            </div>
          </div>
          {user.addresses.length > 0 ? (
            <div className="text-gray-600">
              <p>{user.addresses[0].street}</p>
              <p>
                {user.addresses[0].city}, {user.addresses[0].state}{" "}
                {user.addresses[0].postalCode}
              </p>
              <p>{user.addresses[0].country}</p>
            </div>
          ) : (
            <p className="text-gray-500">No address saved</p>
          )}
        </div>

        {/* Sign Out Card */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <LogOut className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">Sign Out</h2>
              <p className="text-sm text-gray-500">Log out of your account</p>
            </div>
          </div>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <Button type="submit" variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
              Sign Out
            </Button>
          </form>
        </div>
      </div>

      {/* Recent Orders */}
      {user.orders.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Recent Orders
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {user.orders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #{order.id.slice(0, 8).toUpperCase()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          order.status === "DELIVERED"
                            ? "bg-green-100 text-green-700"
                            : order.status === "SHIPPED"
                            ? "bg-blue-100 text-blue-700"
                            : order.status === "PAID"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${(order.total / 100).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
