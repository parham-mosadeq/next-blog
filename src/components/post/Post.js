import Image from 'next/image';
import React from 'react';

const Post = ({ post }) => {
  const { slug, matterData } = post;

  const { author, title, excerpt, date, cover_image, category, author_image } =
    matterData;

  return (
    <main
      className='flex flex-col items-center justify-center
     my-4  bg-gray-200 w-3/5 mx-auto text-center rounded-md
      
     '
    >
      {/* header start */}
      <div>
        <Image
          className=' p-0 m-0 w-full rounded-t-xl'
          src={cover_image}
          alt={title}
          width={300}
          height={300}
        />
      </div>
      {/* header end */}

      {/* labels start */}
      <div className='flex justify-around w-full my-2'>
        <p className='bg-stone-50 py-1 px-2 rounded-md'>{date}</p>
        <p>{category}</p>
      </div>
      {/* labels end */}

      {/* card details start */}
      <div className='my-2 '>
        <p className='text-left font-bold pl-2 text-lg text-black w-fit border-b-2 border-stone-500'>
          {title}
        </p>
        <p className='text-justify p-3 tracking-tight m-0'>{excerpt}</p>
      </div>
      {/* card details end */}

      {/* author info start */}
      <div className='flex justify-between items-center p-2 w-full '>
        <p className='text-md font-medium'>{author}</p>
        <img className='rounded-full w-10 h-10' src={author_image} />
      </div>
      {/* author info end */}
    </main>
  );
};

export default Post;