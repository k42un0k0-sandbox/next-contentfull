import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import React from 'react'
import { BlogTitle } from '../../components/organisms/BlogPosts'
import { BuildMode } from '../../constants/env'
import { getBlogPost, getBlogPosts } from '../../lib/contentful/client'
import { BlogPost } from '../../lib/contentful/model/blogPost'
import styles from '../../styles/Home.module.css'

type Props = { post: BlogPost }

const BlogsShow: React.FC<Props> = ({ post }) => {
    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>{post.fields.title} | Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <article key={post.sys.id}>
                <BlogTitle>
                    {post.fields.title}
                </BlogTitle>
                {documentToReactComponents(post.fields.body)}
            </article>
        </div>
    )
}
export default BlogsShow

const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({ params }) => {
    try {
        const post = await getBlogPost(params.slug)
        return {
            props: {
                post
            }
        }
    } catch (e) {
        return { notFound: true }
    }
}

const getStaticPaths: GetStaticPaths = async () => {
    // Call an external API endpoint to get posts
    const blogPosts = await getBlogPosts()

    // Get the paths we want to pre-render based on posts
    const paths = blogPosts.map((post) => ({
        params: { slug: post.sys.id },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: BuildMode.isPreview }
}

export { getStaticProps, getStaticPaths }