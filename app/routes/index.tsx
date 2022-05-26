import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getProducts } from "~/loaders/products";

type LoaderData = {
  id: string;
  name: string;
  price: number;
}[];

export const loader: LoaderFunction = async () => {
  return await getProducts();
};

export default function Index() {
  const products = useLoaderData<LoaderData>();

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <div>
            <h2>{product.name}</h2>
          </div>

          <div>
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
