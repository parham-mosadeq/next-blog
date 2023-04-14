import Link from 'next/link';
import React from 'react';

const CategoryLabels = ({ children }) => {
  const keys = {
    Python: 'green',
    JavaScript: 'yellow',
    PHP: 'gray',
    CSS: 'blue',
    Ruby: 'red',
  };
  return (
    <div
      className={`bg-${keys[children]}-500 px-2 py-1 text-gray-50 rounded-md`}
      // className={`bg-blue-500 px-2 py-1 text-gray-50 rounded-md`}
    >
      <Link href={`/blogs/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
};

export default CategoryLabels;
