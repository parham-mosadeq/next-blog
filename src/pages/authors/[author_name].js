import Layout from '@/components/layout/Layout';
import { getAuthorsPost } from '../../../lib';
import Post from '@/components/post/Post';
import BackBtn from '@/components/layout/BackBtn';

const AuthorPage = ({ authorsPost, author_name }) => {
  console.log(authorsPost);
  return (
    <Layout>
      <BackBtn />
      <article className='flex justify-center items-center flex-col'>
        <div>
          <h2 className='capitalize '>
            related posts to{' '}
            <span className='text-blue-700 font-bold'>{author_name}</span>
          </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {authorsPost.map((ap) => (
            <Post key={ap.slug} post={ap} />
          ))}
        </div>
      </article>
    </Layout>
  );
};

export default AuthorPage;

export async function getServerSideProps({ params: { author_name } }) {
  // must be async/await to fetch the correct data
  const authorsPost = await getAuthorsPost(author_name);

  return {
    props: { authorsPost, author_name },
  };
}
