import Head from 'next/head'
import { BlogPosts } from '../components/organisms/BlogPosts'
import { getBlogPosts } from '../lib/contentful'
import styles from '../styles/Home.module.css'

type Props = { posts: any }

const Home: React.FC<Props> = ({ posts }) => {
  console.log(posts)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BlogPosts blogPosts={posts} />
      </main>
    </div>
  )
}
export default Home

export async function getStaticProps() {
  const posts = await getBlogPosts()
  return {
    props: {
      posts
    }
  }
}