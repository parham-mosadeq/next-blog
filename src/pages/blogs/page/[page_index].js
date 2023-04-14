import Layout from '@/components/layout/Layout';
import { getAllPosts, sortByDate } from '../../../../lib';
import Post from '@/components/post/Post';

const BlogPage = ({ posts }) => {
  return (
    <Layout>
      <article className='grid  items-center justify-center '>
        <div>
          <h1 className='capitalize text-3xl text-center my-2 border-b-2'>
            all posts
          </h1>
        </div>
        <section className='grid w-full min-h-screen  grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {posts.map((post) => {
            return <Post key={post.slug} post={post} />;
          })}
        </section>
      </article>
    </Layout>
  );
};

export default BlogPage;

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}