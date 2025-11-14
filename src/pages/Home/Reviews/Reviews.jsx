import React, { use } from 'react';
import { EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Review from './Review';

const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise);
    console.log(reviews);
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            modules={[EffectCoverflow]}
            className="mySwiper"
        >
            {reviews.map(review => <SwiperSlide key={review.id}>
                <Review review={review}></Review>
            </SwiperSlide>)}
        </Swiper>
    );
};

export default Reviews;