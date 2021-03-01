import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import React from 'react'
import { BlogTitle } from '../../components/organisms/BlogPosts'
import { BlogPost } from '../../lib/contentful/model/blogPost'
import styles from '../../styles/Home.module.css'
import { client } from '../../lib/contentful/client'

type Props = { post: BlogPost, preview: boolean }

const BlogsShow: React.FC<Props> = ({ post, preview }) => {
    const router = useRouter()

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
                {preview &&
                    <a href="/api/clear_preview_cache">
                        clear cache
                    </a>
                }
                <BlogTitle>
                    {post.fields.title}
                </BlogTitle>
                {documentToReactComponents(post.fields.body)}
            </article>
        </div>
    )
}
export default BlogsShow

const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({ params, preview = false, previewData }) => {
    try {
        const post = preview ? previewData : await client.getBlogPost(params.slug)
        return {
            props: {
                post,
                preview
            }
        }
    } catch (e) {
        return { notFound: true }
    }
}

const getStaticPaths: GetStaticPaths = async (context) => {
    const blogPosts = await client.getBlogPosts()

    const paths = blogPosts.map((post) => ({
        params: { slug: post.sys.id },
    }))

    return { paths, fallback: true }
}

export { getStaticProps, getStaticPaths }