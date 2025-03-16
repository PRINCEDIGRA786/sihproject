import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay } from 'swiper/modules';

const ImageSwiper = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      direction="horizontal"
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="w-full  h-4/5 rounded-2xl shadow-lg shadow-pink-300"
    >
      <SwiperSlide className="relative">
      <img src="https://imgk.timesnownews.com/story/PM_Modi_to_address_school_students_ahead_of_board_exams.jpg" alt="Slide 1" className="object-conver w-full h-96" />
       
      
         <p className="absolute inset-0 flex items-center justify-center text-center text-white text-2xl font-semibold bg-black bg-opacity-50 p-4">
          "Education is the most powerful weapon which you can use to change the world." — Nelson Mandela
        </p>
      </SwiperSlide>

      <SwiperSlide className="relative">
        <img src="https://images.shiksha.com/mediadata/images/articles/1607009615phpYWQbkW.jpeg"alt="Slide 1" className="object-conver w-full h-96" />
        <p className="absolute inset-0 flex items-center justify-center text-center text-white text-2xl font-semibold bg-black bg-opacity-50 p-4">
          "The roots of education are bitter, but the fruit is sweet." — Aristotle
        </p>
      </SwiperSlide>

      <SwiperSlide className="relative">
      <img src="https://feeds.abplive.com/onecms/images/uploaded-images/2023/12/24/eae63509f9ed42d60c52ad76c36b660b170344227237825_original.jpg?impolicy=abp_cdn&imwidth=252"alt="Slide 1" className="object-conver w-full h-96" />
       
       <p className="absolute inset-0 flex items-center justify-center text-center text-white text-2xl font-semibold bg-black bg-opacity-50 p-4">
          "An investment in knowledge pays the best interest." — Benjamin Franklin
        </p>
      </SwiperSlide>

      <SwiperSlide className="relative">
        <img src="https://cache.careers360.mobi/media/article_images/2023/2/10/budget-2023-pre-post-matric-scholarship-manf-minorities-nirmala_Ji6PmLq.jpg" alt="Slide 4" className="object-cover w-full h-96" />
        <p className="absolute inset-0 flex items-center justify-center text-center text-white text-2xl font-semibold bg-black bg-opacity-50 p-4">
          "The future belongs to those who believe in the beauty of their dreams." — Eleanor Roosevelt
        </p>
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSwiper;