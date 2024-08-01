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
        <div className="container my-20 px-6 lg:mx-10 flex justify-between items-center gap-20 flex-col sm:flex-row sm:items-center sm:justify-center">
          <div className="w-full">
            <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl mb-10 text-black">
              Connect, Engage, and Grow with Chatter
            </h1>
            <p className="text-black">
              Chatter is the ultimate blogging platform that empowers you to
              share your thoughts, connect with like-minded individuals, and
              grow your online presence.
            </p>
            <div className="my-10">
              <button className="bg-violet-600 text-white py-2 px-4 rounded-md">
                Become a member
              </button>
              <span className="mx-6 text-violet-600 font-bold text-2xl">
                OR
              </span>
              <button className="bg-violet-600 text-white py-2 px-4 rounded-md">
                Log In
              </button>
            </div>
          </div>

          <div className="w-full mx-auto">
            <Image src={journal_man} alt="journaling man illustration" />
          </div>
        </div>
      </main>

      <section>
        <div className="grid grid-cols-1 gap-4 gap-y-10 md:grid-cols-3 py-40 bg-black text-white">
          <div className="text-center max-w-md mx-auto px-6">
            <h3 className="text-3xl font-semibold mb-4">Powerful Blogging</h3>
            <p>
              Chatter provides a seamless blogging experience with intuitive
              tools to help you create and publish engaging content.
            </p>
          </div>

          <div className="text-center max-w-md mx-auto px-6">
            <h3 className="text-3xl font-semibold mb-4">Community Building</h3>
            <p>
              Build a loyal following and foster meaningful connections with
              your readers through Chatter&lsquo;s powerful community features.
            </p>
          </div>

          <div className="text-center max-w-md mx-auto px-6">
            <h3 className="text-3xl font-semibold mb-4">Insightful Analytics</h3>
            <p>
              Gain valuable insights into your content performance and audience
              engagement with Chatter&lsquo;s comprehensive analytics tools.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
