import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import getSortedPostsData from '../lib/posts';
import HeaderPostAnOffer from '../components/headers/Header-postAnOffer';

const Date = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
};

export default function Home({ allPostsData }) {
  return (
    <div>
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
