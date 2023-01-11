import { Box, HStack, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import profile from "../assets/profile.jpg"
import bg1 from "../assets/bg1.gif"
import { m } from "framer-motion"
export const Skills = () => {
    return (
        <Box bg={useColorModeValue('blue.100', 'black.800')} textAlign={"center"}  id="skills" py={"4rem"}   >
            <Heading p={"5px"} mb="20px" pb={"10px"} borderBottom={"2px"}mx={"auto"} w={"200px"}>My Skills</Heading>
            <Box m={"auto"} w="85%" borderLeft={"1px"} borderBottom={"1px"} p={"2rem"} >
            
            <Stack direction={"row"} justifyContent="space-between" >
                
            </Stack>
            </Box>
        </Box>
    )
}