import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ImgCar from "../../assets/img_car.png"


const Banner = () => {

  return (
    <div className="container mt-md-5">
      <div className="row">
        <div className="col-sm-6 mt-5">
          <h2 className="my-5">
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </h2>
          <p className="subtitle mb-4 text-lg-wrap">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <a href="/carimobil" className="text-reset text-decoration-none">
            <button className="btn btn-success">Mulai Sewa Mobil</button>
          </a>
        </div>
        <div className="col-lg-6 mt-lg-5">
          <img className="img-fluid" src={ImgCar} alt="Car" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
