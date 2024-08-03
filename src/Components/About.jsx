import { Box,Flex,Text,Button,Image } from "@chakra-ui/react";
import resume from '../assets/resume.pdf'
import { Link } from "react-router-dom";
import Btn from "./Btn";
import image from '../assets/photo.png'
import '../App.css'

const handleDownload = () => {
    const url = {resume}; // Replace with your file URL
    const link = document.createElement('a');
    link.href = url;
    link.download = 'file.pdf'; // Replace with your desired file name
    document.body.appendChild(link);
    link.click();
    // document.body.removeChild(link);
  };


export default function About(){



    return <>
        <Flex id="about" gap='10'  p='2% 20%' my='10%' fontSize={'26px'} fontWeight={600} >
            <Flex flexDir={'column'} gap='10' >
            <Flex align={'center'}><Text color='#21618c' >02. </Text><Text >---------------About Me---------------</Text></Flex>
            <Flex fontSize={'18px'}  align={'center'}>
                <Flex  gap='10' flexDir={'column'}>
                    <Text opacity={'0.6'}>
                        Hello, I'm Md Najamuddin, a curious and results-oriented Full Stack Web Developer. I have honed my skills through practicing over 700 data structures and algorithms and have over 1200 hours of practical experience in coding and developing real-world web       applications. <br />
                        At Masai School I have successfully completed following:
                    </Text>
                    <Flex textAlign={'center'} justifyContent={'space-between'}>
                        <Box>
                            <Text fontSize={'24px'} fontWeight={700} color='#21618c'>1200+</Text>
                            <Text opacity={'0.6'}>Hours of coding</Text>
                        </Box>
                        <Box>
                            <Text color='#21618c' fontSize={'24px'} fontWeight={700}>500+</Text>
                            <Text opacity={'0.6'}>DSA Problems</Text>
                        </Box>
                        <Box>
                            <Text color='#21618c' fontSize={'24px'} fontWeight={700}>4+</Text>
                            <Text opacity={'0.6'} >Projects</Text>
                        </Box>
                    </Flex>
                    <Link to={''}><Button onClick={handleDownload}  _hover={{bg:'#21618c',color:"white"}} variant='outline'  color='#21618c' colorScheme="#21618c">Download CV</Button ></Link>
                </Flex>

            </Flex>
            </Flex>
            <Flex align='center'  p='5px' display={'flex'} justifyContent={'right'}>
                <Box className="rotating-div" cursor={'pointer'} border={'2px'} borderColor={'#21618c'} borderRadius={'500px'}>
                <Image borderRadius={'500px'}  src={image} minW='240px' minH='300px' maxH='300px' />
                </Box>
            </Flex>
        </Flex>
        
    </>
}