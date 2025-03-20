import './App.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './exp.css';


function DesignExpCarousel() {

    return (

        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >



            <SwiperSlide>
                <h3>
                    <span> Apprentice | </span> <a href="https://learnwithapprentice.com/" target="_blank">Homepage</a>
                </h3>
                <h4>
                    Canva, Hubspot
                </h4>
                <ul>
                    <li>more.</li>
                    <li>more.</li>
                </ul>
            </SwiperSlide>


            <SwiperSlide>
                <h3>
                    <span> Apprentice | </span> <a href=" " target="_blank">Pro Landing Pages</a>
                </h3>
                <h4>
                    Canva, Hubspot, Firebase
                </h4>
                <ul>
                    <li>more.</li>
                    <li>more.</li>
                </ul>
            </SwiperSlide>


            <SwiperSlide>
                <h3>
                    <span> Apprentice | </span> <a href="https://app.learnwithapprentice.com/" target="_blank">App Onboarding</a>
                </h3>
                <h4>
                    Flutterflow, Figma
                </h4>
                <ul>
                    <li>more.</li>
                    <li>more.</li>
                </ul>
            </SwiperSlide>

            {/* <SwiperSlide>
                slide 4
            </SwiperSlide> */}

        </Swiper>
    )
}

export default DesignExpCarousel;