import { Box,Button,Flex,Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import resume from '../assets/resume.pdf'

export default function Navbar(){
    let navbar=[
        {lable:'Home',to:'/#home'},
        {lable:'About',to:'/#about'},
        {lable:'Project',to:'/#project'},
        {lable:'Skills',to:'/#skills'},
        {lable:'Contact',to:'/#contact'},
        {lable:'RESUME',to:'/#ResumeDownload'},
    ]

    const handleDownload = () => {
        const url = {resume}; // Replace with your file URL
        const link = document.createElement('a');
        link.href = url;
        link.download = 'file.pdf'; // Replace with your desired file name
        document.body.appendChild(link);
        link.click();
        // document.body.removeChild(link);
      };

    // function LeftSide(){
    //     return <>
                
    //     </> 
    // }

    return <>
        <Flex zIndex={1000} position={'sticky'} opacity={'0.98'} top={'0px'}  boxShadow="0 1px 20px 1px rgba(33, 97, 140, 0.5)" py='15px' align={'center'} px={{base:'5%',md:"5%",lg:"10%"}} bg='white' justifyContent={'space-between'}>
            <Link to={'/#home'}>
            <Box cursor={'pointer'}  fontWeight={'700'} fontSize={'24px'} color={'white'}><Box py='5px' pl={'15px'} bg='#eb4d4b' as="span">PORT</Box><Box bg='#21618c' py='5px' pr={'15px'} as="span">FOLIO</Box></Box>
            </Link>
            <Flex color={' #566573 '}  fontSize={'20px'} fontWeight={600} align={'center'} gap='5'>
            {
                navbar?.map((ele,i)=>{
                 return   <Box key={i}>
                    {ele.lable=="RESUME" ? <Link to={ele.to}><Button _hover={{bg:'#21618c',color:"white"}} variant='outline'  color='#21618c' colorScheme="#21618c" onClick={handleDownload}>{ele.lable}</Button ></Link> :<Link to={ele.to}><Text>{ele.lable}</Text></Link>}
                    </Box>
                })
            }
            </Flex>
        </Flex>
    </>
}