import Link from "next/link"

const HomePage = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
      <h1>Home Page !</h1>
      <Link href="/blog">Blog Page</Link>
      <Link href="/products">Products Page</Link>
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
    </div>
  )
}

export default HomePage