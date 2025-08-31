import Link from "next/link"

const HomePage = () => {
  return (
    <>
      <h1>Home Page !</h1>
      <Link href="/blog">Blog Page</Link>
      <Link href="/products">Products Page</Link>
    </>
  )
}

export default HomePage