import './App.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './exp.css'

import indian_cooking from './past_work/indian_cooking.mp4'
import classical_dance from './past_work/classical_dance.mp4'
import sitar from './past_work/sitar.mp4'
import countdown from './past_work/countdown.png'
import champagne from './past_work/champagne.mp4'
import winner from './past_work/winnerimg.png'

function MktgExpCarousel() {

    const demoStyle = {
        position: 'relative',
        paddingBottom: '30%',
        height: 0,
    }

    const demoFullSize = {
        position: 'absolute',
        width: '100%',
        height: '100%',
    }

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
                    <span>Indian Arts | </span> <a href="https://learnwithapprentice.com/" target="_blank">Apprentice</a>
                </h3>
                <h4>
                    Paid campaign to bring in new learners and teachers in traditional Indian music & dance.
                </h4>

                <ul>
                    <li>Designed Meta ads along with tailored landing pages, aligning promotions with Hindu holidays.</li>
                </ul>

                <div class="videoSpread">
                    <video controls>
                        <source src=
                            {indian_cooking}
                            type="video/mp4" />
                        Indian Cooking
                    </video>

                    <video controls>
                        <source src=
                            {sitar}
                            type="video/mp4" />
                        Sitar
                    </video>

                    <video controls>
                        <source src=
                            {classical_dance}
                            type="video/mp4" />
                        Classical Dance
                    </video>
                </div>


            </SwiperSlide>


            <SwiperSlide>
                <h3>
                    <span>Prize Delivery Promotion | </span> <a href="https://www.instagram.com/pchofficial" target="_blank">PCH Instagram</a>
                </h3>

                <h4>
                    Organic social event promotion and coverage on the road as the Prize Patrol located and awarded giveaway winners.
                </h4>
                <ul>
                    <li>Led real-time social coverage, including day-of clues, on-the-road updates, and engaging storytelling around winner announcements.</li>
                </ul>

                <img src={countdown} className="countdownpch" />
                <img src={winner} className='winnerpch' />
            </SwiperSlide>

            <SwiperSlide>
                <h3>
                    <span>PCH: The Giveback | </span> <a href="https://youtube.com/playlist?list=PLuZuPJ2cOxw0CbZFPl4HThhi-NzTHDClX&si=Hy1ut6NDz825Ynrk" target="_blank">YouTube Playlist</a>
                </h3>
                <h4>
                    Annual fundraiser with St Jude Children's Research Hospital to raise awareness and funds in the fight against childhood cancer.
                </h4>
                <ul>
                    <li>Collaborated with St. Jude’s brand team, video talent, copywriters, designers, and legal to execute campaigns, including promoting a virtual walk/run fundraiser.</li>
                </ul>

                <div style={demoStyle} className="demo-video">  <iframe src="https://www.youtube.com/embed/CLZB_09VvRQ?si=7pPvvtsH_I07UtHq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={demoFullSize}></iframe></div>
                {/* <iframe src="https://www.youtube.com/embed/zsgjDhWO0fk?si=lup9hPWE50Ud6gx8" className="giveback" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            </SwiperSlide>




            {/* <SwiperSlide>
                slide 4
            </SwiperSlide> */}


        </Swiper>
    )
}

export default MktgExpCarousel;