import QuantitySelector from "@/components/product/QuantitySelector/QuantitySelector";
import Title from "@/components/ui/Title/Title";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const productsInCart = [
  initialData.products[0],
];

const CartPage = () => {


  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5 gap-6">
            <span className="text-xl">Agregar mas productos</span>
            <Link className="underline mb-5" href={"/"}>
              Continua comprando
            </Link>
         
          {productsInCart.map((product) => (
            <div className="flex" key={product.slug}>
              <Image
              className="mr-5 rounded"
                width={100}
                height={100}
                alt={product.title}
                style={{width: '100px', height: '100px'}}
                src={`/products/${product.images[0]} `}
              />
              <div>
                <p>{product.title}</p>
                <p>${product.price}</p>
                <QuantitySelector quantity={3}/>
                <button className="underline mt-3">Remover</button>
              </div>
            </div>
          ))}
           </div>
           {/* checkout */}
           <div className="bg-white rounded-xl shadow-xl p-7 h-[300px]">
              <h2 className="text-2xl mb-2 ">Resumen de orden</h2>
              <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3 Articulos</span>
              <span>Subtotal</span>
              <span className="text-right">$199</span>
              <span>Impuestos {"15%"}</span>
              <span className="text-right">$219</span>
              <span className="mt-5 text-2xl">Total </span>
              <span className="mt-5 text-2xl text-right">$219</span>
              </div>
              <div>
                <Link href={'/checkout/address'} className="btn-primary flex justify-center mt-5">Checkout</Link>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
