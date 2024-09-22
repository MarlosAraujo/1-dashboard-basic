import { Box, DollarSign, ShoppingBasketIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const DashboardCards = () => {
  return (
    <div className="flex flex-col justify-between gap-2 sm:flex-row">
      <div className="flex-1">
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-row">
              <div>
                <DollarSign size={18} />
              </div>
            </CardTitle>
            <CardDescription>Vendas Totais</CardDescription>
          </CardHeader>
          <CardContent className="text-lg font-bold">R$ 22000,00</CardContent>
        </Card>
      </div>
      <div className="flex-1">
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-row">
              <div>
                <Box size={18} />
              </div>
            </CardTitle>
            <CardDescription>Total em estoque</CardDescription>
          </CardHeader>
          <CardContent className="text-lg font-bold">R$ 22000</CardContent>
        </Card>
      </div>
      <div className="flex-1">
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-row">
              <div>
                <ShoppingBasketIcon size={18} />
              </div>
            </CardTitle>
            <CardDescription>Produtos</CardDescription>
          </CardHeader>
          <CardContent className="text-lg font-bold">22</CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardCards;
