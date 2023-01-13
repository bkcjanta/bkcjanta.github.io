import { Box, Heading, Image, Link, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react"
import reactjs from "../assets/icons/react-icon.png";
import redux from "../assets/icons/redux-icon.png";
import github from "../assets/icons/github-icon.png";
import chakra from "../assets/icons/chakra-ui.png";
import html from "../assets/icons/html-icon.png";
import css from "../assets/icons/css-icon.png";
import nodejs from "../assets/icons/nodejs-icon.png";
import expressjs from "../assets/icons/expressjs-icon.png";
import mongodb from "../assets/icons/mongodb-icon.png";
import vscode from "../assets/icons/vscode-icon.png";
import javascript from "../assets/icons/javascript-icon.png";
import netlify from "../assets/icons/netlify-icon.png";

const icons = [
    { src: html, tag: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { src: css, tag: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { src: javascript, tag: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { src: reactjs, tag: "React JS", href: "https://reactjs.org/" },
    { src: redux, tag: "Redux", href: "https://redux.js.org/" },
    { src: chakra, tag: "Chakra UI", href: "https://chakra-ui.com/" },
    { src: nodejs, tag: "Node JS", href: "https://nodejs.org/en/about/" },
    { src: expressjs, tag: "Express JS", href: "https://expressjs.com/" },
    { src: mongodb, tag: "MongoDB", href: "https://www.mongodb.com/" },
    { src: github, tag: "GitHub", href: "https://docs.github.com/en/get-started/quickstart/hello-world" },
    { src: vscode, tag: "VScode", href: "https://code.visualstudio.com/docs/introvideos/basics" },
    { src: netlify, tag: "Netlify", href: "https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/" }
]

export const Skills = () => {
    return (
        <Box bg={useColorModeValue('blue.100', 'black.800')} textAlign={"center"} id="skills" py={"4rem"} color={useColorModeValue( 'black.800','whiteAlpha.800')}  >
            <Heading p={"5px"} mb="20px" pb={"10px"} borderBottom={"2px"} mx={"auto"} w={"200px"}>My Skills</Heading>
            <Box _hover={{bg: useColorModeValue("rgb(146, 188, 212)","rgb(28, 36, 50)" )}} m={"auto"} w="85%"  textAlign={"center"}  py={"2rem"} px={["1rem","1rem","2rem"]} boxShadow={"dark-lg"}>
                <SimpleGrid direction={"row"} columns={[2, 3, 4]} justifyContent={"space-between"} rowGap={10} columnGap={[10, 15, 20]} color={useColorModeValue('white', 'black.800')}>
                    {icons?.map((e, i) =>
                        <Link href={e.href} target="_blank">
                            <Box key={i} border={"1px"} py={"1rem"} _hover={{ bg: "blue.900", zoom: ".9", transition: "rotate(360deg)" }}  borderRadius={"10px"} bg={"black"} >
                                <Image className="t" m={"auto"} w={"20%"} src={e.src} />
                                <Text >{e.tag}</Text>
                            </Box>
                        </Link>
                    )}
                </SimpleGrid>
            </Box>
        </Box>
    )
}