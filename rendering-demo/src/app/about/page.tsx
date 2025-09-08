import { cookies } from "next/headers"

const AboutPage = async() => {
  const cookieStore = await cookies()
  const theme = cookieStore.get('theme')
  console.log('theme', theme)
  
  return (
    <div>About page {new Date().toLocaleDateString()}</div>
  )
}

export default AboutPage