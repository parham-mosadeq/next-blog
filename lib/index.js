import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
export const getAllPosts = () => {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map((file) => {
    const slug = file.replace('.md', '');
    const markDownData = fs.readFileSync(path.join('posts', file), 'utf-8');

    const { data: matterData } = matter(markDownData);

    return {
      slug,
      matterData,
    };
  });

  return posts;
};
