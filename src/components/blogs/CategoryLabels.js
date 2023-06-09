import Link from 'next/link';
import React from 'react';

const CategoryLabels = ({ children }) => {
  return (
    <div
      className={`bg-purple-500 px-2 py-1 h-fit text-gray-50 rounded-md`}
    >
      <Link href={`/blogs/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
};

export default CategoryLabels;
