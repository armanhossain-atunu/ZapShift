import React, { use } from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise);
    console.log(reviews);
    return (
        <div>
            <div className='text-center'>
                <h3 className="text-3xl text-center">Review</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non soluta, perspiciatis esse eius praesentium similique asperiores quasi veniam repellat architecto repellendus, deserunt accusantium, debitis ipsa. Expedita possimus facilis voluptas deserunt.</p>
            </div>
            <>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review => <SwiperSlide key={review.id}>
                            <ReviewCard review={review}></ReviewCard>
                        </SwiperSlide>)
                    }
                </Swiper>
            </>
        </div>
    );
};

export default Reviews;