import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
        title: 'Modern instructions and GPU support',
        description: (
          <>
              NumPower was designed from the ground up to utilize AVX2, BLAS and the GPU to
              further improve performance.
          </>
        ),
      },
      {
        title: 'N-dimensional arrays',
        description: (
          <>
              Inspired by NumPy, NumPower arrays are N-dimensional and have efficient methods for slicing and indexing N-dimensional arrays.
          </>
        ),
      },
      {
        title: 'Mathematical Tools',
        description: (
          <>
              Count on dozens of high-performance mathematical operations, including: trigonometry, statistics, linear algebra and more.
          </>
        ),
      },
    {
        title: 'CUDA Support',
        description: (
            <>
                NumPower was developed from scratch to operate with GPUs that support CUDA. You can easily store and perform operations using your GPU's memory and processor.
            </>
        ),
    },
    {
        title: 'Image processing',
        description: (
            <>
                You can use GD images as input to perform various image processing. You can use slicing and convolution methods for example to crop or apply custom filters.
            </>
        ),
    },
    {
        title: 'Efficient memory usage',
        description: (
            <>
                Initially implemented with single precision floats, NDArray allows you to work with more data with less memory. We plan to add more types in the near future.
            </>
        ),
    }
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

