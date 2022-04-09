import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { SessionProvider as NextAuthProvider } from 'next-auth/react'

import '../styles/global.scss'

import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../../prismicio'

function MyApp({ 
  Component, 
  pageProps: { session, ...pageProps }, 
}: AppProps) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>
            {children}
          </a>
        </Link>
      )}
    >
    <PrismicPreview repositoryName={repositoryName}>
      <NextAuthProvider session={session}>
        <Header />
        <Component {...pageProps} />
      </NextAuthProvider>
    </PrismicPreview>
  </PrismicProvider>
  )
}

export default MyApp
