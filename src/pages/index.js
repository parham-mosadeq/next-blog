import Layout from '@/components/layout/Layout';

import { getAllPosts } from '../../lib';

const HomePage = ({ posts }) => {
  console.log(posts);
  return (
    <Layout>
      <div className=''>
        <h1>home page</h1>
      </div>
      <div>
        <p>hello</p>
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
