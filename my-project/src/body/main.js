import First from "./firstbody";
import Second from "./secondbody";
import Third from "./thirdbody";
import Fourth from "./fourthbody";
import {HashLink} from 'react-router-hash-link'
import { useState } from "react";
function Main(){
const [sending, receiving] = useState();
    return(
        <div>
            <First/>
            <Second/>
            <Third/>
            <Fourth/>
        </div>
    )
}
export default Main;