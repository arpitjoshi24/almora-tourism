import Link from "next/link";

type Props = {
  title: string;
};

export default function Breadcrumb({
  title,
}: Props) {
  return (
    <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">

      <Link href="/">
        Home
      </Link>

      <span>/</span>

      <Link href="/places">
        Places
      </Link>

      <span>/</span>

      <span className="text-black">
        {title}
      </span>

    </div>
  );
}