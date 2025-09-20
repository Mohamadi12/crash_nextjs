import { addProduct } from "@/prisma-db";
import { redirect } from "next/navigation";

export default function AddProductPage() {
  async function createProduct(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;

    addProduct(title, parseInt(price), description);

    await addProduct(title, parseInt(price), description);
    redirect("/products-db");
  }

  return (
    <form className="p-4 space-y-4 max-w-96" action={createProduct}>
      <div>
        <label className="text-white">
          Title
          <input
            type="text"
            className="block w-full p-2 text-black border rounded bg-white"
            name="title"
          />
        </label>
      </div>
      <div>
        <label className="text-white">
          Price
          <input
            type="number"
            className="block w-full p-2 text-black border rounded bg-white"
            name="price"
          />
        </label>
      </div>
      <div>
        <label className="text-white">
          Description
          <textarea
            className="block w-full p-2 text-black border rounded bg-white"
            name="description"
          />
        </label>
      </div>
      <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
      >
        Add product
      </button>
    </form>
  );
}
