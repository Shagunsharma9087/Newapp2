function pagination({postPerPage,totalPosts,paginate})
{
    const pageNumbers=[];
    console.log(totalPosts)
    for(let i=1;i<=Math.ceil(totalPosts/postPerPage);i++)
    {
        pageNumbers.push(i);
    }
    return(
        <nav>
            <ul>
                {
                    pageNumbers.map((num,index)=>{
                        return <li class="paginationlist" key={index}>
                            <a href="!#" onClick={()=>paginate(num)}>
                                {num}
                            </a>
                        </li>
                    })
                }
                 
            </ul>
        </nav>
        
    )
}
export default pagination

