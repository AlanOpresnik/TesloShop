import ProductGridItem from "@/components/products/ProductsGrid/ProductGridItem";
import ProductsGrid from "@/components/products/ProductsGrid/ProductsGrid";
import Title from "@/components/ui/Title/Title";
import { Category } from "@/interfaces/Product.Interface";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import React from "react";

const products = initialData.products;

interface Props {
  params: {
    id: Category;
  };
}

const CategoryPage = ({ params }: Props) => {
  const { id } = params;

  const productsFilter = products.filter((products) => products.gender === id);
  console.log(productsFilter);

  const labels: Record<Category, string> = {
    men: "Hombres",
    women: "Mujeres",
    kid: "Bebes",
    unisex: "Todos",
  };
  /*if(id === "kids") {
    notFound()
  }*/
  return (
    <div>
      <Title
        title={`Articulos de ${labels[id]}`}
        subTitle={`Todos los productos de ${labels[id]}`}
      />
      <div>
        <ProductsGrid products={productsFilter} />
      </div>
    </div>
  );
};

export default CategoryPage;
