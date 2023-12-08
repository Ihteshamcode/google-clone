import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <div className="flex height-[100vh] flex-col">
        <HomeHeader />
      </div>
      <main className="flex grow justify-center">
        <div className="w-full mt-40 items-center flex flex-col px-4">
          <img className="w-[172px] md:w-[272px] mb-8" src={Logo} />
          <SearchInput />
          <div className="flex gap-2 text-[#3c4043] mt-8">
            <button
              className="h-9 px-4 text-sm bg-[#f8f9fa] rounded-md border border-[#f8f9fa]
                    hover:border-[#dadce0] hover:shadow-c2"
            >
              Google Search
            </button>
            <button
              className="h-9 px-4 text-sm bg-[#f8f9fa] rounded-md border border-[#f8f9fa]
                    hover:border-[#dadce0] hover:shadow-c2"
            >
              I'm Feeling Lucky
            </button>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default Home;
