import Image from 'next/image';
import React from 'react';
import CategoryLabels from '../blogs/CategoryLabels';
import Link from 'next/link';

const SearchResult = ({ post }) => {
  const { slug, matterData } = post;

  const { author, title, excerpt, date, cover_image, category, author_image } =
    matterData;

  return (
    <main
      className='flex flex-col items-center justify-center
     my-4  w-full mx-auto text-center rounded-md
     '
    >
      {/* header start */}
      <div className='md:w-1/2'>
        <Image
          className=' p-0 m-0 w-full rounded-t-xl'
          src={cover_image}
          alt={title}
          width={300}
          height={300}
        />
      </div>
      {/* header end */}

      <article className='bg-gray-200 w-full md:w-1/2'>
        {/* labels start */}
        <div className='flex justify-around items-center w-full my-2'>
          <p className='bg-stone-50 py-1 px-2 rounded-md mx-2'>{date}</p>
          <CategoryLabels slug={slug}>{category}</CategoryLabels>
        </div>
        {/* labels end */}

        {/* card details start */}
        <div className='my-2 '>
          <p className='text-left font-bold pl-2 text-lg text-blue-700 hover:text-blue-500 w-fit border-b-2 border-stone-500'>
            <Link href={`/blogs/${slug}`}>{title}</Link>
          </p>
        </div>
        {/* card details end */}

        {/* author info start */}
        <div className='flex justify-between items-center p-2 w-full '>
          <Link
            href={`/blogs/authors/${author}`}
            className='text-md font-medium text-blue-700 hover:text-blue-800'
          >
            {author}
          </Link>
          <img className='rounded-full w-10 h-10' src={author_image} />
        </div>
        {/* author info end */}
      </article>
    </main>
  );
};

export default SearchResult;
