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
                    Campaign to bring in new learners and teachers in traditional Indian music & dance.
                </h4>

                <ul>
                    <li>Designed Meta ads featuring traditional instruments, dance, and cooking, along with a tailored landing page for audience engagement.</li>
                    <li>Launched aligning promotions with Hindu holidays for cultural relevance.</li>
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
                    <span>Prize Delivery Promotion | </span> <a href="hhttps://www.pch.com/" target="_blank">PCH</a>
                </h3>

                <h4>
                    Event promotion and coverage on the road as the Prize Patrol located and awarded giveaway winners.
                </h4>
                <ul>
                    <li>Led real-time social coverage, including day-of clues, on-the-road updates, and engaging storytelling around winner announcements.</li>
                    <li>Created video and graphic promos, countdowns, and interactive content to build excitement leading up to prize deliveries.</li>
                </ul>



                <img src={countdown} className="countdownpch" />

                {/* <video controls>
                        <source src=
                            {champagne}
                            type="video/mp4" />
                        Delivery Day
                    </video> */}
                <img src={winner} className='winnerpch' />




            </SwiperSlide>

            {/* <SwiperSlide>
                <h3>
                    <span>PCH & St. Jude Children's Research Hospital | </span> <a href="https://youtube.com/playlist?list=PLuZuPJ2cOxw0CbZFPl4HThhi-NzTHDClX&si=Hy1ut6NDz825Ynrk" target="_blank">The Giveback</a>
                </h3>
                <h4>
                    Annual fundraiser to raise awareness and funds in the fight against childhood cancer.
                </h4>
                <ul>
                    <li>Managed social media output for Publishers Clearing House’s partnership with St. Jude Children's Research Hospital, driving engagement and awareness for donations.</li>
                    <li>Collaborated with St. Jude’s brand team, video talent, copywriters, designers, and legal to execute campaigns, including promoting a virtual walk/run fundraiser.</li>
                </ul>
            </SwiperSlide> */}





            {/* <SwiperSlide>
                slide 4
            </SwiperSlide> */}


        </Swiper>
    )
}

export default MktgExpCarousel;