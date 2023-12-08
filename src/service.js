import service from "./service.jpeg";
function Service() {
    return (


        <div className="bg-dark">
            <div className="container-fluid">
                <div className="row text-white text-left">
                    <h4 className="text-center my-4">Services</h4>
                    <div className="col-12 col-md-4 mb-5">
                        <img className="w-100" src={service} alt="service1" />
                        <p className="mt-3">service1</p>
                        <p className="border-bottom"></p>
                        <p>1hr</p>
                        <p>$19.90</p>
                        <button className="btn btn-lg bg-white text-black rounded-0">Book Now</button>
                    </div>

                    <div className="col-12 col-md-4 mb-5 text-left">
                        <img className="w-100" src={service} alt="service2" />
                        <p className="mt-3">service2</p>
                        <p className="border-bottom"></p>
                        <p>1hr</p>
                        <p>$19.90</p>
                        <button className="btn btn-lg bg-white text-black rounded-0">Book Now</button>
                    </div>
                    <div className="col-12 col-md-4 mb-5">
                        <img className="w-100" src={service} alt="service3" />
                        <p className="mt-3">service3</p>
                        <p className="border-bottom"></p>
                        <p>1hr</p>
                        <p>$19.90</p>
                        <button className="btn btn-lg bg-white text-black rounded-0">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;