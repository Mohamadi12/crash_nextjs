import { redirect } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ProductReview({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review");
  }

  const { reviewId, productId } = await params;
  if (parseInt(reviewId) > 100) {
    redirect("/products");
  }

  return (
    <div>
      <h1>
        Reviews: {reviewId} and for Products: {productId}
      </h1>
    </div>
  );
}
