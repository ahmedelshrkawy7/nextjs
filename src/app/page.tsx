import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>this is home page</h1>
      <Link href="/products" className="btn">
        products
      </Link>
      <Link href="/dashboard" className="btn">
        dashboard
      </Link>
      <Link href="/blog/one" className="btn">
        Blog one
      </Link>
      <Link href="/blog/two" className="btn">
        Blog two
      </Link>
    </div>
  );
}
