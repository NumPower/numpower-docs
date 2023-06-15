import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
        title: 'AVX2 and GPU support',
        description: (
          <>
              NumPower was designed from the ground up to utilize AVX2 and the GPU to
              further improve performance.
          </>
        ),
      },
      {
        title: 'Efficient memory usage',
        description: (
          <>
              With the use of strided linear arrays, slices, buffer sharing and a specific GC engine,
              NumPower manages memory more efficiently than a matrix in PHP arrays
          </>
        ),
      },
      {
        title: 'Powered by C',
        description: (
          <>
              By using a purely C backend we can extract even more of your machine's computational power
          </>
        ),
      },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
