import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"

import type { Database } from "@/lib/types/database"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient<Database>({ req, res })

  const { data } = await supabase.auth.getSession()

  if (!data.session) {
    return NextResponse.redirect(new URL("/", req.nextUrl).href)
  }

  return res
}

export const config = { matcher: ["/manage/:path*"] }
