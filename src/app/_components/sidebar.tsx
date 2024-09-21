import { GridIcon, LayoutGridIcon, Package2Icon, PackageIcon, ShoppingBasketIcon } from "lucide-react";
import { Button } from "./ui/button";
import SidebarButton from "./sidebar-button";

const Sidebar = () => {
    return(
        <div className="w-64 h-full bg-emerald-900 text-white dark:">
            {/* IMAGE */}
            <div className="px-8 py-6">
                <h1 className="font-bold text-2xl">NSW SALES</h1>
            </div>
            <div className="flex flex-col gap-2 p-2">
            <SidebarButton href="/">
                <LayoutGridIcon size={20} />
                Dashboard
            </SidebarButton>

            <SidebarButton href="/products">
                <PackageIcon size={20} />
                Produtos
            </SidebarButton>

            <SidebarButton href="/sales">
                <ShoppingBasketIcon size={20} />
                Vendas
            </SidebarButton>
            </div>
        </div>
    );
}
export default Sidebar;