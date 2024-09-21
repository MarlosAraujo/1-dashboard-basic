
const ProductsPage = async () => {
  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-white p-8">
    <div className="flex w-full items-center justify-between">
      <div className="space-y-1">
        <span className="text-xs font-semibold text-slate-500">
          Gestão de Produtos
        </span>
        <h2 className="text-xl font-semibold">Produtos</h2>
      </div>
      {/* <AddProductButton /> */}
    </div>
    {/* <DataTable columns={productTableColumns} data={products} /> */}
  </div>
  );
};

export default ProductsPage;