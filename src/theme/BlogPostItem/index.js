import React from 'react';
import clsx from 'clsx';
import Translate, {translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import {usePluralForm} from '@docusaurus/theme-common';
import {blogPostContainerID} from '@docusaurus/utils-common';
import MDXContent from '@theme/MDXContent';
import EditThisPage from '@theme/EditThisPage';
import TagsListInline from '@theme/TagsListInline';
import BlogPostAuthors from '@theme/BlogPostAuthors';
import styles from './styles.module.css';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

// Very simple pluralization: probably good enough for now
function useReadingTimePlural() {
  const {selectMessage} = usePluralForm();
  return (readingTimeFloat) => {
    const readingTime = Math.ceil(readingTimeFloat);
    return selectMessage(
      readingTime,
      translate(
        {
          id: 'theme.blog.post.readingTime.plurals',
          description:
            'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: 'One min read|{readingTime} min read',
        },
        {readingTime},
      ),
    );
  };
}
export default function BlogPostItem(props) {
  const readingTimePlural = useReadingTimePlural();
  const {withBaseUrl} = useBaseUrlUtils();
  const {
    children,
    frontMatter,
    assets,
    metadata,
    truncated,
    isBlogPostPage = false,
  } = props;
  const {
    date,
    formattedDate,
    permalink,
    tags,
    readingTime,
    title,
    description,
    editUrl,
    authors,
  } = metadata;
  const image = assets.image ?? frontMatter.image;
  const truncatedPost = !isBlogPostPage && truncated;
  const tagsExists = tags.length > 0;
  const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
  const {
    siteConfig: { baseUrl },
    i18n: { currentLocale },
  } = useDocusaurusContext();

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
    <article
      className={!isBlogPostPage ? 'margin-bottom--xl' : undefined}
      itemProp="blogPost"
      itemScope
      itemType="http://schema.org/BlogPosting">
      <header>
        <TitleHeading className={styles.blogPostTitle} itemProp="headline">
          {isBlogPostPage ? (
            title
          ) : (
            <Link itemProp="url" to={permalink}>
              {title}
            </Link>
          )}
        </TitleHeading>
        <div className={clsx(styles.blogPostData, 'margin-vert--md')}>
          <time dateTime={date} itemProp="datePublished">
            {formattedDate}
          </time>

          {typeof readingTime !== 'undefined' && (
            <>
              {' · '}
              {readingTimePlural(readingTime)}
            </>
          )}
        </div>
        <BlogPostAuthors authors={authors} assets={assets} />
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

      {image && (
        <meta itemProp="image" content={withBaseUrl(image, {absolute: true})} />
      )}
      <div className={`${styles.blogPostAbstract}`}>{description}</div>
      <div
        // This ID is used for the feed generation to locate the main content
        id={isBlogPostPage ? blogPostContainerID : undefined}
        className="markdown"
        itemProp="articleBody">
        <MDXContent>{children}</MDXContent>
      </div>

      {(tagsExists || truncated) && (
        <footer
          className={clsx(
            'row docusaurus-mt-lg',
            isBlogPostPage && styles.blogPostDetailsFull,
          )}>
          {tagsExists && (
            <div className={clsx('col', {'col--9': truncatedPost})}>
              <TagsListInline tags={tags} />
            </div>
          )}

          {isBlogPostPage && editUrl && (
            <div className="col margin-top--sm">
              <EditThisPage editUrl={editUrl} />
            </div>
          )}

          {truncatedPost && (
            <div
              className={clsx('col text--right', {
                'col--3': tagsExists,
              })}>
              <Link
                to={metadata.permalink}
                aria-label={translate(
                  {
                    message: 'Read more about {title}',
                    id: 'theme.blog.post.readMoreLabel',
                    description:
                      'The ARIA label for the link to full blog posts from excerpts',
                  },
                  {title},
                )}>
                <b>
                  <Translate
                    id="theme.blog.post.readMore"
                    description="The label used in blog post item excerpts to link to full blog posts">
                    Read More
                  </Translate>
                </b>
              </Link>
            </div>
          )}
        </footer>
      )}
    </article>
  );
}
