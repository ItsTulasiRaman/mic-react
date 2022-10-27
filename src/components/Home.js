import "./Home.css";
import cardMoviesCode from "./ui/homeCardsCode.jpeg";
import cardMoviesResult from "./ui/homeCardsResult.jpeg";
import homeCardsArrow from "./ui/homeCardsArrow.png";
const Home = () => {
  return (
    <div className="home-background">

      <div className="grid grid-rows-[500px_200px] md:grid-rows-1 md:grid-cols-[1fr_1fr_500px] lg:grid-cols-[1fr_1fr_1fr_700px] md:gap-10 items-center   w-100 h-screen ">

        <div className="flex flex-col h-34 w-145 m-auto  text-center md:text-left md:p-[10%] md:col-span-2 lg:col-span-3">
          <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold ">
            <h1>Together We Learn</h1>
            <h1>Together We Grow</h1>
          </div>
          <p className="py-10">
            Engaging with the student community in innovative ways !
          </p>
          <div className="flex items-center justify-center md:block">
            <button
              onClick={{}}
              className="bg-black w-[140px] text-white rounded-sm p-[10px] "
            >
              About Us
            </button>
          </div>
        </div>

        <div className=" md:flex relative  items-center  ">
          <div className=" max-w-sm md:max-w-none m-[10%] md:w-1/2 md:ml=[20%] md:ml-10 lg:ml-[50px] box-shad ">

            <img
              src={cardMoviesCode}
              alt="Hero cards for home page code "
              className=""
            />
          </div>
          <div className="absolute top-20 right-10 md:top-[10%] md:right-10  lg:right-20 lg:top-[20%]">
            <img
              src={homeCardsArrow}
              alt="Hero cards for home page arrow"
              className="md:w-9/12 lg:w-12/12"
            />
          </div>

          <div className="max-w-sm md:max-w-none absolute w-9/12 md:w-1/2 top-[250px] right-[0px] md:top-40 md:right-40 lg:top-[250px] right-[200px] z-10 w-1/2 ">

            <img src={cardMoviesResult} alt="Hero cards for home page result" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Home;

