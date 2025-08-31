import Link from "next/link";

const Products = () => {
  return (
    <>
      <Link href="/">Go to Home</Link>
      <h1>Products List</h1>
      <h2>
        <Link href="/products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="/products/2" replace>
          Product 2
        </Link>{" "}
        {/* Replace will replace the current history */}
      </h2>
      <h2>
        <Link href="/products/3">Product 3</Link>
      </h2>
    </>
  );
};

export default Products;
