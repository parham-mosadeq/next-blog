const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function postData() {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );

    const { data: matterData } = matter(markdownWithMeta);

    return {
      slug,
      matterData,
    };
  });

  return `export const post=${JSON.stringify(posts)}`;
}

try {
  fs.readdirSync('cache');
} catch (error) {
  fs.mkdirSync('cache');
}

fs.writeFile('cache/data.js', postData(), function (err) {
  if (err) {
    return console.log(err);
  } else {
    console.log('posts cached!');
  }
});
