import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination,Autoplay,EffectCoverflow} from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";

import {SliderImages} from '../../assets/images/images.jsx';
function Slider({className})
{    
   
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay,EffectCoverflow]}
            effect='coverflow'
            grabCursor={true}
            centeredSlides={true}   
            spaceBetween={50}
            slidesPerView={1.5}
            coverflowEffect=
            {{
              rotate: 20, 
              stretch: 0, 
              depth: 150, 
              modifier: 1.5, 
              slideShadows: true
            }}
            loop={true} 
            pagination={{clickable: true, dynamicBullets: true}}
            autoplay={{delay: 3000, disableOnInteraction: false}}
            className=" w-full min-h-[50vh] "
        >
                {
                    SliderImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img  src={image.src} alt={image.alt} className=" w-350 min-h-[54vh]" />
                        </SwiperSlide>
                    ))
                }
        </Swiper>
    )

}   
export default Slider