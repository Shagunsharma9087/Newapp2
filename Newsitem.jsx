function Newsitem(props)
{
    return(
        <div id="main">
            <h1 id="title "class="heading"> 
                {props.items.title}
            </h1>
            <div id="Description" class="descript">
                {props.items.description}
            </div>
            <div class="link">
                <a href={props.items.url}>{props.items.url}</a>
            </div>
            <div id="Author">
                <div>:Author:{props.items.author}</div>
                <div>{props.items.publishedAt}</div>
            </div>
        </div>
    )
}
export default Newsitem