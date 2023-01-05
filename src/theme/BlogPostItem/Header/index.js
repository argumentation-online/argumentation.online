import React from 'react';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {useBlogPost} from '@docusaurus/theme-common/internal';
import Translate from "@docusaurus/Translate";

export default function BlogPostItemHeader() {
  const {
    siteConfig: { baseUrl },
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const { 
    metadata: { permalink }
  } = useBlogPost();

  let defaultBaseUrl = baseUrl;
  const locale = currentLocale == "de" ? "" : currentLocale + "/";
  if (locale != "de") {
    defaultBaseUrl = baseUrl.substring(
      0,
      baseUrl.length - (locale + "/").length
    );
  }
  const slug = permalink.substring(permalink.lastIndexOf("/") + 1);
  
  return (
    <header>
      <BlogPostItemHeaderTitle />
      <BlogPostItemHeaderInfo />
      <BlogPostItemHeaderAuthors />
      {/* <a href={defaultBaseUrl + "/pdfs/" + locale + slug + ".pdf"}> */}
      <a href={defaultBaseUrl + "/pdfs/" + slug + ".pdf"}>
        <Translate
          id="theme.blog.post.downloadPdf"
          description="The label used in the blog post header to link to the pdf file"
        >
          Als PDF herunterladen
        </Translate>
      </a>
    </header>
  );
}
