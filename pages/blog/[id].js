/* eslint-disable react/no-danger */
import Head from 'next/head';
import { parseISO, format } from 'date-fns';
import Layout from '../../components/blogPostsLayout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import HeaderPostAnOffer from '../../components/headers/Header-postAnOffer';
import SEOHeader from '../../components/headers/Seo-Header';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

const Date = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
};

export default function Post({ postData }) {
  return (
    <Layout>
      <SEOHeader
        title={postData.title}
        description={postData.description}
        type="article"
      />
      <HeaderPostAnOffer
        title={postData.title}
      />
      <div className="text-gray-600">
        <Date dateString={postData.date} />
      </div>
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}
