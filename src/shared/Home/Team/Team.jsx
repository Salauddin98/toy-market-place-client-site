// // import member1 from "../../../assets/images/team/1.jpg";
// // import member2 from "../../../assets/images/team/2.jpg";
// // import member3 from "../../../assets/images/team/3.jpg";
// // import social from "../../../assets/images/team/Group 9969.png";
// import team1 from "../../../image/team1.jpg";
// import team2 from "../../../image/team2.jpg";
// import team3 from "../../../image/3.jpg";
// import team4 from "../../../image/2.jpg";
// import social from "../../../image/social.png";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
// import "swiper/swiper-bundle.min.css";

// // Import Swiper styles
// import "swiper/css";
// const Team = () => {
//   return (
//     <section className="mt-20 mb-20">
//       <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold py-8">
//         OUR TEAM
//         <hr className="w-28 mt-2 border-[3px] mx-auto border-orange-500" />
//       </h1>
//       <div
//         className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8 grid grid-cols-1"
//         data-aos="zoom-in"
//       >
//         <div className="mt-0">
//           <Swiper
//             modules={[Navigation]}
//             spaceBetween={30}
//             slidesPerView={3}
//             navigation
//             // pagination={{ clickable: true }}
//             // scrollbar={{ draggable: true }}
//             //   onSlideChange={() => console.log("slide change")}
//             //   onSwiper={(swiper) => console.log(swiper)}
//           >
//             <SwiperSlide>
//               <div className="card w-full bg-base-100 shadow-xl">
//                 <figure className="px-10 pt-10">
//                   <img src={team1} alt="Shoes" className="rounded-xl" />
//                 </figure>
//                 <div className="card-body items-center text-center">
//                   <p className="font-bold text-gray-600">Our Working Team</p>
//                   <div className="card-actions">
//                     <img src={social} alt="" />
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="card w-full bg-base-100 shadow-xl">
//                 <figure className="px-10 pt-10">
//                   <img src={team2} alt="Shoes" className="rounded-xl" />
//                 </figure>
//                 <div className="card-body items-center text-center">
//                   <p className="font-bold text-gray-600">Managing Director</p>
//                   <div className="card-actions">
//                     <img src={social} alt="" />
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="card w-full bg-base-100 shadow-xl">
//                 <figure className="px-10 pt-10">
//                   <img src={team3} alt="Shoes" className="rounded-xl" />
//                 </figure>
//                 <div className="card-body items-center text-center">
//                   <p className="font-bold text-gray-600">Engineer Expert</p>
//                   <div className="card-actions">
//                     <img src={social} alt="" />
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="card w-full bg-base-100 shadow-xl">
//                 <figure className="px-10 pt-10">
//                   <img src={team4} alt="Shoes" className="rounded-xl" />
//                 </figure>
//                 <div className="card-body items-center text-center">
//                   <p className="font-bold text-gray-600">Toys Making Expert</p>
//                   <div className="card-actions">
//                     <img src={social} alt="" />
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="card w-full bg-base-100 shadow-xl">
//                 <figure className="px-10 pt-10">
//                   <img src={team1} alt="Shoes" className="rounded-xl" />
//                 </figure>
//                 <div className="card-body items-center text-center">
//                   <p className="font-bold text-gray-600">
//                     Our Toys Making Team
//                   </p>
//                   <div className="card-actions">
//                     <img src={social} alt="" />
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation } from "swiper";

// import slide_image_1 from "./assets/images/img_1.jpg";
// import slide_image_2 from "./assets/images/img_2.jpg";
// import slide_image_3 from "./assets/images/img_3.jpg";
// import slide_image_4 from "./assets/images/img_4.jpg";
// import slide_image_5 from "./assets/images/img_5.jpg";
// import slide_image_6 from "./assets/images/img_6.jpg";
// import slide_image_7 from "./assets/images/img_7.jpg";
import team1 from "../../../image/team1.jpg";
import team2 from "../../../image/team2.jpg";
import team3 from "../../../image/1.jpg";
import team4 from "../../../image/2.jpg";
import team5 from "../../../image/3.jpg";
import team6 from "../../../image/2.jpg";

import "./Team.css";

function Team() {
  return (
    <section className="bg-[url('image/pattern-home.jpg')] bg-no-repeat mt-16 -mb-20  md:-mb-80 ">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold py-8">
        OUT TEAM
        <hr className="w-20 mt-2 border-[3px] mx-auto border-orange-500" />
      </h1>
      <div
        className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8"
        data-aos="zoom-in"
      >
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={team1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={team2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={team3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={team4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={team5} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={team6} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={team3} alt="slide_image" />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default Team;
