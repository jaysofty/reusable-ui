import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {


  const auth = request.cookies.get("auth")?.value;


  const isDashboard =
    request.nextUrl.pathname.startsWith("/dashboard");


  const isLogin =
    request.nextUrl.pathname.startsWith("/login");



  // protect dashboard

  if(isDashboard && !auth){

    return NextResponse.redirect(
      new URL("/login", request.url)
    );

  }



  // prevent logged users going back to login

  if(isLogin && auth){

    return NextResponse.redirect(
      new URL("/dashboard", request.url)
    );

  }



  return NextResponse.next();

}



export const config = {

  matcher:[
    "/dashboard/:path*",
    "/login"
  ]

};