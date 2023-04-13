import Layout from '@/components/layout/Layout';

import { getAllPosts } from '../../lib';
import Post from '@/components/post/Post';

const HomePage = ({ posts }) => {
  return (
    <Layout>
      <div className='grid grid-cols-1 items-center justify-center '>
        <div>
          <h1 className='capitalize text-3xl text-center my-2 border-b-2'>
            latest posts
          </h1>
        </div>
        <div>
          {posts.map((post) => {
            return <Post key={post.slug} post={post} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
