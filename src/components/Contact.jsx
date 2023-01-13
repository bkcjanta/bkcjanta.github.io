import { Box, HStack, Heading, Image, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { Form } from "./Form"
import { MdEmail } from "react-icons/md"
import { FaWhatsappSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa"
export const Contact = () => {
    return (
        <Box bg={useColorModeValue('blue.100', 'black.800')} textAlign={"center"} id="contact" py={["1rem", "3rem", "4rem"]}   >
            <Heading p={"5px"} mb="20px" pb={"10px"} borderBottom={"2px"} mx={"auto"} w={"200px"}>Contact </Heading>
            <Box m={"auto"} w="85%" borderLeft={"1px"} textAlign={"center"} borderBottom={"1px"} p={"2rem"} >
                <Stack direction={["column", "row"]}>
                    <Stack w={"50%"}>
                        <HStack>
                            <MdEmail color="yellow"  size={"30px"}/>
                            <Text>bhupendrafbook@gmail.com</Text>
                        </HStack>
                        <HStack>
                            <FaWhatsappSquare color="green" size={"30px"} />
                            <Link href="https://wa.me/919131616205" target={"_blank"}>+91 9131616206</Link>
                        </HStack>
                        <HStack>
                            <FaLinkedin color="rgb(11,103,194)" size={"30px"} />
                            <Link href="https://www.linkedin.com/in/bhupendra-kumar-chandrakar/" target={"_blank"}>Linkedin</Link>
                        </HStack>
                        <HStack>
                            <FaGithubSquare color="rgb(11,103,194)" size={"30px"} />
                            <Link href="https://github.com/bkcjanta" target={"_blank"}>Github</Link>
                        </HStack>
                    </Stack>
                    <Stack w={'50%'}>< Form /></Stack>
                </Stack>
            </Box>
        </Box>
    )
}