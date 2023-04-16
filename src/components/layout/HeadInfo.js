import Head from 'next/head';
const HeadInfo = ({ title, desc }) => {
  return (
    <Head>
      <title>DevBlog | {title}</title>

      <meta name={`info ${title}`} description={desc} />
    </Head>
  );
};

export default HeadInfo;
