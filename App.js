import logo from './logo.svg';
import './App.css';
import Newsitem from './Newsitem'
import './Newsitem.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination'
import pagination from './Pagination';
import './Pagination.css';

function App() {
  const [Input,setInput]=useState("");
  const [data,setData]=useState([]);
  const[loading,setloading]=useState(true);
  const [currentpage,setcurrentpage]=useState(1);
  const [postPerPage]=useState(10);
  useEffect(()=>{search(Input)
  setInterval(()=>{search(Input)},1000*60*60)},[])
  const indexOfLastPost=currentpage*postPerPage;
  const indexOfFirstPost =indexOfLastPost-postPerPage;
  const currentPosts=data.slice(indexOfFirstPost,indexOfLastPost);

  const paginate=(pageNumber)=>setcurrentpage(pageNumber)
  async function search(Input)
  {
    if(Input==="")
    {
      setloading(false);
       await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=f729ca24d4c442deb2a7f7744467da88")
      .then((response)=>
      {setData(response.data.articles)
        setloading(true);}
      );
    }
    else
    {
      setloading(false);
       await axios.get(`https://newsapi.org/v2/everything?q=${Input}&apiKey=f729ca24d4c442deb2a7f7744467da88`)
    .then((response)=>
    {
      setData(response.data.articles);
      setloading(true);
    }
    );
    }
     
  }
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <header>
      <span id="logo">
      <img src="https://th.bing.com/th/id/OIP.fBiovv4lt18eMU-z5iaP1wHaDt?w=303&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="React Image" />
     </span>
     <span id="second">
      Top Headlines
     </span>
      </header>
      <div id="search">
        <span><input type="text" value={Input} onChange={(event)=>setInput(event.target.value)}placeholder='Enter Something......'/></span>
        <span><button onClick={()=>{search(Input)}}>Search</button></span>
      </div> 
      {
        (!loading)? <h2>loading.....</h2>:
        currentPosts.map((items,index)=><Newsitem key={index} items={items}/>)
      }
      <div id="pagination">
      <Pagination postPerPage={postPerPage} totalPosts={data.length} paginate={paginate}/>
      </div>
    </div>
  );
}

export default App;
