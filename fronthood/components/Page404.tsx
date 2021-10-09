// noinspection HtmlUnknownTarget

import Head from 'next/head'
import * as React from 'react'
import * as types from 'lib/types'
import { PageHead } from './PageHead'

import styles from './styles.module.css'

export const Page404: React.FC<types.PageProps> = ({ site, pageId, error }) => {
  const title = site?.name || 'Pomyanem...'

  return (
    <>
      <PageHead site={site} />

      <Head>
        <meta property='og:site_name' content={title} />
        <meta property='og:title' content={title} />

        <title>{title}</title>
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <h1><a href="https://status.underhood.club">Pomyanem... Check the status page!</a></h1>

          {error ? (
            <p>{error.message}</p>
          ) : (
            pageId && (
              <p>
                Pomyanem. Check https://status.underhood.club/ if you think something is wrong...
              </p>
            )
          )}

          <img
            src='/404.png'
            alt='404 Not Found'
            className={styles.errorImage}
          />
        </main>
      </div>
    </>
  )
}
