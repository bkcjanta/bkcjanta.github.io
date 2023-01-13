import { Box, HStack, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import profile from "../assets/profile.jpg"
export const Home = () => {
    return (
        <Box bg={useColorModeValue('blue.100', 'black.800')}  className="home" id="home" pt={["3rem","5rem"]} pb={"3rem"} >
             <Text textAlign="center" mb={"20px"}  fontSize={"20px"} color={useColorModeValue('black', "#b2dfdb")}>Welcome To My Portfolio</Text>
            <Box _hover={{bg: useColorModeValue("rgb(146, 188, 212)","rgb(28, 36, 50)" )}}  w={"85%"} m={"auto"} py="2rem"  px={[".5rem","1rem","2rem"]} boxShadow={"dark-lg"} >
           
            <Stack w={"100%"}   justifyContent={"space-between"} py={["1rem","2rem"]}  direction={["column","column","row","row"]}  >
                <Stack textAlign={["center","center","left"]} spacing={2}>
                 <Text fontSize={"2xl"}>Hi, 👋 I'm</Text>
                 <Heading fontFamily={" 'Poppins', sans-serif"} fontSize={["24px","30px","40px"]}>Bhupendra Kumar Chandrakar</Heading>
                 <Text color={useColorModeValue('black', "#b2dfdb")} fontSize={"18px"}  >Full Stack MERN Developer from India. </Text>
                </Stack>
                 <Image alignSelf={"center"} m={"auto"} w={["150px","200px","250px"]} h={["150px","200px","250px"]} rounded={"100%"} src={profile}/>
                
            </Stack>  
            </Box>
        </Box>
    )
}