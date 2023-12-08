import about from "./about.jpeg";

import "./style.css"

function About() {
  return (

    <div className="container-fluid about-main " id="about-main">
      <div className="  col-sm-7   bg-white " id="about-sub1" >
       <h3  >About</h3>
        <p  >HAPPY WELL WISHERS provides an enriched learning
          environment that has helped countless students get
          ahead. Our unparalleled teaching methods help
          participants prepare for the next step in their career
          and broaden their horizons. Since opening our doors
          in 2000, we’ve worked hard on expanding our
          curriculum to meet the needs of emerging industries.
          Get in touch with us today to ﬁnd out how we can help
          you.</p>

      </div>

      <div class="  col-sm-5 position-absolute    " id="change" >
        <img className="abo-img " src={about} width="100%" height="300px" alt=""></img>
      </div>

    </div>
  );
}

export default About;