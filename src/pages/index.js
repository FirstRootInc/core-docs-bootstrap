import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Firstroot API',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Start integrating participatory budgeting in your web or mobile application using our GraphQL API.
        Access our GraphQL schema including the API references and learn about some core concepts to build your web or mobile application.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <section className={styles.features}>
      <div className={clsx("row", styles.descriptionRow)}>
        <div className={clsx('col col--6', styles.imgColumn)}>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
        <div className="col col--6">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={styles.buttons}>
                <Link
                  className={clsx(
                    'button button--outline button--secondary button--lg',
                    styles.getStarted,
                  )}
                  to={useBaseUrl('docs/')}>
                  Get Started
                </Link>
              </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`FirstRoot ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <img
            className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
            alt="Create React App logo"
            src={useBaseUrl('/img/presentation-mockup.png')}
          />
        </div>
      </header>
      <main>
        <section class={styles.section}>
          {features && features.length > 0 && (
            <div className={styles.features}>
              <div className={"container"}>
                <div className="row">
                  {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </Layout>
  );
}
