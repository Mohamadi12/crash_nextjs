import { getProducts } from "@/prisma-db";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductsDBPage() {
  const products: Product[] = await getProducts();

  return (
    <ul className="space-y-4 p-4">
      {products.map((product) => (
        <li
          key={product.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <div className="text-xl font-semibold">{product.title}</div>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
        </li>
      ))}
    </ul>
  );
}
