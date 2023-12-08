import "./style.css"

function Footer(){
return (

    <footer className="container-fluid p-5" id="footer">
    <div className="container text-dark">
      <div className="row ">
        <div className="col-12 mb-3  col-md-4">
          <h3 className="mb-2">Contact</h3>
          <p className="hei">HAPPY WELL WISHERS<br />
            500 Terry Francois street<br />
            San Francisco, CA 94518
          </p>
        </div>
        <div className="col-12 mb-3 col-md-4">
          <p className="hei" >Tel 123-456-7890<br />
            Email info@mysite.com <br />
            Book a Consultation <br />
          </p>
          {/* <img className="me-4" src={fb} alt="Facebook" width="14px" />
          <img className="me-4" src={insta}alt="Instagram" width="20px" />
          <img src={yu} alt="Youtube" width="30px" /> */}
        </div>
        <div className="col-12 mb-3 col-md-4">
          <p className="fs-5">Subscribe to my Newsletter</p>
          <input className="w-75 p-1 mb-2" type="email" name="email" placeholder="Enter Your email here*" />
          <button style={{ width: '85px' }} className="p-1 bg-dark rounded-0 text-white">Join</button>
        </div>
      </div>
    </div>
  </footer>
 

);
}
export default Footer;