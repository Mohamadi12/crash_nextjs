import Link from "next/link";

const NewsArticle = async ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang: "en" | "es" | "fr" }>;
}) => {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h1>News articles {articleId}</h1>
      <p>Reading in {lang}</p>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
};

export default NewsArticle;
