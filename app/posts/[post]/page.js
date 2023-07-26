

const  page = async ({params}) => {
  const postId = params.post

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  })

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await response.json()

  return (
    <div style={{margin: '20px'}}>
      <h2>Post Details</h2>

      <div style={{background:'white' , padding: '20px' , borderRadius: '10px', margin: '20px' }}>
        <h4 style={{ color: 'black'}}>{post.title}</h4>
        <p style={{ color: 'black' , marginTop: '10px'}}>{post.body}</p>
      </div>
    </div>
  )
}

export default page