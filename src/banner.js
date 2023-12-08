import banner from "./banner.jpeg";
import About from "./about";
import "./style.css";

function Banner() {
  return (
    <div>
      <div className="bandt">
        <img className='banner' src={banner} alt="" />
        <div className="band"></div>


        <div className="bannerbox ">
          <h2 className='bannertext fw-bold' id='text1' >Welcome to HAPPY WELL
            WISHERS</h2><br />
          <p>
            <span className="fonts" id='text2'>Endless Possibilities</span>
            <br /><br />
            <button className=" btn   text-black rounded-5 btn-primary " id='text2'>Book Now</button></p>

        </div>
      </div>
<About/>
    </div>

  )
}
export default Banner;