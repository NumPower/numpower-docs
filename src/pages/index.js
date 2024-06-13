import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './index.module.css';
import TypingCode from "../components/HomePageCodeTyping";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const { isDarkTheme } = useColorMode();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src={isDarkTheme ? "img/numpower.png" : "img/numpower_white.png"}  width="200px" style={{zIndex : 2}} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/install/install">
            Install NumPower (0.5.0)
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Extension for numerical calculations and scientific computing made for PHP">
      <HomepageHeader />
      <main>
          <HomepageFeatures />
      </main>
    </Layout>
  );
}
