import Link from 'next/link';
const PaginateHandler = ({ currentPage, numPages }) => {
  const isFirstPage = currentPage > 1;
  const isLastPage = currentPage < numPages;
  return (
    <section className='flex mx-2 items-center justify-center my-5 '>
      <div>
        {isFirstPage && (
          <button className='capitalize tracking-wide font-light px-2 py-1 bg-blue-700  mr-2  text-white'>
            <Link href={`/blogs/page/${currentPage - 1}`}>previous</Link>
          </button>
        )}
      </div>
      <div>
        {/* generating an array to loop over and create page numbers */}
        {Array.from({ length: numPages }, (_, p) => (
          <span
            key={p}
            className='border mx-2 px-2 py-1 bg-stone-100 text-blue-700 '
          >
            <Link href={`/blogs/page/${p + 1}`}>{p + 1}</Link>
          </span>
        ))}
      </div>
      <div>
        {isLastPage && (
          <button className='capitalize tracking-wide font-light px-2 py-1 bg-blue-700  ml-2 text-white'>
            <Link href={`/blogs/page/${currentPage + 1}`}>next</Link>
          </button>
        )}
      </div>
    </section>
  );
};

export default PaginateHandler;
