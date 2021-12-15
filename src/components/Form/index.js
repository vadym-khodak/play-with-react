import React from "react";
import { Button } from "antd";

export const Form = () => {
    console.log("Hello World")
    let size = "small"
    return <form><input type="text"></input>
     <Button type="primary" shape="round"  size={size}>submit</Button>
    </form>    
 }
