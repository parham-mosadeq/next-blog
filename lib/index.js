import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getFiles = () => {
  const files = fs.readdirSync(path.join('posts'));
  return files;
};

export const getAllPosts = () => {
  const files = getFiles();

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

export const getPostBySlug = (slug) => {
  const files = getFiles();
  // adding ".md" to the end of the blog to generate a full path
  const fullPath = slug + '.md';
  // finding the wanted file
  const currentPost = files.find((fn) => fn === fullPath);
  // reading the file
  const markDownData = fs.readFileSync(
    path.join('posts', currentPost),
    'utf-8'
  );
  const { data: matterData } = matter(markDownData);
  console.log(matterData);
  return { matterData, markDownData };
};

export const sortByDate = (a, b) => {
  return new Date(b.matterData.date) - new Date(a.matterData.date);
};
