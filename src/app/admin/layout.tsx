import { redirect } from "next/navigation";
import { auth, signOut } from "@/lib/auth";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user?.isAdmin) {
    redirect("/");
  }

  async function signOutAction() {
    "use server";
    await signOut({ redirectTo: "/" });
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminSidebar signOutAction={signOutAction} />

      {/* Main content */}
      <main className="lg:ml-64 pt-14 lg:pt-0 p-4 sm:p-6 lg:p-8">{children}</main>
    </div>
  );
}
