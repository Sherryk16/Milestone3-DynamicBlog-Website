'use client';

import React from 'react';
import Image from 'next/image';
import CommentSection from '@/components/CommentSection';
import AuthorCard from '@/components/AuthorCard';

// Mock data for demonstration (replace this with your actual data source)
const postsData=[
  {
    id:1,
   title: 'First Blog',
   description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.India’s dominance throughout the series has been undeniable, with their players displaying remarkable skill and determination on the field. Despite missing some of their top players, the young talents of the Indian team rose to the occasion, seizing the opportunity to showcase their abilities. Led by Rohit Sharma, who demonstrated exemplary leadership, India’s performance was nothing short of magnificent.On the other hand, England’s Bazball, characterized by its aggressive and attacking approach, has come under scrutiny following their defeat.Many cricket enthusiasts have questioned the exciting style of play that England adopted not too long ago, while others believe that it’s too soon to write the obituary for Bazball.While the series loss will undoubtedly put pressure on the English test side, as well as their captain and coach, it remains to be seen whether they will make any alterations to their approach or continue to believe in the effectiveness of their positive mindset.One undeniable aspect of Bazball is its ability to draw spectators back into the stadium and reignite interest in Test cricket. The fast-paced nature of the matches, coupled with the thrilling displays of skill and innovation, has captivated audiences worldwide.Furthermore, the fact that none of the matches went into the fifth day is a testament to the pace at which the game is played these days.As the cricketing world reflects on the outcome of the India-England series, one thing is clear: While India celebrates their victory and looks ahead to future challenges, England must evaluate the effectiveness of Bazball in achieving desired results.Regardless of the outcome, one thing is certain – the sport of cricket continues to evolve, and the excitement and anticipation surrounding each match remain as strong as ever.',
   imageUrl: '/blog1.png',
   author: 'John Doe',
   date: '2022-01-01',
   comments: 100
  },
  {
    id:2,
   title: 'First Blog',
   imageUrl: '/blog1.png',
   description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.India’s dominance throughout the series has been undeniable, with their players displaying remarkable skill and determination on the field. Despite missing some of their top players, the young talents of the Indian team rose to the occasion, seizing the opportunity to showcase their abilities. Led by Rohit Sharma, who demonstrated exemplary leadership, India’s performance was nothing short of magnificent.On the other hand, England’s Bazball, characterized by its aggressive and attacking approach, has come under scrutiny following their defeat.Many cricket enthusiasts have questioned the exciting style of play that England adopted not too long ago, while others believe that it’s too soon to write the obituary for Bazball.While the series loss will undoubtedly put pressure on the English test side, as well as their captain and coach, it remains to be seen whether they will make any alterations to their approach or continue to believe in the effectiveness of their positive mindset.One undeniable aspect of Bazball is its ability to draw spectators back into the stadium and reignite interest in Test cricket. The fast-paced nature of the matches, coupled with the thrilling displays of skill and innovation, has captivated audiences worldwide.Furthermore, the fact that none of the matches went into the fifth day is a testament to the pace at which the game is played these days.As the cricketing world reflects on the outcome of the India-England series, one thing is clear: While India celebrates their victory and looks ahead to future challenges, England must evaluate the effectiveness of Bazball in achieving desired results.Regardless of the outcome, one thing is certain – the sport of cricket continues to evolve, and the excitement and anticipation surrounding each match remain as strong as ever.',
   author: 'John Doe',
   date: '2022-01-01',
   comments: 100
  },
  {
    id:3,
   title: 'First Blog',
   description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.India’s dominance throughout the series has been undeniable, with their players displaying remarkable skill and determination on the field. Despite missing some of their top players, the young talents of the Indian team rose to the occasion, seizing the opportunity to showcase their abilities. Led by Rohit Sharma, who demonstrated exemplary leadership, India’s performance was nothing short of magnificent.On the other hand, England’s Bazball, characterized by its aggressive and attacking approach, has come under scrutiny following their defeat.Many cricket enthusiasts have questioned the exciting style of play that England adopted not too long ago, while others believe that it’s too soon to write the obituary for Bazball.While the series loss will undoubtedly put pressure on the English test side, as well as their captain and coach, it remains to be seen whether they will make any alterations to their approach or continue to believe in the effectiveness of their positive mindset.One undeniable aspect of Bazball is its ability to draw spectators back into the stadium and reignite interest in Test cricket. The fast-paced nature of the matches, coupled with the thrilling displays of skill and innovation, has captivated audiences worldwide.Furthermore, the fact that none of the matches went into the fifth day is a testament to the pace at which the game is played these days.As the cricketing world reflects on the outcome of the India-England series, one thing is clear: While India celebrates their victory and looks ahead to future challenges, England must evaluate the effectiveness of Bazball in achieving desired results.Regardless of the outcome, one thing is certain – the sport of cricket continues to evolve, and the excitement and anticipation surrounding each match remain as strong as ever..',
   imageUrl: '/blog1.png',
   author: 'John Doe',
   date: '2022-01-01',
   comments: 100
  },
  {
    id:4,
   title: 'First Blog',
   description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.India’s dominance throughout the series has been undeniable, with their players displaying remarkable skill and determination on the field. Despite missing some of their top players, the young talents of the Indian team rose to the occasion, seizing the opportunity to showcase their abilities. Led by Rohit Sharma, who demonstrated exemplary leadership, India’s performance was nothing short of magnificent.On the other hand, England’s Bazball, characterized by its aggressive and attacking approach, has come under scrutiny following their defeat.Many cricket enthusiasts have questioned the exciting style of play that England adopted not too long ago, while others believe that it’s too soon to write the obituary for Bazball.While the series loss will undoubtedly put pressure on the English test side, as well as their captain and coach, it remains to be seen whether they will make any alterations to their approach or continue to believe in the effectiveness of their positive mindset.One undeniable aspect of Bazball is its ability to draw spectators back into the stadium and reignite interest in Test cricket. The fast-paced nature of the matches, coupled with the thrilling displays of skill and innovation, has captivated audiences worldwide.Furthermore, the fact that none of the matches went into the fifth day is a testament to the pace at which the game is played these days.As the cricketing world reflects on the outcome of the India-England series, one thing is clear: While India celebrates their victory and looks ahead to future challenges, England must evaluate the effectiveness of Bazball in achieving desired results.Regardless of the outcome, one thing is certain – the sport of cricket continues to evolve, and the excitement and anticipation surrounding each match remain as strong as ever..',
   imageUrl: '/blog1.png',
   author: 'John Doe',
   date: '2022-01-01',
   comments: 100
  },
  {
    id:5,
   title: 'First Blog',
   description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.India’s dominance throughout the series has been undeniable, with their players displaying remarkable skill and determination on the field. Despite missing some of their top players, the young talents of the Indian team rose to the occasion, seizing the opportunity to showcase their abilities. Led by Rohit Sharma, who demonstrated exemplary leadership, India’s performance was nothing short of magnificent.On the other hand, England’s Bazball, characterized by its aggressive and attacking approach, has come under scrutiny following their defeat.Many cricket enthusiasts have questioned the exciting style of play that England adopted not too long ago, while others believe that it’s too soon to write the obituary for Bazball.While the series loss will undoubtedly put pressure on the English test side, as well as their captain and coach, it remains to be seen whether they will make any alterations to their approach or continue to believe in the effectiveness of their positive mindset.One undeniable aspect of Bazball is its ability to draw spectators back into the stadium and reignite interest in Test cricket. The fast-paced nature of the matches, coupled with the thrilling displays of skill and innovation, has captivated audiences worldwide.Furthermore, the fact that none of the matches went into the fifth day is a testament to the pace at which the game is played these days.As the cricketing world reflects on the outcome of the India-England series, one thing is clear: While India celebrates their victory and looks ahead to future challenges, England must evaluate the effectiveness of Bazball in achieving desired results.Regardless of the outcome, one thing is certain – the sport of cricket continues to evolve, and the excitement and anticipation surrounding each match remain as strong as ever.',
   imageUrl: '/blog1.png',
   author: 'John Doe',
   date: '2022-01-01',
   comments: 100
  },
  {
    id:6,
   title: 'First Blog',
   description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.India’s dominance throughout the series has been undeniable, with their players displaying remarkable skill and determination on the field. Despite missing some of their top players, the young talents of the Indian team rose to the occasion, seizing the opportunity to showcase their abilities. Led by Rohit Sharma, who demonstrated exemplary leadership, India’s performance was nothing short of magnificent.On the other hand, England’s Bazball, characterized by its aggressive and attacking approach, has come under scrutiny following their defeat.Many cricket enthusiasts have questioned the exciting style of play that England adopted not too long ago, while others believe that it’s too soon to write the obituary for Bazball.While the series loss will undoubtedly put pressure on the English test side, as well as their captain and coach, it remains to be seen whether they will make any alterations to their approach or continue to believe in the effectiveness of their positive mindset.One undeniable aspect of Bazball is its ability to draw spectators back into the stadium and reignite interest in Test cricket. The fast-paced nature of the matches, coupled with the thrilling displays of skill and innovation, has captivated audiences worldwide.Furthermore, the fact that none of the matches went into the fifth day is a testament to the pace at which the game is played these days.As the cricketing world reflects on the outcome of the India-England series, one thing is clear: While India celebrates their victory and looks ahead to future challenges, England must evaluate the effectiveness of Bazball in achieving desired results.Regardless of the outcome, one thing is certain – the sport of cricket continues to evolve, and the excitement and anticipation surrounding each match remain as strong as ever.',
   imageUrl: '/blog1.png',
   author: 'John Doe',
   date: '2022-01-01',
   comments: 100
  },
  {
    id:7,
   title: 'First Blog',
   description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.India’s dominance throughout the series has been undeniable, with their players displaying remarkable skill and determination on the field. Despite missing some of their top players, the young talents of the Indian team rose to the occasion, seizing the opportunity to showcase their abilities. Led by Rohit Sharma, who demonstrated exemplary leadership, India’s performance was nothing short of magnificent.On the other hand, England’s Bazball, characterized by its aggressive and attacking approach, has come under scrutiny following their defeat.Many cricket enthusiasts have questioned the exciting style of play that England adopted not too long ago, while others believe that it’s too soon to write the obituary for Bazball.While the series loss will undoubtedly put pressure on the English test side, as well as their captain and coach, it remains to be seen whether they will make any alterations to their approach or continue to believe in the effectiveness of their positive mindset.One undeniable aspect of Bazball is its ability to draw spectators back into the stadium and reignite interest in Test cricket. The fast-paced nature of the matches, coupled with the thrilling displays of skill and innovation, has captivated audiences worldwide.Furthermore, the fact that none of the matches went into the fifth day is a testament to the pace at which the game is played these days.As the cricketing world reflects on the outcome of the India-England series, one thing is clear: While India celebrates their victory and looks ahead to future challenges, England must evaluate the effectiveness of Bazball in achieving desired results.Regardless of the outcome, one thing is certain – the sport of cricket continues to evolve, and the excitement and anticipation surrounding each match remain as strong as ever.',
   imageUrl: '/blog1.png',
   author: 'John Doe',
   date: '2022-01-01',
   comments: 100
  },
  {
    id:8,
   title: 'First Blog',
   description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.India’s dominance throughout the series has been undeniable, with their players displaying remarkable skill and determination on the field. Despite missing some of their top players, the young talents of the Indian team rose to the occasion, seizing the opportunity to showcase their abilities. Led by Rohit Sharma, who demonstrated exemplary leadership, India’s performance was nothing short of magnificent.On the other hand, England’s Bazball, characterized by its aggressive and attacking approach, has come under scrutiny following their defeat.Many cricket enthusiasts have questioned the exciting style of play that England adopted not too long ago, while others believe that it’s too soon to write the obituary for Bazball.While the series loss will undoubtedly put pressure on the English test side, as well as their captain and coach, it remains to be seen whether they will make any alterations to their approach or continue to believe in the effectiveness of their positive mindset.One undeniable aspect of Bazball is its ability to draw spectators back into the stadium and reignite interest in Test cricket. The fast-paced nature of the matches, coupled with the thrilling displays of skill and innovation, has captivated audiences worldwide.Furthermore, the fact that none of the matches went into the fifth day is a testament to the pace at which the game is played these days.As the cricketing world reflects on the outcome of the India-England series, one thing is clear: While India celebrates their victory and looks ahead to future challenges, England must evaluate the effectiveness of Bazball in achieving desired results.Regardless of the outcome, one thing is certain – the sport of cricket continues to evolve, and the excitement and anticipation surrounding each match remain as strong as ever.',
   imageUrl: '/blog1.png',
   author: 'John Doe',
   date: '2022-01-01',
   comments: 100
  },
  {
    id:9,
   title: 'First Blog',
   description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.India’s dominance throughout the series has been undeniable, with their players displaying remarkable skill and determination on the field. Despite missing some of their top players, the young talents of the Indian team rose to the occasion, seizing the opportunity to showcase their abilities. Led by Rohit Sharma, who demonstrated exemplary leadership, India’s performance was nothing short of magnificent.On the other hand, England’s Bazball, characterized by its aggressive and attacking approach, has come under scrutiny following their defeat.Many cricket enthusiasts have questioned the exciting style of play that England adopted not too long ago, while others believe that it’s too soon to write the obituary for Bazball.While the series loss will undoubtedly put pressure on the English test side, as well as their captain and coach, it remains to be seen whether they will make any alterations to their approach or continue to believe in the effectiveness of their positive mindset.One undeniable aspect of Bazball is its ability to draw spectators back into the stadium and reignite interest in Test cricket. The fast-paced nature of the matches, coupled with the thrilling displays of skill and innovation, has captivated audiences worldwide.Furthermore, the fact that none of the matches went into the fifth day is a testament to the pace at which the game is played these days.As the cricketing world reflects on the outcome of the India-England series, one thing is clear: While India celebrates their victory and looks ahead to future challenges, England must evaluate the effectiveness of Bazball in achieving desired results.Regardless of the outcome, one thing is certain – the sport of cricket continues to evolve, and the excitement and anticipation surrounding each match remain as strong as ever.',
   imageUrl: '/blog1.png',
   author: 'John Doe',
   date: '2022-01-01',
   comments: 100
  },
  {
    id:10,
   title: 'First Blog',
   description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.India’s dominance throughout the series has been undeniable, with their players displaying remarkable skill and determination on the field. Despite missing some of their top players, the young talents of the Indian team rose to the occasion, seizing the opportunity to showcase their abilities. Led by Rohit Sharma, who demonstrated exemplary leadership, India’s performance was nothing short of magnificent.On the other hand, England’s Bazball, characterized by its aggressive and attacking approach, has come under scrutiny following their defeat.Many cricket enthusiasts have questioned the exciting style of play that England adopted not too long ago, while others believe that it’s too soon to write the obituary for Bazball.While the series loss will undoubtedly put pressure on the English test side, as well as their captain and coach, it remains to be seen whether they will make any alterations to their approach or continue to believe in the effectiveness of their positive mindset.One undeniable aspect of Bazball is its ability to draw spectators back into the stadium and reignite interest in Test cricket. The fast-paced nature of the matches, coupled with the thrilling displays of skill and innovation, has captivated audiences worldwide.Furthermore, the fact that none of the matches went into the fifth day is a testament to the pace at which the game is played these days.As the cricketing world reflects on the outcome of the India-England series, one thing is clear: While India celebrates their victory and looks ahead to future challenges, England must evaluate the effectiveness of Bazball in achieving desired results.Regardless of the outcome, one thing is certain – the sport of cricket continues to evolve, and the excitement and anticipation surrounding each match remain as strong as ever.',
   imageUrl: '/blog1.png',
   author: 'John Doe',
   date: '2022-01-01',
   comments: 100
  },
  {
    id:11,
   title: 'First Blog',
   description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.India’s dominance throughout the series has been undeniable, with their players displaying remarkable skill and determination on the field. Despite missing some of their top players, the young talents of the Indian team rose to the occasion, seizing the opportunity to showcase their abilities. Led by Rohit Sharma, who demonstrated exemplary leadership, India’s performance was nothing short of magnificent.On the other hand, England’s Bazball, characterized by its aggressive and attacking approach, has come under scrutiny following their defeat.Many cricket enthusiasts have questioned the exciting style of play that England adopted not too long ago, while others believe that it’s too soon to write the obituary for Bazball.While the series loss will undoubtedly put pressure on the English test side, as well as their captain and coach, it remains to be seen whether they will make any alterations to their approach or continue to believe in the effectiveness of their positive mindset.One undeniable aspect of Bazball is its ability to draw spectators back into the stadium and reignite interest in Test cricket. The fast-paced nature of the matches, coupled with the thrilling displays of skill and innovation, has captivated audiences worldwide.Furthermore, the fact that none of the matches went into the fifth day is a testament to the pace at which the game is played these days.As the cricketing world reflects on the outcome of the India-England series, one thing is clear: While India celebrates their victory and looks ahead to future challenges, England must evaluate the effectiveness of Bazball in achieving desired results.Regardless of the outcome, one thing is certain – the sport of cricket continues to evolve, and the excitement and anticipation surrounding each match remain as strong as ever..',
   imageUrl: '/blog1.png',
   author: 'John Doe',
   date: '2022-01-01',
   comments: 100
  },
  {
    id:12,
   title: 'First Blog',
   description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.India’s dominance throughout the series has been undeniable, with their players displaying remarkable skill and determination on the field. Despite missing some of their top players, the young talents of the Indian team rose to the occasion, seizing the opportunity to showcase their abilities. Led by Rohit Sharma, who demonstrated exemplary leadership, India’s performance was nothing short of magnificent.On the other hand, England’s Bazball, characterized by its aggressive and attacking approach, has come under scrutiny following their defeat.Many cricket enthusiasts have questioned the exciting style of play that England adopted not too long ago, while others believe that it’s too soon to write the obituary for Bazball.While the series loss will undoubtedly put pressure on the English test side, as well as their captain and coach, it remains to be seen whether they will make any alterations to their approach or continue to believe in the effectiveness of their positive mindset.One undeniable aspect of Bazball is its ability to draw spectators back into the stadium and reignite interest in Test cricket. The fast-paced nature of the matches, coupled with the thrilling displays of skill and innovation, has captivated audiences worldwide.Furthermore, the fact that none of the matches went into the fifth day is a testament to the pace at which the game is played these days.As the cricketing world reflects on the outcome of the India-England series, one thing is clear: While India celebrates their victory and looks ahead to future challenges, England must evaluate the effectiveness of Bazball in achieving desired results.Regardless of the outcome, one thing is certain – the sport of cricket continues to evolve, and the excitement and anticipation surrounding each match remain as strong as ever.',
   imageUrl: '/blog1.png',
   author: 'John Doe',
   date: '2022-01-01',
   comments: 100
  },
  {
    id:13,
   title: 'First Blog',
   description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.India’s dominance throughout the series has been undeniable, with their players displaying remarkable skill and determination on the field. Despite missing some of their top players, the young talents of the Indian team rose to the occasion, seizing the opportunity to showcase their abilities. Led by Rohit Sharma, who demonstrated exemplary leadership, India’s performance was nothing short of magnificent.On the other hand, England’s Bazball, characterized by its aggressive and attacking approach, has come under scrutiny following their defeat.Many cricket enthusiasts have questioned the exciting style of play that England adopted not too long ago, while others believe that it’s too soon to write the obituary for Bazball.While the series loss will undoubtedly put pressure on the English test side, as well as their captain and coach, it remains to be seen whether they will make any alterations to their approach or continue to believe in the effectiveness of their positive mindset.One undeniable aspect of Bazball is its ability to draw spectators back into the stadium and reignite interest in Test cricket. The fast-paced nature of the matches, coupled with the thrilling displays of skill and innovation, has captivated audiences worldwide.Furthermore, the fact that none of the matches went into the fifth day is a testament to the pace at which the game is played these days.As the cricketing world reflects on the outcome of the India-England series, one thing is clear: While India celebrates their victory and looks ahead to future challenges, England must evaluate the effectiveness of Bazball in achieving desired results.Regardless of the outcome, one thing is certain – the sport of cricket continues to evolve, and the excitement and anticipation surrounding each match remain as strong as ever..',
   imageUrl: '/blog1.png',
   author: 'John Doe',
   date: '2022-01-01',
   comments: 100
  },
  {
    id:14,
   title: 'First Blog',
   description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.India’s dominance throughout the series has been undeniable, with their players displaying remarkable skill and determination on the field. Despite missing some of their top players, the young talents of the Indian team rose to the occasion, seizing the opportunity to showcase their abilities. Led by Rohit Sharma, who demonstrated exemplary leadership, India’s performance was nothing short of magnificent.On the other hand, England’s Bazball, characterized by its aggressive and attacking approach, has come under scrutiny following their defeat.Many cricket enthusiasts have questioned the exciting style of play that England adopted not too long ago, while others believe that it’s too soon to write the obituary for Bazball.While the series loss will undoubtedly put pressure on the English test side, as well as their captain and coach, it remains to be seen whether they will make any alterations to their approach or continue to believe in the effectiveness of their positive mindset.One undeniable aspect of Bazball is its ability to draw spectators back into the stadium and reignite interest in Test cricket. The fast-paced nature of the matches, coupled with the thrilling displays of skill and innovation, has captivated audiences worldwide.Furthermore, the fact that none of the matches went into the fifth day is a testament to the pace at which the game is played these days.As the cricketing world reflects on the outcome of the India-England series, one thing is clear: While India celebrates their victory and looks ahead to future challenges, England must evaluate the effectiveness of Bazball in achieving desired results.Regardless of the outcome, one thing is certain – the sport of cricket continues to evolve, and the excitement and anticipation surrounding each match remain as strong as ever.',
   imageUrl: '/blog1.png',
   author: 'John Doe',
   date: '2022-01-01',
   comments: 100
  },
  {
    id:15,
   title: 'First Blog',
   description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.India’s dominance throughout the series has been undeniable, with their players displaying remarkable skill and determination on the field. Despite missing some of their top players, the young talents of the Indian team rose to the occasion, seizing the opportunity to showcase their abilities. Led by Rohit Sharma, who demonstrated exemplary leadership, India’s performance was nothing short of magnificent.On the other hand, England’s Bazball, characterized by its aggressive and attacking approach, has come under scrutiny following their defeat.Many cricket enthusiasts have questioned the exciting style of play that England adopted not too long ago, while others believe that it’s too soon to write the obituary for Bazball.While the series loss will undoubtedly put pressure on the English test side, as well as their captain and coach, it remains to be seen whether they will make any alterations to their approach or continue to believe in the effectiveness of their positive mindset.One undeniable aspect of Bazball is its ability to draw spectators back into the stadium and reignite interest in Test cricket. The fast-paced nature of the matches, coupled with the thrilling displays of skill and innovation, has captivated audiences worldwide.Furthermore, the fact that none of the matches went into the fifth day is a testament to the pace at which the game is played these days.As the cricketing world reflects on the outcome of the India-England series, one thing is clear: While India celebrates their victory and looks ahead to future challenges, England must evaluate the effectiveness of Bazball in achieving desired results.Regardless of the outcome, one thing is certain – the sport of cricket continues to evolve, and the excitement and anticipation surrounding each match remain as strong as ever..',
   imageUrl: '/blog1.png',
   author: 'John Doe',
   date: '2022-01-01',
   comments: 100
  },]

interface PostProps {
  params: Promise<{
    id: string;
  }>;
}

export default function Post({ params }: PostProps) {
  // Unwrap params using React.use()
  const { id } = React.use(params);

  // Convert ID to a number
  const numericId = Number(id);
  console.log('ID:', numericId);

  // Find the post matching the given ID
  const post = postsData.find((p) => p.id === numericId);
  console.log('Found Post:', post);

  const renderParagraphs = (description: string) => {
    return description.split('\n').map((para, index) => (
      <p className="mt-4 text-justify" key={index}>
        {para}
      </p>
    ));
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="font-bold md:text-4xl text-3xl text-center mb-5">{post.title}</h1>
      {post.imageUrl && (
        <Image
          className="h-auto rounded-md"
          src={post.imageUrl}
          width={1000}
          height={500}
          alt="Post Image"
        />
      )}
      <div className="mt-6 text-lg text-slate-700">
        {post.description && renderParagraphs(post.description)}
      </div>
      <CommentSection postID={post.id} />
      <AuthorCard />
    </div>
  );
}