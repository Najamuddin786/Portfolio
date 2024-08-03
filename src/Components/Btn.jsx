import { Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export default function Btn({size,to,lable}){
    return <>
        
                 <Link to={to}><Button w={size} _hover={{bg:'#21618c',color:"white"}} variant='outline'  color='#21618c' colorScheme="#21618c">{lable}</Button ></Link>
                   
    </>
}