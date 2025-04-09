export default async function Home({ params }) {
  const { locale } = await params;

  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold">
        {locale === "sr"
          ? "Dobrodošli na moj portfolio"
          : "Welcome to my portfolio"}
      </h1>
      <p className="mt-2 text-gray-700">
        {locale === "sr"
          ? "Ovo je početna stranica na srpskom jeziku."
          : "This is the homepage in English."}
      </p>
    </main>
  );
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "sr" }];
}
