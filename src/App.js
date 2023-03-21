import React, { useState, useEffect } from 'react';

const App=()=>{
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([]);

  const nexthandler=async()=>{
    const res = await fetch('https://randomuser.me/api');
    const {results} = await res.json();
    setData(results);
    setIsLoading(true)
    localStorage.setItem('dataKey', JSON.stringify(data))
  }
  useEffect(() => {
    nexthandler();
  }, []);
  
  console.log(data);
  return(
    <>
    <h1>Fetch API</h1>
    {(data && data.length>0 && data.map((item,index)=>{
      
       return(
         <>
         <div className="card" key={index}>
           
           <h3 key={index}>{item.name.title} {item.name.first} {item.name.last}</h3>
           
           <p key={index+2}>{item.email}</p>
          

           {console.log(index+1)}
         
        <button onClick={(index)=>nexthandler(index)} > Next </button>
        </div>
         </>
       )
     }))}
    </>
  )
}
export default App;