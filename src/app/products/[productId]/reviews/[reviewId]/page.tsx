import { redirect } from "next/navigation";

const ReviewId = async ({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) => {
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
};

export default ReviewId;
