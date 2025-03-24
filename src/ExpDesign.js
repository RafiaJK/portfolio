import './App.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './exp.css';

import surfapprentice from './exp_carousel/ApprenticeSite/1.png'
import whyapprentice from './exp_carousel/ApprenticeSite/2.png'
import howapprentice from './exp_carousel/ApprenticeSite/3.png'


function DesignExpCarousel() {

    return (

        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >

            <SwiperSlide>
                <h3>
                    <span> Apprentice | </span> <a href="https://learnwithapprentice.com/" target="_blank">Website</a>
                </h3>
                <h4>
                    Built using Hubspot & Canva.
                </h4>

                <ul>
                    <li> <b>Engaging Visuals</b> Incorporating vibrant infographics, the page conveys digestable information that reflects the platform’s educational and community-driven focus.</li>

                    <li><b>Intuitive Navigation</b> The platform features a straightforward layout with clear calls-to-action, enabling users to easily access desired sections.</li>

                    <li><b>Cohesive Branding</b> The UI maintains a consistent color palette, typography, and playful design elements to effectively capture user attention. </li>
                </ul>

                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <img src={whyapprentice} className="apprenticeSite" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={howapprentice} className="apprenticeSite" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={surfapprentice} className="apprenticeSite" />
                    </SwiperSlide>
                </Swiper>
            </SwiperSlide>


            {/* <SwiperSlide>
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
            </SwiperSlide> */}

        </Swiper>
    )
}

export default DesignExpCarousel;