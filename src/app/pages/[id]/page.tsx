'use client';

import React from 'react';
import { useParams } from 'next/navigation'; // For accessing dynamic routes
import Image from 'next/image';
import CommentSection from '@/components/CommentSection';
import AuthorCard from '@/components/AuthorCard';

// Blog data (you can replace this with an API or database call)
const blogData = [
  {
    id: 1,
    title: 'The Greatest Moments in Cricket History',
    description:
      'Relive the most iconic moments in cricket, from world cup victories to historic matches.',
    imageUrl: '/records.jpeg',
    content: `Cricket has always been a game of thrill and excitement. 
              Some of the greatest moments include India’s 1983 World Cup victory, 
              England’s incredible 2019 World Cup final, and many more.`,
  },
  {
    id: 2,
    title: 'Top 10 Cricket Players of All Time',
    description:
      'A deep dive into the careers of cricket legends like Sachin Tendulkar and Don Bradman.',
    imageUrl: '/top players.jpeg',
    content: `This blog covers cricket legends such as Don Bradman, Sachin Tendulkar, Muttiah Muralitharan, and others. 
              These players defined the game and created records that still stand unmatched.`,
  },
  {
    id: 3,
    title: 'How T20 Changed the Face of Cricket',
    description:
      'Explore how T20 cricket revolutionized the game, bringing new excitement to fans worldwide.',
    imageUrl: '/t20.jpeg',
    content: `T20 cricket introduced fast-paced matches, incredible innovations, and thrilling finishes. 
              It also gave rise to leagues like the IPL and BBL, attracting a massive global audience.`,
  },
  {
    id: 4,
    title: 'Cricket World Cup: The Most Unforgettable Finals',
    description:
      'Dive into the thrilling finals that have defined cricket’s greatest competition.',
    imageUrl: '/final.jpeg',
    content: `The Cricket World Cup has seen unforgettable finals. 
              From India’s 2011 win to Australia’s dominance and England’s dramatic 2019 victory, every final has a story.`,
  },
];

export default function BlogPost() {
  const params = useParams(); // Access the dynamic route
  const { id } = params;
  const blog = blogData.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold text-red-500">Blog Not Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
      <Image
        src={blog.imageUrl}
        alt={blog.title}
        width={800}
        height={400}
        className="rounded-lg mb-6"
      />
      <p className="text-lg text-gray-700 leading-7">{blog.content}</p>
      <CommentSection postID={blog.id}/>
      <AuthorCard/>
    </div>
  );
}
