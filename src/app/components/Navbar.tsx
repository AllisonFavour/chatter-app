// import "../../app/globals.css";
import Link from "next/link";


export default function Navbar() {
  return (
    <>
      <nav className="w-full py-8 border-b border-b-violet-900">
        <div className="container flex justify-between items-center mx-auto sm:px-6 px-8">
          <Link href="/" className="font-bold text-violet-600 text-2xl">
            Chatter📚
          </Link>

          <div className="hidden">
            <div className="flex justify-between text-white text-sm">
              <Link
                href="/login"
                className="bg-violet-600 rounded hover:bg-violet-400 py-2 px-4"
              >
                Log In
              </Link>

              <Link
                href="/register"
                className="ml-8 bg-violet-600 rounded hover:bg-violet-400 py-2 px-4"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
