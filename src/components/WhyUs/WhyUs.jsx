import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Icon1 from "../../assets/icon-whyus-1.png";
import Icon2 from "../../assets/icon-whyus-2.png";
import Icon3 from "../../assets/icon-whyus-3.png";
import Icon4 from "../../assets/icon-whyus-4.png";

const WhyUs = () => {
    return (
        <div id="WhyUs" className="container">
            <div className="title m-auto pt-5 text-center">
                <h4 className="fw-bolder">Why Us?</h4>
                <h6 className="fw-semibold">Mengapa harus pilih Binar Car Rental?</h6>
            </div>


            <div className="row pt-3">
                <div className="col-md-3 mb-3 rounded">
                    <div className="card">
                        <div className="card-body">
                            <img className="card-img-top w-25 p-3" src={Icon1} alt="" />
                            <h5 className="card-title">Mobil Lengkap</h5>
                            <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3 rounded">
                    <div className="card">
                        <div className="card-body">
                            <img className="card-img-top w-25 p-3" src={Icon2} alt="" />
                            <h5 className="card-title">Harga Murah</h5>
                            <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3 rounded">
                    <div className="card">
                        <div className="card-body">
                            <img className="card-img-top w-25 p-3" src={Icon3} alt="" />
                            <h5 className="card-title">Layanan 24 Jam</h5>
                            <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3 rounded">
                    <div className="card">
                        <div className="card-body">
                            <img className="card-img-top w-25 p-3" src={Icon4} alt="" />
                            <h5 className="card-title">Sopir Profesional</h5>
                            <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default WhyUs;
