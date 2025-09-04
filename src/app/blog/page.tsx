import { Metadata } from "next"

export const metadata: Metadata = {
  title:{
    absolute: "Blog",
  }
}

const BlogPage = async () => {
  
  await new Promise((resolve) => setTimeout(() => {
    resolve("Intentional delay")
  }, 3000))

  return (
    <div>BlogPage</div>
  )
}

export default BlogPage