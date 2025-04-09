import { NextResponse } from "next/server";

const supportedLocales = ["sr", "en"];
const defaultLocale = "en";

export function middleware(req) {
  const { nextUrl, geo } = req;

  if (supportedLocales.some((loc) => nextUrl.pathname.startsWith(`/${loc}`))) {
    return NextResponse.next();
  }

  const langCookie = req.cookies.get("locale")?.value;
  if (langCookie && supportedLocales.includes(langCookie)) {
    const url = nextUrl.clone();
    url.pathname = `/${langCookie}${nextUrl.pathname}`;
    return NextResponse.redirect(url);
  }

  const country = geo?.country || "";
  if (country === "RS") {
    const url = nextUrl.clone();
    url.pathname = `/sr${nextUrl.pathname}`;
    return NextResponse.redirect(url);
  }

  const acceptLangHeader = req.headers.get("accept-language");
  if (acceptLangHeader) {
    const preferredLang = acceptLangHeader.split(",")[0].split("-")[0];
    if (supportedLocales.includes(preferredLang)) {
      const url = nextUrl.clone();
      url.pathname = `/${preferredLang}${nextUrl.pathname}`;
      return NextResponse.redirect(url);
    }
  }

  const url = nextUrl.clone();
  url.pathname = `/${defaultLocale}${nextUrl.pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico|.*\\..*).*)"],
};
