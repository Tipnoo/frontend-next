/* eslint-disable import/prefer-default-export */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export function getSortedContent() {
  // Get file names under /content
  const fileNames = fs.readdirSync(contentDirectory);

  const allContentData = fileNames.map(async (fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  });

  return Promise.all(allContentData);
}

// export function getSortedContent() {
//   // Get file names under /content
//   const fileNames = fs.readdirSync(contentDirectory);
//   console.log('fileNames', fileNames)

//   const allContentData = fileNames.map((fileName) => {
//     // Remove ".md" from file name to get id
//     const id = fileName.replace(/\.md$/, '');

//     // Read markdown file as string
//     const fullPath = path.join(contentDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, 'utf8');

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents);
//     console.log('matterResult', matterResult);

//     // Use remark to convert markdown into HTML string
//     //   const processedContent = await remark()
//     //     .use(html)
//     //     .process(matterResult.content);
//     //   const contentHtml = processedContent.toString();

//     return {
//       id,
//       ...matterResult.data,
//     };
//   });

//   return allContentData;
// }

// export async function getContentData(id) {
//   const fullPath = path.join(contentDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents);

//   // Use remark to convert markdown into HTML string
//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content);
//   const contentHtml = processedContent.toString();

//   // Combine the data with the id and contentHtml
//   return {
//     id,
//     contentHtml,
//     ...matterResult.data,
//   };
// }

// export function getAllContentIds() {
//   const fileNames = fs.readdirSync(contentDirectory);
//   console.log('filename', fileNames);
//   return fileNames.map((fileName) => ({
//     params: {
//       id: fileName.replace(/\.md$/, ''),
//     },
//   }));
// }
