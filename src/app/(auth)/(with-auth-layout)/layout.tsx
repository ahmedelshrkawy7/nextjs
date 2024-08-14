export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h1 className="text-red-700">auth inner layout </h1>
    </>
  );
}
