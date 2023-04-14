import Layout from '@/components/layout/Layout';

import { getAllPosts, getCat } from '../../../../lib';
import Post from '@/components/post/Post';

const CategoryPage = ({ cats }) => {
  return (
    <Layout>
      <section>
        <div className='border-b-2 w-full '>
          <h2 className='text-center  capitalize text-3xl my-2 '>
            related categories
          </h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {cats.map((cat, idx) => (
            <Post key={idx} post={cat} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default CategoryPage;

export async function getStaticPaths() {
  // getting all posts
  const posts = getAllPosts();
  // taking cats out of other data
  const cats = posts.map((post) => post.matterData.category.toLowerCase());
  // creating dynamic paths
  const paths = cats.map((cat) => ({ params: { category_name: cat } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { category_name } = params;
  const cats = getCat(category_name);

  return {
    props: { cats },
  };
}
