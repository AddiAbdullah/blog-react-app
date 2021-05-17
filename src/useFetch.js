import {useState, useEffect} from 'react';
const useFetch =(url)=>{

    const[data, setData]= useState(null);
    const [isPending, setIsPending]= useState(true);
    const [error,setError]=useState(null);
    
    useEffect(()=>{
        const abortCont = new AbortController();

        setTimeout(()=>{
         fetch(url, {signal:abortCont.signal})
         .then(responseObj=>{
             if(!responseObj.ok){
                 throw Error('Could not fetch the data for that resource');
             }
           return  responseObj.json();
         })
         .then(data=>{
             setData(data);
             setIsPending(false);
             setError(null);
         })
         .catch(err=>{ 
             if (err.name==='AbortError'){
                 console.log('fetch aborted');
             }
             else{
            //  setData(null);
             setIsPending(false);
             setError(err.message);
                 }})
        },500 )
        return ()=> abortCont.abort();
 },[url]);
 return {data, isPending, error}
}

export default useFetch;