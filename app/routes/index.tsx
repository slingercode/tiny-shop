import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getProducts } from "~/loaders/products";

import productCSS from "~/styles/product.css";

import { formattedPrice } from "~/utils/helpers";

type ProductType = {
  id: string;
  name: string;
  price: number;
};

type LoaderData = ProductType[];

export const loader: LoaderFunction = async () => {
  return await getProducts();
};

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: productCSS,
  },
];

const ProductCover: React.FC<ProductType> = (product) => {
  const url =
    "https://res.cloudinary.com/dj4s8gwk9/image/upload/e_improve,w_1024,h_576,c_thumb/tiny-shop-example/product-1_r0qryp.webp";

  return (
    <>
      <img src={url} alt="Product" width="1024" height="576" />

      <div className="product_container">
        <div className="product">
          <h2>{product.name}</h2>
          <p>{formattedPrice(product.price)}</p>
        </div>
      </div>
    </>
  );
};

export default function Index() {
  const products = useLoaderData<LoaderData>();

  return (
    <div className="container">
      <div className="product_cover_container">
        <ProductCover {...products[0]} />
      </div>

      <div className="product_carousel_container">carousel</div>

      <div className="product_main_container">main</div>
    </div>
  );
}
