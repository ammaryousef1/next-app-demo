import Link from "next/link";

const PostsPage = async () => {
  const response = await fetch( "https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json()

  return (
      <div style={{ display: 'flex' ,  justifyContent: 'center' , alignItems: 'center' , flexDirection: 'column' ,  padding: '10px'}}>{posts.map((post) => (
        <Link href={`/posts/${post.id}`} >
        <div style={{ width:'90%'  , background: 'white' , padding: '20px' , margin:'10px 0' , borderRadius: '10px'}} >
          <h4 style={{ color: 'black' , marginBottom: '10px'}}>{post.title}</h4>
          <p style={{ color: 'black'}}>{post.body}</p>
        </div>
        </Link>
      ))}</div>
  )
}
 
export default PostsPage

