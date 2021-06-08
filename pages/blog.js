import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import { getSortedPostsData } from '../lib/posts';
import HeaderPostAnOffer from '../components/headers/Header-postAnOffer';
import SEOHeader from '../components/headers/Seo-Header';

const Date = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
};

export default function Home({ allPostsData }) {
  return (
    <div>
      <SEOHeader
        title="eSports Blog - Tipnoo"
        description="Read all the news in our new blog."
        type="website"
      />
      <HeaderPostAnOffer
        title="Blog"
      />
      <section>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/blog/${id}`}>
                <a className="text-blue-700">{title}</a>
              </Link>
              <br />
              <small className="">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
