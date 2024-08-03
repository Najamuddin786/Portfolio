
import { Box,Flex,Text } from "@chakra-ui/react";
import Btn from "../Components/Btn";

export default function Main(){
    return <>
        <Flex gap='10' flexDir={'column'} p='2% 20%'>
            <Box fontWeight={600} color='#21618c'>Hi, my name is</Box>
            <Box fontSize={'65px'} fontWeight={700}>
                <Box>Md Najamuddin</Box>
                <Box mt='-10px'><Box as="span">Full Stack </Box><Box as="span" color='#21618c'>Node Developer</Box></Box>
            </Box>
            <Box fontSize={'18px'} opacity={'0.7'} w='60%' fontWeight={600} >A highly proficient backend developer experienced in contributing to collaborative work environments. Designed and implemented web applications involving multiple APIs, third-party integrations, and databases.</Box>
            <Btn size='150px' to='/#m' lable="Contact Me"/>
        </Flex>
    </>
}
