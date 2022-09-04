import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "../../assets/img_service.png";
import Cek from "../../assets/cek.png"



const OurServices = () => {
    return (
        <div id="OurServices" className="container d-flex mt-md-5">

            <div className="row align-items-center">
                <div className="col-md-6 mt-md-5">
                    <img className="img-fluid" src={Image1} alt="img-service"></img>
                </div>


                <div className="col-lg-6 justify-content-center mt-5">

                    <h3 className='p-auto'>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
                    <h6 className="pt-3">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</h6>

                    <ul type="none" className='pt-3 ps-0'>
                        <li className="pt-3">
                            <p><img className="img-fluid" src={Cek} alt="cek" /> Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                        </li>
                        <li className="pt-3">
                            <p><img className="img-fluid" src={Cek} alt="cek" /> Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                        </li>
                        <li className="pt-3">
                            <p><img className="img-fluid" src={Cek} alt="cek" /> Sewa Mobil Jangka Panjang Bulanan</p>
                        </li>
                        <li className="pt-3">
                            <p><img className="img-fluid" src={Cek} alt="cek" /> Gratis Antar - Jemput Mobil di Bandara</p>
                        </li>
                        <li className="pt-3">
                            <p><img className="img-fluid" src={Cek} alt="cek" /> Layanan Airport Transfer / Drop In Out</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
};


export default OurServices;