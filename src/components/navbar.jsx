import { HamburgerIcon } from "@chakra-ui/icons"
import { Box, Container, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Stack } from "@chakra-ui/react"
import { forwardRef } from "react"
import { NavLink as ReactRouterLink } from "react-router-dom"
import { IoLogoGithub } from 'react-icons/io5'
import ThemeToggleButton from "./theme-toggle-button"

const LinkItem = ({ path, children, ...props }) => {
  return (
    <Link _activeLink={{ fontWeight: "bold", backgroundColor: "red", textColor: "white", borderRadius: "5px", backdropFilter: 'blur(10px)' }} fontWeight={`500`} p={2} as={ReactRouterLink} to={path} {...props}>
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={ReactRouterLink} {...props} />
))

function Navbar() {
  return (
    <Box
      position={`fixed`}
      as="nav"
      w={`100%`}
      wrap={`wrap`}
      zIndex={2}
      css={{ backdropFilter: 'blur(10px)' }}
    >
      <Container
        display={`flex`}
        justify={`space-between`}
        maxW="container.md"
        wrap="wrap"
        align="center"
        p={`2`}
      >
        <Box fontSize={`24px`} mr={5} fontWeight={700}>
          St. Paul School
        </Box>

        <Stack
          marginRight={`1rem`}
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems={`center`}
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem path={`/`}>Home</LinkItem>
          <LinkItem path={`/students`}>Students</LinkItem>
          <LinkItem path={`/teachers`}>Teachers</LinkItem>
          <LinkItem
            display={`inline-flex`}
            pl={2}
            alignItems={`center`}
            style={{ gap: 8 }}
            path={`https://github.com/harshv5094/school-management-app`}>
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Box
          flex={1}
          align="right"
        >
          <ThemeToggleButton />
          <Box
            ml={2}
            display={{ base: "inline-block", md: 'none' }}
          >
            <Menu isLazy id="navbar-menu">
              <MenuButton as={IconButton} icon={<HamburgerIcon />} variant={`outline`} />
              <MenuList>
                <MenuItem as={MenuLink} to={'/'}>
                  Home
                </MenuItem>
                <MenuItem as={MenuLink} to={`/students`}>
                  Students
                </MenuItem>
                <MenuItem as={MenuLink} to={`/teachers`}>
                  Teachers
                </MenuItem>
                <MenuItem style={{ gap: 4 }} as={Link} href={`https://github.com/harshv5094/school-management-app`}>
                  <IoLogoGithub />
                  Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar