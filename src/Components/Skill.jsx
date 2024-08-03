import { Flex ,Box,Text,Image} from "@chakra-ui/react"
import '../App.css'

export default function Skill(){
    let skill=[
        {lable:"HTML5",url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
        {lable:"CSS3",url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},
        {lable:"JavaScript",url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
        {lable:"React",url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
        {lable:"Express.js",url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"},
        {lable:"Node.js",url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
        {lable:"MongoDB",url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},
        {lable:"SQL",url:"https://binodokheda.github.io/assets/img/icon/sql.png"},
        {lable:"Mongoose",url:"https://binodokheda.github.io/assets/img/icon/mongoose.png"}
    ]
    let skillTool=[
        {lable:"VS Code",url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"},
        {lable:"Git",url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},
        {lable:"Github",url:"https://www.svgrepo.com/show/217753/github.svg"},
        {lable:"NPM",url:"https://binodokheda.github.io/assets/img/icon/npm.png"},
        {lable:"Netlify",url:"https://binodokheda.github.io/assets/img/icon/netlify.png"},
        {lable:"Canva",url:"https://binodokheda.github.io/assets/img/icon/canva.png"},
        {lable:"Postman",url:"https://binodokheda.github.io/assets/img/icon/postman-icon.webp"},
        {lable:"Cyclic",url:"https://d4.alternativeto.net/cZTqveQCg2LUZPI-jYCtVQm1ric1mJetMNX-eOpvDJw/rs:fill:280:280:0/g:ce:0:0/YWJzOi8vZGlzdC9pY29ucy9jeWNsaWNfMjA0ODgwLnBuZw.png"}
    ]

    return <>
        <Flex p='5% 20%' flexDir={'column'}>
            <Box fontWeight={700} fontSize={'24px'}><Box as='span' color={'#21618c'}>04</Box><Box as='span'>--------------- Skills---------------</Box></Box>
            <Text my='20px' color={'#21618c'} fontSize={'24px'}>Tech Stacks</Text>
            <Flex   gap={10} justifyContent={'space-between'} flexWrap={'wrap'}>
               {skill.map((e,i)=>{
                return <Flex key={i} justifyContent={'center'} align={'center'} flexDir={'column'} w='150px' h='150px' className="rotating-div" cursor={'pointer'}  style={{border:'2px solid #21618c',borderRadius:'150px'}}> <Image w='50px'  src={e.url}/><Text fontSize={'24px'} fontWeight={600} textAlign={'center'}>{e.lable}</Text></Flex>
               })}
            </Flex>
            
            <Text my='20px' color={'#21618c'} fontSize={'24px'}>Tools & Libraries</Text>
            <Flex   gap={10} justifyContent={'space-between'} flexWrap={'wrap'}>
               {skillTool.map((e,i)=>{
                return <Flex key={i} justifyContent={'center'} align={'center'} flexDir={'column'} w='150px' h='150px' className="rotating-div" cursor={'pointer'}  style={{border:'2px solid #21618c',borderRadius:'150px'}}> <Image w='50px'  src={e.url}/><Text fontSize={'24px'} fontWeight={600} textAlign={'center'}>{e.lable}</Text></Flex>
               })}
            </Flex>

        </Flex>
    </>
}