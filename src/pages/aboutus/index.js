import HeadInfo from '@/components/layout/HeadInfo';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
const AboutUs = () => {
  return (
    <Layout>
      <HeadInfo
        title='About us'
        desc='all you need to know about me, parham mosadeqzadeh a front-end developer'
      />
      <section className='text-center w-full '>
        <div className='w-1/2 mx-auto'>
          <div className='block mx-auto w-fit mt-7 shadow-lg '>
            <Image
              className='rounded-md mx-auto'
              src='/images/creator/ParhamMosadeqzadeh.jpg'
              width={300}
              height={300}
              alt='parham mosadeqzadeh'
            />
          </div>
          <h2 className='font-bold tracking-wide my-4 capitalize'>
            hi, i'm parham mosadeqzadeh👋
          </h2>
        </div>
        <article className='font-semibold'>
          <p className='tracking-widest italic capitalize'>
            welcome to my blog
          </p>

          <p>I used nextJs and tailwind to build this blog:)</p>

          <p>Here's how you can reach me...</p>
        </article>
        <section className='flex justify-center items-center'>
          <a
            className='text-2xl block mx-1  text-blue-900'
            target='_blank'
            href='mailto://pmosadeqzadeh@gmail.com'
          >
            <FaEnvelope />
          </a>
          <a
            target='_blank'
            className='text-2xl block mx-1 text-blue-900'
            href='https://github.com/parham-mosadeq'
          >
            <FaGithub />
          </a>
        </section>
      </section>
    </Layout>
  );
};

export default AboutUs;
