import Layout from '@/components/layout/Layout';
import { getPostBySlug } from '../../../lib';
import PostDetails from '@/components/post/PostDetails';
import Image from 'next/image';

const PostPage = ({ matterData, markDownData }) => {
  const { author, title, date, cover_image, category, author_image } =
    matterData;
  return (
    <Layout>
      <main className='w-full'>
        <header>
          <article className='w-full h-full relative  block mx-auto'>
            <Image
              className='w-full h-full sm:h-72 object-cover '
              src={cover_image}
              width={350}
              height={350}
              alt={title}
            />
            <div className='absolute bottom-5 left-5 w-1/2 h-6/12 '>
              <img
                className='shadow-2xl rounded-lg'
                src={author_image}
                alt={author}
              />
            </div>
          </article>
          {/* info's */}
          <section className='bg-stone-100 rounded-b-sm '>
            <div className='flex h-7 w-3/4 mx-auto justify-between items-center tracking-wider sm:h-10'>
              <p>{author}</p>
              <p>{date}</p>
            </div>
          </section>
        </header>
        <article>
          <PostDetails markDownData={markDownData} />
        </article>
      </main>
    </Layout>
  );
};

export default PostPage;

export async function getServerSideProps({ params: { slug } }) {
  const { matterData, markDownData } = getPostBySlug(slug);

  return {
    props: {
      matterData,
      markDownData,
    },
  };
}
