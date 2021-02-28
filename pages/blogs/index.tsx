import Head from 'next/head'
import { BlogPosts } from '../../components/organisms/BlogPosts'
import { getBlogPosts } from '../../lib/contentful/client'
import styles from '../../styles/Home.module.css'

type Props = { posts: any }

const BlogsIndex: React.FC<Props> = ({ posts }) => {
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
export default BlogsIndex

export async function getStaticProps() {
  const posts = await getBlogPosts()
  return {
    props: {
      posts
    }
  }
}