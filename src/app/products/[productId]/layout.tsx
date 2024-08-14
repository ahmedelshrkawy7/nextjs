export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      <h1 className="text-red-700">this is product id layout </h1>
    </>
  );
}
