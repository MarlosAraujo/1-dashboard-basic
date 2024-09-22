import Image from "next/image";
import DashboardRevenue from "./_components/dashboard-revenue";
import DashboardCards from "./_components/dashboard-cards";

export default function Home() {
  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-white p-8">
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Dashboard
          </span>
          <h2 className="text-xl font-semibold">Dashboard</h2>
        </div>
        {/* <CreateSaleButton products={products} productOptions={productOptions} /> */}
      </div>
      <DashboardRevenue />
      <DashboardCards />
    </div>
  );
}
