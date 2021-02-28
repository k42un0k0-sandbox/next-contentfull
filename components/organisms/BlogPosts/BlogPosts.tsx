import { BlogPost } from "../../../lib/contentful/model/blogPost"
import BlogTitle from "./BlogTitle"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Link } from "../../atoms/Link";


type Props = { blogPosts: BlogPost[] }

const BlogPosts: React.FC<Props> = ({ blogPosts }) => {
    return (
        <section>
            {blogPosts.map((post) => {
                return <Link href={`/blogs/${post.sys.id}`}>
                    <article key={post.sys.id}>
                        <BlogTitle>
                            {post.fields.title}
                        </BlogTitle>
                        {documentToReactComponents(post.fields.body)}
                    </article>
                </Link>
            })}
        </section>

    )

}
export default BlogPosts