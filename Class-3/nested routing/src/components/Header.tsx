import Link from "next/link";

export default function Header() {
  return (
    <header className="text-gray-600 body-font bg-blue-400">
   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
   
      <ul className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto ">
        <li>
          <Link href="/" className="mr-5 hover:text-black">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="mr-5 hover:text-black">
            About
          </Link>
        </li>
        <li>
          <Link href="/career" className="mr-5 hover:text-black">
            Career
          </Link>
        </li>
        <li>
          <Link href="/contact-us" className="hover:text-black">
            Contact Us
          </Link>
        </li>
     
      </ul>
      </div>
    </header>
  );
}
