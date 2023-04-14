import Layout from '@/components/layout/Layout';
import { getAllPosts, getFiles, sortByDate } from '../../../../lib';
import Post from '@/components/post/Post';
import { POST_PER_PAGE } from '../../../../config';
const BlogPage = ({ posts, numPages, currentPage }) => {
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

export async function getStaticPaths() {
  // getting all files in an array
  const files = getFiles();

  // dynamic generation number of pages
  const numPages = Math.ceil(files.length / POST_PER_PAGE);

  const paths = [];

  for (let i = 0; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    });
  }

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = parseInt((params && params.page_index) || 1);

  const posts = getAllPosts();
  const files = getFiles();

  const numPages = Math.ceil(files.length / POST_PER_PAGE);
  const pageIndex = page - 1;

  const orderedPosts = posts
    .sort(sortByDate)
    .slice(pageIndex * POST_PER_PAGE, (pageIndex + 1) * POST_PER_PAGE);

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
    },
  };
}
