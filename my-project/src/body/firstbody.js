import { useEffect, useState } from 'react';
import {AiOutlineDown} from 'react-icons/ai';
import Axios from "axios";
import {HashLink} from 'react-router-hash-link'
function First(){
    const [api , setapi] = useState([{}])
    useEffect(()=>{
    //     Axios.get(" https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
    // .then((res)=>setapi(res.data))

    async function work(){
        try {
            const res = await Axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
            setapi(res.data)
        } catch (error) {
            setapi([{
                image:"",
                name:" "
            }])
        }
    }
    work();
   

    },[])
    // api.map((e)=>console.log(e))
    
        
    return(
        <div id="home" className=" text-white flex flex-col font-bold items-center pt-44 sm:pt-64 lg:pt-52 gap-3 ml-2 mr-2 pb-44 sm:pb-44">
            
            <div className='flex flex-row items-center gap-4'>
                <div className='w-1/2 mr-4 flex justify-end animate-bounce-slow'>
                    <img className='w-1/2 hidden lg:block' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"></img>
                </div>
                <label className=" text-5xl sm:text-6xl sm:whitespace-nowrap xl:text-8xl">TRACK AND TRADE</label>
                <div className='w-1/2 flex justify-start animate-bounce-slow'>
                    <img className='w-1/2 hidden lg:block' src="https://cryptologos.cc/logos/ethereum-eth-logo.png"></img>
                </div>
            </div>
            <label  className=" text-5xl sm:text-7xl text-blue-700 xl:text-8xl">CRYPTO<span className=" text-purple-700"> CU<span className="text-purple-500">RR</span></span><span className=" text-purple-400">ENC</span><span className=" text-purple-300">IES</span></label>
            <div className="hidden lg:block">
                <div className="flex flex-row mt-10 font-serif text-md text-xl">
                    {api.map((e)=>{
                        while(e.market_cap_rank<=4){
                            return(
                               
                                    <div key={e.id} className='lg:mt-20'>
                                        <div className=" flex justify-center mb-4">
                                            <img alt='coins_images' className=" w-1/3 text-white" src={e.image} />
                                        </div>
                                        <div>
                                            <p>{e.name}</p>
                                        </div>
                                    </div>
                                
                            )
                        }
                    })}
                </div>
            </div>
            

 
            <div className='sm:hidden w-full flex justify-center'>
                <div style={{background: " linear-gradient(25deg, #2600fc, #ff00ea)"}} className=" rounded-3xl w-1/2  mt-10 p-5 hover:cursor-pointer">
                    <HashLink to={"/#market"}>
                        <div className=" text-lg sm:text-xl font-mono flex flex-row items-end justify-center">
                            <div className=' mr-2'>See Prices</div>
                            <div className=' font-bold text-2xl'><AiOutlineDown/></div>
                        </div>
                    </HashLink>
                </div>
            </div>
        </div>
    )
}
export default First;