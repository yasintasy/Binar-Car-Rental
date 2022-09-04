import React from "react";
import Banner from "../Banner/Banner"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "bootstrap/dist/css/bootstrap.min.css";


const SearchBar = ({ filterData, handleSubmit, setFilterData }) => {

  return (
    <>
      <Navbar />
      <Banner />
      <div className='container position-relative pt-4'>
        <div className='carSearch card position-absolute top-0 start-50 translate-middle p-3'>
          <div className='row align-items-end'>
            <div className='col'>
              <label className='form-label'>Nama Mobil</label>
              <input className='form-control' type='text' id='nama-mobil' placeholder='Ketik nama/tipe mobil' onChange={(e) => { setFilterData({ carName: e.target.value }) }} />
            </div>
            <div className='col'>
              <label for='exampleDataList' class='form-label'>
                Kategori
              </label>
              <div className='input-group '>
                <select className='form-select' id='kategori' onChange={(e) => { setFilterData({ ...filterData, carCategory: e.target.value }) }}>
                  <option selected>Masukan Kapasitas Mobil</option>
                  <option value='1'>2 - 4 orang</option>
                  <option value='2'>4 - 6 orang</option>
                  <option value='2'>6 - 8 orang</option>
                </select>
              </div>
            </div>
            <div className='col'>
              <label for='exampleDataList' class='form-label'>
                Harga
              </label>
              <div className='input-group'>
                <select className='form-select' id='harga-mobil' onChange={(e) => { setFilterData({ ...filterData, carPrice: e.target.value }) }}>
                  <option>Masukkan harga sewa per hari</option>
                  <option value='< Rp.400.000'> &lt; Rp. 400.000</option>
                  <option value='Rp.400.000-Rp.600.000'>Rp 400.000 - Rp 600.000</option>
                  <option value='> Rp.600.000'>&gt; Rp 600.000</option>
                </select>
              </div>
            </div>
            <div className='col'>
              <label for='exampleDataList' class='form-label'>
                Status
              </label>
              <div className='input-group'>
                <select className='form-select' id='status'>
                  <option selected>Pilih</option>
                  <option value='1'>Tersedia</option>
                  <option value='2'>Disewa</option>
                </select>
              </div>
            </div>
            <div className='col'>
              <button onClick={handleSubmit} className='btn btn-success w-100' type='button'>
                Cari Mobil
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchBar;
