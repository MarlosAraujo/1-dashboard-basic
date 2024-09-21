import { Button } from "./ui/button";

const Sidebar = () => {
    return(
        <div className="w-64 h-full bg-emerald-900 text-white dark:">
            {/* IMAGE */}
            <div className="px-8 py-6">
                <h1 className="font-bold text-2xl">NSW SALES</h1>
            </div>
            <div className="flex flex-col gap-2 p-2">
                <Button className="bg-transparent border-emerald-200 border-collapse">
                    Dashborad
                </Button >
                <Button className="bg-transparent border-emerald-200 border-collapse">
                    Produtos
                </Button>
                <Button className="bg-transparent border-emerald-200 border-collapse">
                    Vendas
                </Button>
            </div>
        </div>
    );
}
export default Sidebar;