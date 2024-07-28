import React from 'react';
import { Container } from 'react-bootstrap';
import PrimaryButtonLink from '../../../components/buttons/ButtonsLink';
import './banner.scss';
import BannerImg from '../../../assets/img/banner-img.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Banner() {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className='banner'>
      <Container>
      <Slider {...settings}>
      <div className="banner-container d-flex flex-col md:flex-row md:justify-between">
            <div className="banner-content h-fit">
                <h1 className='text-white'>Our Brand Is Launching soon, Within 5 Months</h1>
                <h6 className='text-white'>For More Information, Please Register</h6>
                <div className="buttons d-flex flex-wrap gap-3">
                    <PrimaryButtonLink buttonText='Our Brand Partners' />
                    <PrimaryButtonLink buttonText='About Us' />
                </div>
            </div>
            <div className="banner-img d-none d-md-block">
                <img src={BannerImg} alt="banner-img" className='w-full' />
            </div>
        </div>
        <div className="banner-container d-flex flex-col md:flex-row md:justify-between">
            <div className="banner-content h-fit">
                <h1 className='text-white'>Our Brand Is Launching soon, Within 5 Months</h1>
                <h6 className='text-white'>For More Information, Please Register</h6>
                <div className="buttons d-flex flex-wrap gap-3">
                    <PrimaryButtonLink buttonText='Our Brand Partners' />
                    <PrimaryButtonLink buttonText='About Us' />
                </div>
            </div>
            <div className="banner-img d-none d-md-block">
                <img src={BannerImg} alt="banner-img" className='w-full' />
            </div>
        </div>
        <div className="banner-container d-flex flex-col md:flex-row md:justify-between">
            <div className="banner-content h-fit">
                <h1 className='text-white'>Our Brand Is Launching soon, Within 5 Months</h1>
                <h6 className='text-white'>For More Information, Please Register</h6>
                <div className="buttons d-flex flex-wrap gap-3">
                    <PrimaryButtonLink buttonText='Our Brand Partners' />
                    <PrimaryButtonLink buttonText='About Us' />
                </div>
            </div>
            <div className="banner-img d-none d-md-block">
                <img src={BannerImg} alt="banner-img" className='w-full' />
            </div>
        </div>
        <div className="banner-container d-flex flex-col md:flex-row md:justify-between">
            <div className="banner-content h-fit">
                <h1 className='text-white'>Our Brand Is Launching soon, Within 5 Months</h1>
                <h6 className='text-white'>For More Information, Please Register</h6>
                <div className="buttons d-flex flex-wrap gap-3">
                    <PrimaryButtonLink buttonText='Our Brand Partners' />
                    <PrimaryButtonLink buttonText='About Us' />
                </div>
            </div>
            <div className="banner-img d-none d-md-block">
                <img src={BannerImg} alt="banner-img" className='w-full' />
            </div>
        </div>
    </Slider>
        
      </Container>
    </div>
  )
}

export default Banner
