import { defaults } from "@/utils/contants";
import Head from "next/head";

const { website_url, page_title, page_description, page_meta_image } = defaults;

export type ISEO =  {
  title?: string;
  description?: string;
  img?: string;
}

const SEOHeaders: React.FC<ISEO> = ({
  title = page_title,
  description = page_description,
  img = page_meta_image,
}) => {
  const t = title ? `Idea PJ | ${title}` : "";
  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>{t}</title>
      <meta name="title" content={title} />
      <meta
        name="description"
        content={description}
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={website_url} />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:image"
        content={img}
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={website_url} />
      <meta property="twitter:title" content={title} />
      <meta
        property="twitter:description"
        content={description}
      />
      <meta
        property="twitter:image"
        content={img}
      />
    </Head>
  );
};

export default SEOHeaders;
