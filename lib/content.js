import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export default async function getSortedContent() {
  // Get file names under /content
  const fileNames = fs.readdirSync(contentDirectory);

  let allContentData = fileNames.map(async (fileName) => {
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

  allContentData = await Promise.all(allContentData);
  return allContentData.sort((a, b) => (parseInt(a.number, 10) > parseInt(b.number, 10) ? 1 : -1));
}
