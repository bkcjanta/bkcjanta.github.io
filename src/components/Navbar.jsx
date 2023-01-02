import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

const Links = [{tag:'Home',id:"#home"}, {tag:'About',id:"#about"}, {tag:'Skills',id:"#skills"}, {tag:'Projects',id:"#projects"}, {tag:'Contact',id:"#contact"}, {tag:'Resume',id:"#resume"}];

const NavLink = ({props,onClose }) => (
  <Link id='navItem'
      px={2}
      py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={props.id=="#resume"?"https://drive.google.com/file/d/1Q1ukOgTEhEE4Rwc2gfCGIuNga2gxVHSU/view?usp=sharing":props.id}
    target={props.id=="#resume"?"_blank":"_parent"}
    onClick={onClose}

    >
   <h1> {props.tag}</h1>
  </Link>
);
const logo="<Bhupendra/>"

export const  Navbar=()=> {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box position={"sticky"} top={0}  bg={useColorModeValue('blue.200', 'blue.700')} px={{base:4,sm:4,md:4,lg:10}} >
        <Flex  w={"100%"} h={16} alignItems={'center'} justifyContent={'space-between'}>
          
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          
          <HStack  w={{base:"65%",sm:"60%",md:"100%",lg:"100%"}} justifyContent={"space-between"}>
            <Heading size={"sm"} >{logo}</Heading>
            <Button display={{md:'none',lg:'none'}} onClick={toggleColorMode} p="0px">
                {colorMode === 'light' ? <MoonIcon m="0px" /> : <SunIcon m="0px " />}
              </Button>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink onClose={onClose}  key={link} props={link}/>
              ))}
              <Button  onClick={toggleColorMode} p="0px"  >
                {colorMode === 'light' ? <MoonIcon m="0px"  /> : <SunIcon m="0px " />}
              </Button>
            </HStack>
          </HStack>

        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
                <NavLink onClose={onClose} key={link} props={link}/>
              ))}
              
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}