import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers)
  // console.log(requestHeaders.get("Authorization"))

  const headerList = await headers()
  console.log(headerList.get("Authorization"))

  const theme = request.cookies.get("theme")
  console.log(theme)

  const cookieStore = await cookies()
  cookieStore.set("resultPerPage", "20")
  console.log(cookieStore.get("resultPerPage"))

  return new Response("<h1>Profile API data</h1>", { 
    headers: {
      "content-type": "text/html",
      "set-Cookies": "theme=dark"
    }
   });
}