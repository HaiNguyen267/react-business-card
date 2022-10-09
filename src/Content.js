
function Content({contentJson}) {
    console.log(contentJson);
    
    return (
        (Object.entries(contentJson).map(([title, body]) => {
            return (
                <div className="content">
                    <h1 className="content-title">{title}</h1>
                    <p className="content-body">{body}</p>

                </div>
            )
        })
    ))
}

export default Content