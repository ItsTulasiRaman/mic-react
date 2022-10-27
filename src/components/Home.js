import "./Home.css"
import cardMoviesCode from "./ui/homeCardsCode.jpeg"
import cardMoviesResult from "./ui/homeCardsResult.jpeg"
import homeCardsArrow from "./ui/homeCardsArrow.png"
const Home = () => {
    
    return(
    <>
<div className="home-background">
  <div className="flex flex-col h-34 w-145 pt-[150px] pl-[145px] ">
    <div className="text-6xl font-extrabold ">
    <h1>
        Together We Learn
    </h1>
    <h1>
        Together We Grow
    </h1>
    </div>
    <p className="py-10">Engaging with the student community in innovative ways !</p>
    <button onClick={{}} className="bg-black w-[140px] text-white rounded-sm p-[10px]">About Us</button>
  </div>
  <div className="fade-in-1 absolute w-[401px] h-[439px] left-[898px] top-[238px]"><img src={cardMoviesCode}  alt="Hero cards for home page code"/></div>
  <div className="fade-in-1 absolute w-[81.17px] h-[184px] left-[1321.01px] top-[389px] rotate-1"><img src={homeCardsArrow}  alt="Hero cards for home page arrow"/></div>
  <div className="fade-in-2 absolute w-[361px] h-[280px] left-[1001px] top-[531px]"><img src={cardMoviesResult}  alt="Hero cards for home page result"/></div>
    </div>
    </>
    )
    }

export default Home;