import { DollarSign } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const DashboardRevenue = () => {
  return (
    <div className="flex w-full flex-col justify-between gap-2 sm:flex-row">
      <div className="flex-1">
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-row">
              <div>
                <DollarSign size={18} />
              </div>
            </CardTitle>
            <CardDescription>Receita Total</CardDescription>
          </CardHeader>
          <CardContent className="text-2xl font-bold">R$ 45000,00</CardContent>
        </Card>
      </div>
      <div className="flex-1">
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-row">
              <div>
                <DollarSign size={18} />
              </div>
            </CardTitle>
            <CardDescription>Receita Hoje</CardDescription>
          </CardHeader>
          <CardContent className="text-2xl font-bold">R$ 22000,00</CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardRevenue;
