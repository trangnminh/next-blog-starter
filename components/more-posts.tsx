import type Post from "../interfaces/post";
import PostPreview from "./post-preview";

type Props = {
  posts: Post[];
};

const MorePosts = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-5xl font-bold leading-tight tracking-tighter md:text-6xl">
        More Posts
      </h2>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default MorePosts;
