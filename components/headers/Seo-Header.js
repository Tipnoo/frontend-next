import Head from 'next/head';

const Header = (props) => (
  <Head>
    <title>{props.title}</title>

    <meta name="description" content={props.description} />
    <meta property="og:title" content={props.title} />
    <meta property="og:type" content={props.type} />
    <meta property="og:site_name" content="Tipnoo" />
    <meta property="og:url" content="https://tipnoo.com/" />
    <meta property="og:image" content="https://tipnoo.com/image/ogimage_tipnoo.png" />
    <meta property="og:locale" content="en_US" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.description} />
    <meta name="twitter:image" content="https://tipnoo.com/image/ogimage_tipnoo.png" />

    <link rel="icon" href="/favicon.ico" />

    <script async src='https://www.googletagmanager.com/gtag/js?id=G-59Z27VML8C'></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-59Z27VML8C');
              `
      }}>
    </script>
  </Head>
);

export default Header;
