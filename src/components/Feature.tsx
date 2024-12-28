'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';


// Cricket-themed blogs data
const cricketBlogs = [
  {
    id: 1,
    title: 'The Greatest Moments in Cricket History',
    description:
      'Relive the most iconic moments in cricket, from world cup victories to historic matches.',
    imageUrl: '/records.jpeg',
  },
  {
    id: 2,
    title: 'Top 10 Cricket Players of All Time',
    description:
      'A deep dive into the careers of cricket legends like Sachin Tendulkar and Don Bradman.',
    imageUrl: '/top players.jpeg',
  
  },
  {
    id: 3,
    title: 'How T20 Changed the Face of Cricket',
    description:
      'Explore how T20 cricket revolutionized the game, bringing new excitement to fans worldwide.',
    imageUrl: '/t20.jpeg',
  },
  {
    id: 4,
    title: 'Cricket World Cup: The Most Unforgettable Finals',
    description:
      'Dive into the thrilling finals that have defined cricket’s greatest competition.',
    imageUrl: '/final.jpeg',
  },
];

export default function CricketBlogSlider() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Cricket Blogs
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="swiper-container"
        >
          {cricketBlogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <a href={`/pages/${blog.id}`}>
                  <div className="relative w-full h-64">
                    <Image
                      src={blog.imageUrl}
                      alt={blog.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{blog.description}</p>
                  
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
