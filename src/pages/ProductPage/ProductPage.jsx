import Navbar from "../../components/Navbar/Navbar";
import { FaArrowRight } from "react-icons/fa6";
import TeamImage from '../../assets/team.webp';

function ProductPage() {
  const productAreaHeight = "h-[calc(100vh-70px)]";

  return (
    <div className="w-screen h-screen overflow-auto relative">
      <Navbar />
      <div className={`${productAreaHeight} flex items-stretch justify-center flex-col-reverse md:flex-row`}>
        <div className="flex-none  md:flex-1 flex items-center justify-stretch flex-col px-4">
          <div className="w-full flex-1 md:w-4/5 flex items-start justify-center flex-col">
            <h1 className="text-4xl md:text-6xl ff-poppins font-medium my-4  md:flex-none text-center md:text-left w-full">
              Learn with <span className="gradient-text">Learnyst</span>
            </h1>
            <p className="text-slate-500 text-md text-justify md:text-xl font-medium tracking-wide ff-roboto px-4 md:px-0">
              The Ultimate Platform to enhance your Software Development Skills
              with
              <span className="text-orange-500"> Guided Roadmaps</span> &{" "}
              <span className="text-orange-500">Free Resources</span>.
            </p>
            <div className="mt-6 px-4 md:px-0 md:mt-12">
              <button
                type="button"
                className="flex items-center justify-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl rounded-md px-5 py-2.5 text-center text-lg font-semibold tracking-wide"
              >
                Get Started <FaArrowRight className="ml-3" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-none md:flex-1 flex items-center justify-center">
            <img src={TeamImage} width={500} height={500} alt="homepage" className="w-auto md:w-3/5 h-auto"/>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
