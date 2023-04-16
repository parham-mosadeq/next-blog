import { marked } from 'marked';
import HeadInfo from '../layout/HeadInfo';

const PostDetails = ({ content, title }) => {
  return (
    <>
      <HeadInfo title={title} desc={`related information to ${title}`} />
      <div
        className='blog-text shadow-md px-2 py-3 my-2 mx-1 min-h-fit sm:px-5'
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      ></div>
    </>
  );
};

export default PostDetails;
