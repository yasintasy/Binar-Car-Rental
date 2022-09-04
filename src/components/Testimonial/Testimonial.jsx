import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ImgTesti1 from "../../assets/img-testi-1.png";
import ImgTesti2 from "../../assets/img-testi-2.png";
import Rating from "../../assets/Rate.png"
import "./Testimonial.css";

const Testimonial = () => {
    return (
        <div id="Testimonial">
            <div className="pt-5 text-center">
                <p className="fs-4 fw-bolder">Testimonial</p>
                <p className="fs-6 fw-semibold">Berbagai review positif dari para pelanggan kami</p>
            </div>

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="container carousel-inner m-5 p-5">
                    <div className="carousel-item active border border-dark rounded">
                        <div className="row justify-content-center pt-2">
                            <div className="col-2">
                                <img src={ImgTesti1} className="d-block w-40" alt="..." />
                            </div>
                            <div className="col-8">
                                <img src={Rating} className="d-block w-20" alt="rating" />
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item border border-dark rounded">
                        <div className="row justify-content-center pt-2">
                            <div className="col-2">
                                <img src={ImgTesti2} className="d-block w-40" alt="..." />
                            </div>
                            <div className="col-8">
                                <img src={Rating} class="d-block w-20" alt="rating" />
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item border border-dark rounded">
                        <div className="row justify-content-center pt-2">
                            <div className="col-2">
                                <img src={ImgTesti1} className="d-block w-40" alt="..." />
                            </div>
                            <div className="col-8">
                                <img src={Rating} className="d-block w-20" alt="rating" />
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item border border-dark rounded">
                        <div className="row justify-content-center pt-2">
                            <div className="col-2">
                                <img src={ImgTesti2} className="d-block w-40" alt="..." />
                            </div>
                            <div className="col-8">
                                <img src={Rating} class="d-block w-20" alt="rating" />
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-control">
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden"></span>
                    </button>
                    <button class="carousel-control-next btn" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden"></span>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Testimonial;
