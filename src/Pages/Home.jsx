import { Box,Flex,Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Btn from "../Components/Btn";
import Main from "../Components/Main";
import About from "../Components/About";
import Skill from "../Components/Skill";

export default function Home(){

    return <>
        <Navbar/>
        <Main/>
        <About/>
        <Skill/>
    </>
}