import { Box, Heading, Image, Link, SimpleGrid, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import GitHubCalendar from 'react-github-calendar';
export const GitStatus = () => {
    return (
        <>
            <Box bg={useColorModeValue('blue.100', 'black.800')} textAlign={"center"} id="" py={"4rem"}   >
                <Heading p={"5px"} mb="20px" pb={"10px"} borderBottom={"2px"} mx={"auto"} width={"fit-content"}>Github Status</Heading>
                <Box _hover={{ bg: useColorModeValue("rgb(146, 188, 212)", "rgb(28, 36, 50)") }} m={"auto"} w="85%" alignItems={"center"} py={["2rem", "4rem", "5rem"]} px={["1rem", "1rem", "rem"]} boxShadow={"dark-lg"}>
                    <Box p={"2rem"} borderRadius={"5px"} bg={"black"} pl={["1rem", "1.5rem", "3rem", "5rem"]} border={"1px"}>
                        <Text mb={"10px"} fontSize={"24px"} fontWeight={"bold"}>Contribution Calender</Text>
                        <GitHubCalendar username="bkcjanta" theme={{ level0: "rgb(28,36,50)", level1: "rgb(0,56,32)", level2: "rgb(0,96,45)", level3: "rgb(16,152,61)", level4: "rgb(39,213,69)" }} showWeekdayLabels />
                    </Box>
                    <Box p={[,"1rem","3rem","5rem"]} >
                        <Stack >

                            <Stack direction={["column","row","row"]}>
                            <Image h={"200px"} src="https://github-readme-stats.vercel.app/api/top-langs?username=bkcjanta&show_icons=true&theme=dark"
                                media="(prefers-color-scheme: dark)" alt="Top Languages" />
                            <Image h={"200px"} src="https://github-readme-stats.vercel.app/api?username=bkcjanta&show_icons=true&theme=dark"
                                media="(prefers-color-scheme: dark)" alt="Status" />
                            </Stack>
                            <Image h={"200px"} src="https://github-readme-streak-stats.herokuapp.com?user=bkcjanta&theme=dark" alt="Streak" />

                        </Stack>
                    </Box>
                </Box>
            </Box>
        </>
    )
}