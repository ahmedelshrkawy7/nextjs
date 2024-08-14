import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>this is home page</h1>
      <Link href="/products" className="btn">
        Blog
      </Link>
      <Link href="/dashboard" className="btn">
        Blog
      </Link>
    </div>
  );
}
