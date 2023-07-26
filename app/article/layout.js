

export const  metadata = {
    title:'articles page'
}
const layout = ({children}) => {
  return (
    <div>
        <h1>Articles</h1>
        <div
        style={{
            marginTop: '50px', 
            background: "blue",
            borderRadius: "10px" ,
            padding: "20px", 
            margin: '20px 10px'
        }}
        >{children}</div>
    </div>
  )
}

export default layout