import "./Home.css"
import cardMoviesCode from "./ui/homeCardsCode.jpeg"
import cardMoviesResult from "./ui/homeCardsResult.jpeg"
import homeCardsArrow from "./ui/homeCardsArrow.png"
const Home = () => {
    
    return(
    <>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center home-background"> 
  <div className="flex flex-col h-34 w-145  padding text-center md:text-left">
    <div className="text-4xl md:text-6xl font-extrabold">
    <h1>Together We Learn</h1>
    <h1>Together We Grow</h1>
    </div>
    <p className="py-10">Engaging with the student community in innovative ways !</p>
    <div className="flex items-center justify-center md:block">

    <button onClick={{}} className="bg-black w-[140px] text-white rounded-sm p-[10px] ">About Us</button>
    </div>
  </div>
  <div className="flex relative">
  <div className=""><img src={cardMoviesCode}  alt="Hero cards for home page code"/></div>
  <div className=""><img src={homeCardsArrow}  alt="Hero cards for home page arrow"/></div>
  <div className=""><img src={cardMoviesResult}  alt="Hero cards for home page result"/></div>
  </div>
  </div>
    </>
    )
    }

export default Home;