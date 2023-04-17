// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';

export default function handler(req, res) {
  // let posts;

  // if (process.env.NODE_ENV === 'production') {
  //   // todo fetch from cache
  // } else {
  //   const files = fs.readdirSync(path.join('posts'));

  //   posts = files.map((fileName) => {
  //     const markdownWithMeta = fs.readFileSync(
  //       files.join('posts', fileName),
  //       'utf-8'
  //     );

  //     const { data: matterData } = matter(markdownWithMeta);
  //     console.log(matterData);
  //     return { matterData };
  //   });
  // }

  // const results = posts.filter(
  //   ({ matterData: { title, category, excerpt } }) => {
  //     title.toLowerCase().indexOf(req.query.q) != -1 ||
  //       category.toLowerCase().indexOf(req.query.q) != -1 ||
  //       excerpt.toLowerCase().indexOf(req.query.q) != -1;
  //   }
  // );

  res.status(200).json({name:'parma'});
}
