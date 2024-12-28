import React from 'react'
import BlogCard from './BlogCard'

export default function Mega() {
  const post =[
    {
      id:1,
     title: 'First Blog',
     description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis.With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of Englands bold and dynamic playing style, often referred to as Bazball',
     imageUrl: '/blog1.png',
     author: 'John Doe',
     date: '2022-01-01',
     comments: 100
    },
    {
      id:2,
     title: 'First Blog',
     description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis.With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.',
     imageUrl: '/blog1.png',
     author: 'John Doe',
     date: '2022-01-01',
     comments: 100
    },
    {
      id:3,
     title: 'First Blog',
     description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis.With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.',
     imageUrl: '/blog1.png',
     author: 'John Doe',
     date: '2022-01-01',
     comments: 100
    },
    {
      id:4,
     title: 'First Blog',
     description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis.With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.',
     imageUrl: '/blog1.png',
     author: 'John Doe',
     date: '2022-01-01',
     comments: 100
    },
    {
      id:5,
     title: 'First Blog',
     description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis.With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.',
     imageUrl: '/blog1.png',
     author: 'John Doe',
     date: '2022-01-01',
     comments: 100
    },
    {
      id:6,
     title: 'First Blog',
     description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis.With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.',
     imageUrl: '/blog1.png',
     author: 'John Doe',
     date: '2022-01-01',
     comments: 100
    },
    {
      id:7,
     title: 'First Blog',
     description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis.With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.',
     imageUrl: '/blog1.png',
     author: 'John Doe',
     date: '2022-01-01',
     comments: 100
    },
    {
      id:8,
     title: 'First Blog',
     description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis.With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.',
     imageUrl: 'blog1.png',
     author: 'John Doe',
     date: '2022-01-01',
     comments: 100
    },
    {
      id:9,
     title: 'First Blog',
     description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis.With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.',
     imageUrl: '/blog1.png',
     author: 'John Doe',
     date: '2022-01-01',
     comments: 100
    },
    {
      id:10,
     title: 'First Blog',
     description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis.With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.',
     imageUrl: '/blog1.png',
     author: 'John Doe',
     date: '2022-01-01',
     comments: 100
    },
    {
      id:11,
     title: 'First Blog',
     description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis.With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.',
     imageUrl: '/blog1.png',
     author: 'John Doe',
     date: '2022-01-01',
     comments: 100
    },
    {
      id:12,
     title: 'First Blog',
     description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis.With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.',
     imageUrl: '/blog1.png',
     author: 'John Doe',
     date: '2022-01-01',
     comments: 100
    },
    {
      id:13,
     title: 'First Blog',
     description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis.With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.',
     imageUrl: '/blog1.png',
     author: 'John Doe',
     date: '2022-01-01',
     comments: 100
    },
    {
      id:14,
     title: 'First Blog',
     description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis.With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.',
     imageUrl: '/blog1.png',
     author: 'John Doe',
     date: '2022-01-01',
     comments: 100
    },
    {
      id:15,
     title: 'First Blog',
     description:'After much anticipation and excitement, the riveting series between India and England has finally concluded, leaving cricket fans around the world buzzing with discussion and analysis.With India emerging triumphant with a commanding 4-1 victory, the series has not only showcased the prowess of the Indian team but also sparked debates about the future of England’s bold and dynamic playing style, often referred to as Bazball.',
     imageUrl: '/blog1.png',
     author: 'John Doe',
     date: '2022-01-01',
     comments: 100
    },
    

  ]
  return (
    <div className='my-8'>
      <h1 className='text-3xl font-bold text-center my-8 text-red-600  animate-color-change '>
        {""}Exploring The World Of AI And Technnology</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>{post.map((post, index)=>(
          <div className='fade-in' key={post.id} >
            <div className='blog-card' >
              <BlogCard post={post} isDarkBackground={index % 2 === 0}/>
            </div>
          </div>
        ))}</div>

      
    </div>
  )
}
