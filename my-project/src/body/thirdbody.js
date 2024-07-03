import { useEffect, useState } from "react";
import {BiSolidWallet} from "react-icons/bi";
import {LiaPencilRulerSolid} from "react-icons/lia";
import {SlEnergy} from "react-icons/sl";
import {FaSatelliteDish,FaChessKnight} from "react-icons/fa";
import {BsFillBoxFill} from "react-icons/bs";
import { HashLink } from "react-router-hash-link";
function Third(){
    const [info,setInfo] = useState([])
    const arr = [
        {
            id:1,
            heading:"CONNECT YOUR WALLET",
            para: "Use Trust Wallet, Metamask or to connect to the app.",
            src: <BiSolidWallet/>
        },
        {
            id:2,
            heading:"SELECT YOUR QUANTITY",
            para: "Upload your crypto and set a title, description and price.",
            src: <LiaPencilRulerSolid/>
        },
        {
            id:3,
            heading:"CONFIRM TRANSACTION",
            para: "Earn by selling your crypto on our marketplace.",
            src:<SlEnergy/>
        },
        {
            id:4,
            heading:"RECEIVE YOUR OWN NFTS",
            para:"Invest all your crypto at one place on one platform.",
            src:<FaSatelliteDish/>
        },
        {
            id:5,
            heading:"TAKE A MARKET TO SELL",
            para: "Discover, collect the right crypto collections to but or sell.",
            src:<FaChessKnight/>
        },
        {
            id:6,
            heading: "DRIVE YOUR COLLECTION",
            para:"We make it easy to Discover, Invest and manage.",
            src:<BsFillBoxFill/>
        }
        
    ]
    useEffect(()=>{
        setInfo(arr)
    },[])
    
    return(
        <div id="third" className="pt-28 ">
                <h1 className=" pb-28 p-10 text-7xl text-white font-bold">WHY<span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500"> CHOOSE US</span></h1>
                
                {info.map((e)=>{
                    return(
                        <div key={e.id} className="ml-4 mr-4 sm:ml-0 sm:mr-0 flex flex-col justify-center items-center pb-8  text-white">
                        <div className="p-7 sm:w-3/5 border-2 border-gray-800 bg-gray-900 rounded-2xl  grid grid-cols-2 lg:grid-cols-[200px_800px]">
                            <div className="flex justify-center items-center">
                                <div style={{background: " linear-gradient(25deg, #2600fc, #ff00ea)"}} 
                                    className=" text-4xl flex items-center justify-center rounded-xl h-14 w-20">
                                    <p>{e.src}</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 justify-start">
                                <h1 className="text-2xl text-left font-bold ">{e.heading}</h1>
                                <p className="text-xl text-left">{e.para}</p>
                            </div>
                        </div>
                    </div>
                    )
                    
                })}
                
                {/* <div className="flex justify-center ">
                    <div className="p-7 w-3/5 border-2 border-gray-800 bg-gray-900 rounded-2xl text-white flex flex-row justify-center gap-9">
                        <div style={{background: " linear-gradient(25deg, #2600fc, #ff00ea)"}} 
                            className="text-4xl flex items-center justify-center rounded-xl h-14 w-20">
                            <p><BiSolidWallet/></p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1 className="text-2xl text-left font-bold ">CONNECT YOUR WALLET</h1>
                            <p className="text-xl text-left">Use Tryes Wallet, Metamask or to connect to the app.</p>
                        </div>
                    </div>
                </div> */}
        </div>
    )
}

export default Third;