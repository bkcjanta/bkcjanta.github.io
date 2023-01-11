import { Box, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react"

export const About = () => {
    return (
        <Box bg={useColorModeValue('blue.100', 'black.800')} textAlign={"center"}  id="about" py={"4rem"}   >
            <Heading p={"5px"} mb="20px"  borderBottom={"2px"}mx={"auto"} w={"200px"} >About Me</Heading>
            <Box m={"auto"} w="85%" borderRight={"1px"} borderBottom={"1px"} p={"2rem"} >
            
            <Stack direction={"row"} justifyContent="space-between" >
                <Box w={["100%", "60%", "60%"]} textAlign={"left"}>
                    <Text> Hi, 👋 I'm </Text>
                    <Heading  >Bhupendra Kumar Chandrakar</Heading>
                    <Text >From Raipur, Chhattisgarh. I have completed my graduation as a bachelor of engineering in a computer science stream from Govt. Engg. college, Bilaspur, Chattisgarh.
                        After that I have completed my full Stack MERN development journey from Masai School, Banglore.
                        I'm capable of writing production-ready code using React.js, Redux.js, Chakra UI and CSS on the Front-end, and Node.js, Express.js,and MongoDB on the Backend to build single-page applications
                    </Text>
                    <Text textIndent={"50px"}>
                        Apart from that As a Web developer I always try to explore new technologies related to my field and try to implement those technologies to solve real world problems. 
                    </Text>
                </Box>
                <Box w={["0%", "30%", "30%"]} display={["none", "block", "block"]}>
                    <Image src="https://sithcomputers.com/wp-content/uploads/2021/02/Full-Stack-Developer-1.gif" />
                </Box>
            </Stack>
            </Box>
        </Box>
    )
}