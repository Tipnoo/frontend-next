import Head from 'next/head';
import Link from 'next/link';

export const siteTitle = 'Next.js Sample Website';

const BlogLayout = ({ children, home }) => (
  <div className="">
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Learn how to build a personal website using Next.js"
      />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle,
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <main>{children}</main>
    {!home && (
    <div className="">
      <Link href="/blog">
        <a className="text-blue-600 hover:underline">← Back to Blog</a>
      </Link>
    </div>
    )}
  </div>
);

export default BlogLayout;
