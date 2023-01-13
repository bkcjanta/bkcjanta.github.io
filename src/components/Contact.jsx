import { Box, HStack, Heading, Image, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { Form } from "./Form"
import { MdEmail } from "react-icons/md"
import { FaWhatsappSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa"
export const Contact = () => {
    return (
        <Box bg={useColorModeValue('blue.100', 'black.800')} textAlign={"center"} id="contact" py={["1rem", "3rem", "4rem"]}   >
            <Heading p={"5px"} mb="20px" pb={"10px"} borderBottom={"2px"} mx={"auto"} w={"200px"}>Contact </Heading>
            <Box _hover={{bg: useColorModeValue("rgb(146, 188, 212)","rgb(28, 36, 50)" )}} m={"auto"} w="85%"  textAlign={"center"}  px={"2rem"} boxShadow={"dark-lg"} py={["1rem","3rem", "5rem"]}>
                <Stack direction={["column","column", "row"]}>
                    <Stack w={["100%","100%","50%"]}>
                        <HStack>
                            <MdEmail   size={"30px"} id="email"/>
                            <Text>bhupendrafbook@gmail.com</Text>
                        </HStack>
                        <HStack>
                            <FaWhatsappSquare size={"30px"} id="what" />
                            <Link href="https://wa.me/919131616205" target={"_blank"}>+91 9131616206</Link>
                        </HStack>
                        <HStack>
                            <FaLinkedin  size={"30px"} id="linkd" />
                            <Link href="https://www.linkedin.com/in/bhupendra-kumar-chandrakar/" target={"_blank"}>Linkedin</Link>
                        </HStack>
                        <HStack>
                            <FaGithubSquare  id='git' size={"30px"} />
                            <Link href="https://github.com/bkcjanta" target={"_blank"}>Github</Link>
                        </HStack>
                    </Stack>
                    <Stack w={["100%","100%",,"50%"]}>< Form /></Stack>
                </Stack>
            </Box>
        </Box>
    )
}