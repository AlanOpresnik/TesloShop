import QuantitySelector from "@/components/product/QuantitySelector/QuantitySelector";
import Title from "@/components/ui/Title/Title";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const productsInCart = [initialData.products[0]];

const CheckoutPage = () => {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar orden" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5 gap-6">
            <span className="text-xl"> Ajustar elementos</span>
            <Link className="underline mb-5" href={"/cart"}>
              Editar carrito
            </Link>

            {productsInCart.map((product) => (
              <div className="flex" key={product.slug}>
                <Image
                  className="mr-5 rounded"
                  width={100}
                  height={100}
                  alt={product.title}
                  style={{ width: "100px", height: "100px" }}
                  src={`/products/${product.images[0]} `}
                />
                <div>
                  <p>{product.title}</p>
                  <p>${product.price} x 3</p>
                  <p className="font-bold">Subtotal: ${product.price * 2}</p>
                </div>
              </div>
            ))}
          </div>
          {/* checkout */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2 font-bold">Direccion de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Alan opresnik</p>
              <p>Riobamba 351</p>
              <p>merlo centro</p>
              <p>Buenos aires</p>
              <p>CP 1722</p>
              <p>112394782</p>
            </div>
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />
            <h2 className="text-2xl mb-2 font-bold">resumen del pedido</h2>
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
            <div className="mt-5 mb-2 w-full">
              <p className="mb-5">
                <span className="text-xs">Al hacer click en checkout aceptas nuestros <a className="underline text-indigo-600" href="">terminos y condiciones</a></span>
              </p>
              <Link
                href={"/orders/123"}
                className="btn-primary flex justify-center mt-5"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
