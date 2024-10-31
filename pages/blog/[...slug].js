
import { useRouter } from "next/router";


function BlogPostsPage() {

  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  )
}

export default BlogPostsPage;

// ths component is a catch all component, maybe you want to render a blog in a specific date 
// https://localhost/3000/blog/2024/02/id-of-the-post
// or.. all posts in a date
// https://localhost/3000/blog/2024/02 or anything 
// and this component should render all of that so we call it [...slug].js and next.js will treat it in a special way
