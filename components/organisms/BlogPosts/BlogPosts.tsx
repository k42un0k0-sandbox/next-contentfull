import { BlogPost } from "../../../lib/contentful/model/blogPost"
import BlogTitle from "./BlogTitle"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


type Props = { blogPosts: BlogPost[] }

const BlogPosts: React.FC<Props> = ({ blogPosts }) => {
    return (
        <section>
            {blogPosts.map((post) => {
                return <article key={post.sys.id}>
                    <BlogTitle>
                        {post.fields.title}
                    </BlogTitle>
                    {documentToReactComponents(post.fields.body)}
                </article>
            })}
        </section>
    )

}
export default BlogPosts