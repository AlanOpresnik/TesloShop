import ProductsGrid from "@/components/products/ProductsGrid/ProductsGrid";
import Title from "@/components/ui/Title/Title";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import Image from "next/image";

const products  = initialData.products;

export default function Home() {
  return (
    <main>
       <Title
       title={"Tienda"}
       subTitle={"Todos los productos"}
       classname="mb-2"
       />
       <ProductsGrid products={products}/>
    </main>
  );
}
