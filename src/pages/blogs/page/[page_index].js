import Layout from '@/components/layout/Layout';
import PaginateHandler from '@/components/blogs/PaginateHandler';
import Post from '@/components/post/Post';
import { getAllPosts, getFiles, sortByDate } from '../../../../lib';
import { POST_PER_PAGE } from '../../../../config';
import HeadInfo from '@/components/layout/HeadInfo';

const BlogPage = ({ posts, numPages, currentPage }) => {
  return (
    <Layout>
      <HeadInfo title={`Blogs - ${currentPage}`} />
      <article className='flex items-center justify-center '>
        <article className='w-full'>
          <h1 className='capitalize text-3xl text-center my-2 border-b-2'>
            all posts
          </h1>

          <section className='grid w-full min-h-screen  content-center  grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
            {posts.map((post) => {
              return <Post key={post.slug} post={post} />;
            })}
          </section>
          <PaginateHandler numPages={numPages} currentPage={currentPage} />
        </article>
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

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // checking for page number in url & see if it's
  // on page 1 or others.
  // if not the default is page 1
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
    revalidate: 5000,
  };
}
