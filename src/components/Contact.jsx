import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react"

export const  Contact=()=>{
    return(
        <Box textAlign={"center"} p={20} id="contact" h="500px" >
            <h1>Constact  page</h1>
            <Stack justifyContent={"space-between"} direction={["column", "row", "row"]} alignContent="center" border={"1px"}>
                <Stack border={"1px"} spacing={4} alignItems={"start"} h="300px" textAlign={"left"} w={["90%","50%","50%"]} letterSpacing="3px">
                    <Text fontFamily={"monospace"} fontSize={"2rem"}>Welcome To My Portfolio</Text>
                    <Text fontSize={"2rem"}>Hello,</Text>
                    <Heading>I'm Bhupendra Kumar Chandrakar </Heading>
                </Stack>
                <Box mr={"200px"} border={"1px"} w={["90%","50%","50%"]}>
                    <Image m={"auto"} className="profile" w={["80%", "90%", "100%"]} borderRadius={"50px"}  />
                </Box>
            </Stack>
        </Box>
    )
}