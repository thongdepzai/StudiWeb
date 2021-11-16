import React, { useState } from "react";
import PayPal from "./PayPal";



export default function Checkout(){
    const [checkout, setCheckOut] = useState(false);
    return(
        <div>
            <PayPal/>
        </div>
    )
}