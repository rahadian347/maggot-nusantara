import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

class Brand extends Component {

    render() {

        return (
        <section className="brand__area pb-110">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="brand__content text-center">
                        <h3 className="brand__title">Trusted by 100 world's best companies</h3>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="brand__slider swiper-container">
                        <div className="swiper-wrapper text-center">
                        <Swiper
                            // install Swiper modules
                            spaceBetween={30}
                            slidesPerView={2}
                            autoplaydisableoninteraction={"false"}
                            loop={true}
                            breakpoints={{
                                // when window width is >= 576px
                                450: {
                                    slidesPerView: 3
                                },
                                // when window width is >= 768px
                                768: {
                                    slidesPerView: 4
                                },
                                1200: {
                                    // when window width is >= 992px
                                    slidesPerView: 6,
                                }
                            }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            >
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="brand__item">
                                        <img src="assets/img/brand/brand-1.png" alt="img not found"/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="brand__item">
                                        <img src="assets/img/brand/brand-2.png" alt="img not found"/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="brand__item">
                                        <img src="assets/img/brand/brand-3.png" alt="img not found"/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="brand__item">
                                        <img src="assets/img/brand/brand-4.png" alt="img not found"/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="brand__item">
                                        <img src="assets/img/brand/brand-5.png" alt="img not found"/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="brand__item">
                                        <img src="assets/img/brand/brand-6.png" alt="img not found"/>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        </div>
                      </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="brand__more text-center">
                        <Link href="/about"><a className="link-btn">
                            View all partners
                            <i><FontAwesomeIcon icon={['fas', 'arrow-right']} /></i>
                            <i><FontAwesomeIcon icon={['fas', 'arrow-right']} /></i>
                        </a></Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
        );
    }
}

export default Brand;