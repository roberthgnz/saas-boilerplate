import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const { data } = await supabase.auth.getSession()

  if (!data.session) {
    return NextResponse.redirect(new URL("/login", req.nextUrl).href)
  }

  return res
}

export const config = { matcher: ["/dashboard/:path*"] }
