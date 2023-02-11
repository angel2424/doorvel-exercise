import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <Link href={"/"}>
        <Image src={"/logo.png"} alt="Doorvel Logo" fill />
      </Link>
    </div>
  );
}
