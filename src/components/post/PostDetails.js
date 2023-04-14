import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
const PostDetails = ({ markDownData }) => {
  return (
    <main>
      <ReactMarkdown children={markDownData}></ReactMarkdown>
    </main>
  );
};

export default PostDetails;
