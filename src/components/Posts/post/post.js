const Post = ({value, lift}) => {
    return (
        <div>
            {
                <p>
                ID: {value.id}<br/>
                Title: {value.title}<br/>
                    <button onClick = {() => {lift(value)}}> Details </button>
                </p>

                    }
        </div>
    )
}

export default Post;