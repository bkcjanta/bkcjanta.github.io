import { Box, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react"
import profile from "../assets/profile.jpg"
export const  Home=()=>{
    return(
        <Box textAlign={"center"} p={"4rem"} pt={["6rem"]} id="home" h="500px" alignItems={"start"} >
            <HStack justifyContent={"space-between"}>
                <Stack spacing={4} alignItems={"start"}   h="300px" textAlign={"left"} letterSpacing="3px">
                    <Text fontSize={"2rem"}>Welcome To My Portfolio</Text>
                    <Heading>Hello,</Heading>
                    <Heading>I'm Bhupendra Kumar Chandrakar </Heading>
                </Stack>
                <Box   w={["xs","sm","sm"]}>
                    <Image className="profile"  w={"80%"} borderRadius={"50%"}  src={profile}/>
                </Box>
            </HStack>
        </Box>
    )
}