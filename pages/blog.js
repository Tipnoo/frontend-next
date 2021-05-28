import getSortedPostsData from '../lib/posts';
import HeaderPostAnOffer from '../components/headers/Header-postAnOffer';

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
              {title}
              <br />
              {id}
              <br />
              {date}
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
