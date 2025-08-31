import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Product ${id}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

/*
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const id = params.productId;
  const res = await fetch(`https://api.example.com/products/${id}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    return {
      title: "Produit introuvable",
    };
  }
  const product = await res.json();
  return {
    title: product.name ? `Produit ${product.name}` : `Produit ${id}`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.imageUrl],
    },
  };
};

*/

const ProductDetails = async ({ params }: Props) => {
  const productId = (await params).productId;
  return <div>Product Details {productId}</div>;
};

export default ProductDetails;
