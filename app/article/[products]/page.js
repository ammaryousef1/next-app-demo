

const page = (props) => {

  return (
    <div>
        <h2>show all products</h2>
        <h3>{props.params.products}</h3>
    </div>

  )
}

export default page