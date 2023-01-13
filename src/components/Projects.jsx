import { Box, HStack, Heading, Image, Link, SimpleGrid, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import asos from "../assets/projects/asos.jpg"
import jiomart from "../assets/projects/jiomart.jpg"
import amazon from "../assets/projects/amazon.jpg"
export const Projetcs = () => {
    return (
        <Box bg={useColorModeValue('blue.100', 'black.800')} textAlign={"center"} id="projects" py={["1rem", "3rem", "4rem"]}   >
            <Heading p={"5px"} mb="20px" borderBottom={"2px"} mx={"auto"} w={"200px"} >Projects</Heading>
            <Box _hover={{bg: useColorModeValue("rgb(146, 188, 212)","rgb(28, 36, 50)" )}} m={"auto"} w="85%" py="2rem" px={["1rem","1rem","2rem"]} boxShadow={"dark-lg"}  >
                <SimpleGrid direction={"row"} columns={[1, 2, 3]} spacing={5} textAlign={"left"} color={"whiteAlpha.700"} >
                    <Stack spacing={4} _hover={{ bg: "blue.900" }} bg={"black"} p={["15px"]} borderRadius={"15px"}  >
                        <Text alignSelf={"center"} fontWeight={"bold"}>Asos clone</Text>
                        <Image cursor={"pointer"} src={asos} opacity={.7} />
                        <Text fontSize={"14px"}>Asos is an UK based e-commerce online store for fashion and beauty products like cloths, footwear,beauty and accessories. </Text>
                        <Text fontSize={"14px"}>It is a collaborative project build by a team of 5 members in 5 days.</Text>
                        <Text fontSize={"14px"}>Tech Stack used :- HTML | CSS | JavaScript | React | Redux | ChakraUI | Github | Netlify etc. </Text>
                        <HStack justifyContent={"space-around"}>
                            <Link href="https://asos-team-robin.netlify.app/" target={"_blank"} className="project-link">Live</Link>
                            <Link href="https://github.com/mehfoozkhangithub/tangible-robin-3650/tree/main/team_robin" target={"_blank"} className="project-link">Code</Link>
                        </HStack>
                    </Stack>
                    <Stack spacing={4} p={"15px"} _hover={{ bg: "blue.900" }} bg={"black"} borderRadius={"15px"} >
                        <Text alignSelf={"center"} fontWeight={"bold"}>Jiomart clone </Text>
                        <Image cursor={"pointer"} src={jiomart} opacity={.7} />
                        <Text fontSize={"14px"}>JioMart is an Indian E-coomerce online store for grocery and daily needs products like fruits, vegetables, rice, edable oil etc. </Text>
                        <Text fontSize={"14px"}>It is a collaborative project build by a team of 5 members in 5 days.</Text>
                        <Text fontSize={"14px"}>Tech Stack used :- HTML | CSS | JavaScript | React | Redux | ChakraUI | NodeJS | MongoDB | Github | Netlify etc.</Text>
                        <HStack justifyContent={"space-around"}>
                            <Link href="https://jiomart-octagon.netlify.app/" target={"_blank"} className="project-link">Live</Link>
                            <Link href="https://github.com/darshancoder/solid-scarecrow-3984" target={"_blank"} className="project-link">Code</Link>
                        </HStack>

                    </Stack>
                    <Stack spacing={4} _hover={{ bg: "blue.900" }} bg={"black"} p={"15px"} borderRadius={"15px"} >
                        <Text alignSelf={"center"} fontWeight={"bold"}>Amazon clone</Text>
                        <Image cursor={"pointer"} src={amazon} opacity={.7} />
                        <Text fontSize={"14px"}>Amazon is an American Multination e-commerce online store for various products like, beauty, fashion, books,electronics and various accessories. </Text>
                        <Text fontSize={"14px"}>It is a indivisual project build by  in 10 days.</Text>
                        <Text fontSize={"14px"}>Tech Stack used :- HTML | CSS | JavaScript | React | Redux | ChakraUI | NodeJS | MongoDB | Github | Netlify etc.</Text>
                        <HStack justifyContent={"space-around"}>
                            <Link href='#' target={"_blank"} className="project-link">Live</Link>
                            <Link href='https://github.com/bkcjanta/amazon' target={"_blank"} className="project-link">Code</Link>
                        </HStack>
                    </Stack>
                </SimpleGrid>
            </Box>
        </Box>
    )
}