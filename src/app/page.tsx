import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import journal_man from "../../public/assets/journal-man.png";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container my-20 mx-6 lg:mx-10 flex justify-between items-center flex-col sm:flex-row">
          <div className="w-full">
            <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl mb-10">
              Connect, Engage, and Grow with Chatter
            </h1>
            <p className="">
              Chatter is the ultimate blogging platform that empowers you to
              share your thoughts, connect with like-minded individuals, and
              grow your online presence.
            </p>
            <div className="my-10">
              <button className="bg-violet-600 text-white py-2 px-4">
                Become a member
              </button>
              <span className="mx-4">OR</span>
              <button className="bg-violet-600 text-white py-2 px-4">
                Log In
              </button>
            </div>
          </div>

          <div className="">
            <Image
              src={journal_man}
              alt="journaling man illustration"
              width={500}
            />
          </div>
        </div>
      </main>
      <section></section>
      <Footer />
    </>
  );
}
