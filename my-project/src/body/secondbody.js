
import { useEffect, useState } from "react";
import Axios from "axios";
import { HashLink } from "react-router-hash-link";
function Second(props){
    const [a,seta] = useState(1);
    const [b, setb] = useState(8);
    const [api,SetApi] = useState([{
        symbol:"Data is loading"
    }])
    const [newAPI, setnewapi] = useState([{
        
    }]) 
    // https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd
    // Axios.get("https://api.coinlore.net/api/tickers/")
    //     .then((res)=>{
    //        SetApi(res.data.data) 
    //     }).catch(()=>{
    //         SetApi([{
    //             symbol:"Data is loading"
    //         }])
    //     })
    async  function fetch(){
        try{
            let first = await Axios.get("https://api.coinlore.net/api/tickers/")
            SetApi(first.data.data);
        }
           catch(error){
            SetApi([{
                name:"Loading...",
                price_usd:"Loading..",
                percent_change_24h:"Loading...",
                market_cap_usd:"Loading..."

            }])
           }
       }
    useEffect(()=>{
        fetch();
    },[])
    
    //    fetch();
  
    setTimeout(()=>{
       fetch();
    },15000)
    useEffect(()=>{  
       setnewapi(api)   
       
    },[api])


    return(
        <div id="market" className="text-white flex m-8 lg:pt-36 pt-10 sm:m-16 sm:mt-0 flex-col">
            <h1 className="text-4xl sm:text-5xl font-sans font-semibold flex justify-start ">Market Update</h1>
            <div className="border-b-2 w-full whitespace-nowrap overflow-auto">
                <div style={{
                    background: " linear-gradient(25deg, #2600fc, #ff00ea)" ,
                    minWidth:"900px"
                    }} className=" w-fit mt-10 grid grid-cols-[210px_210px_210px_210px] lg:grid-cols-[300px_300px_300px_300px] xl:grid-cols-[300px_300px_300px_500px] p-5  rounded-t-xl text-3xl font-semibold ">
                    <div className="flex justify-start"> <h1>Coin</h1></div>
                    <div className="flex justify-center "><h1 >Price</h1></div>
                    <div className="flex justify-center"><h1 >24hChange</h1></div>
                    <div className="flex justify-center"><h1>Market Cap</h1></div>                
                </div>
                <div className=" whitespace-nowrap">
                {newAPI.map((e)=>{   
         
                        while((e.rank>=a && e.rank<=b)|| e.name=="Loading..."){
                        return(
                            <div key={e.rank} className="flex flex-col min-w-fit pb-2">
                                 <div className=" min-w-full w-full grid grid-cols-[210px_210px_210px_210px] lg:grid-cols-[300px_300px_300px_300px] xl:grid-cols-[300px_300px_300px_500px]  text-2xl font-sans font-semibold p-4">
                                    <div className="w-full flex text-left justify-start">
                                        {/* <img className="w-7 mr-2" src={`${api[0].image}`}/> */}
                                        <label>{e.name}</label>
                                    </div>
                                    <div className=" flex justify-center "><p>$ {e.price_usd}</p></div>
                                  <div style={{color:e.percent_change_24h>=0?"#0ecb81":"red"}} id="GreenRed" className="w-full  flex justify-center "><p>{e.percent_change_24h} %</p></div>
                                    <div className="w-full flex justify-center "><p>$ {e.market_cap_usd}</p></div>  
                                </div>
                                  <div className=" bg-white h-1"></div>
                            </div>
                        )}
                    })}
                </div>
                 
            </div>
            


            
            <div className="flex flex-row gap-5 pt-8 justify-center font-sans font-semibold text-lg">
            <HashLink to={"/#market"}>
                <button  className=" rounded-full bg-white w-9 h-9 sm:h-12 sm:w-12 text-black hover:bg-purple-500 duration-150" onClick={()=>
                    {seta(1)
                      setb(8)}}>1</button>
            </HashLink>
            <HashLink to={"/#market"}>
                <button  className=" rounded-full bg-white w-9 h-9 sm:h-12 sm:w-12 text-black hover:bg-purple-500 duration-150" onClick={()=>
                    {seta(9)
                    setb(16)}}>2</button>
            </HashLink>
            <HashLink to={"/#market"}>
                <button  className=" rounded-full bg-white w-9 h-9 sm:h-12 sm:w-12 text-black hover:bg-purple-500 duration-150" onClick={()=>
                    {seta(17)
                    setb(24)}}>3</button>
            </HashLink>
            <HashLink to={"/#market"}>
                <button  className=" rounded-full bg-white w-9 h-9 sm:h-12 sm:w-12 text-black hover:bg-purple-500 duration-150" onClick={()=>
                    {seta(25)
                    setb(32)}}>4</button>
            </HashLink>
            <HashLink to={"/#market"}>
                <button  className=" rounded-full bg-white w-9 h-9 sm:h-12 sm:w-12 text-black hover:bg-purple-500 duration-150" onClick={()=>
                    {seta(32)
                    setb(39)}}>5</button>
            </HashLink>
            </div>
            
           
        </div>
    )
}
export default Second;

