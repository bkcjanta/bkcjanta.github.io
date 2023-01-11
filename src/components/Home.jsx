import { Box, HStack, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import profile from "../assets/profile.jpg"
import bg1 from "../assets/bg1.gif"
import { m } from "framer-motion"
export const Home = () => {
    return (
        <Box bg={useColorModeValue('blue.100', 'black.800')}  className="home" id="home" py={["4rem","7rem"]} >
             <Text textAlign="center"  fontSize={"20px"} color={useColorModeValue('black', "#b2dfdb")}>Welcome To My Portfolio</Text>
            <Box w={"85%"} m={"auto"} borderLeft={"1px"} borderBottom={"1px"} p={"2rem"} >
           
            <Stack w={"100%"}   justifyContent={"space-between"} py={["1rem","2rem"]}  direction={["column","column","row","row"]}  >
                <Stack textAlign={["center","center","left"]} spacing={2}>
                 <Text fontSize={"2xl"}>Hi, 👋 I'm</Text>
                 <Heading fontFamily={" 'Poppins', sans-serif"} fontSize={"40px"}>Bhupendra Kumar Chandrakar</Heading>
                 <Text color={useColorModeValue('black', "#b2dfdb")} fontSize={"18px"}  >Full Stack MERN Developer from India. </Text>
                </Stack>
                 <Image alignSelf={"center"} m={"auto"} w={["150px","200px","250px"]} h={["150px","200px","250px"]} rounded={"100px"} src={profile}/>
                
            </Stack>  
            </Box>
        </Box>
    )
}