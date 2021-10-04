import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import {
  Flex,
  Heading,
  Link,
  Box,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
} from "@chakra-ui/react";
import { HiShoppingBag, HiUser, HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";
import { FcShop } from "react-icons/fc";
import { logout } from "../actions/userActions";

const MenuItems = ({ children, url }) => {
  return (
    <Link
      as={RouterLink} //here we passing url to href
      to={url}
      mt={{ base: 4, md: 0 }} //mt =margin-top
      fontSize="sm" //fontsize sm means small
      letterSpacing="wide"
      color="whitealpha.600"
      textTransform="uppercase"
      mr="5"
      display="block"
      _hover={{ color: "whiteAlpha.800" }}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin; //from userlogin we destructre out userInfo

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      py="6"
      px="6"
      bgColor="gray.800"
      w="100%"
      top="0"
      zIndex="2"
      pos="fixed"
    >
      <Flex align="center" mr="5">
        <Heading
          as="h1"
          color="whiteAlpha.800"
          fontWeight="bold"
          size="md"
          px="5"
          letterSpacing="md"
        >
          <Link
            as={RouterLink}
            to="/"
            _hover={{ color: "whiteAlpha.600", TextDecor: "none" }}
          >
            <Icon as={FcShop} w="6" h="6" mr="2" />
            RST Store
          </Link>
          {/* h1 is want to be link so link wrap in Heading */}
        </Heading>
        {/* in flex Heading is component as h1 */}
      </Flex>
      {/* inner flex */}
      <Box
        display={{ base: "block", md: "none", sm: "block" }}
        onClick={() => setShow(!show)}
      >
        <Icon as={HiOutlineMenuAlt3} color="white" w="6" h="6" />
        <title>Menu</title>
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
      >
        <MenuItems url="/cart">
          <Flex alignItems="center" color="white">
            <Icon as={HiShoppingBag} color="white" w="4" h="4" mr="1" />
            Cart
          </Flex>
        </MenuItems>
        {userInfo ? (
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<IoChevronDown />}
              _hover={{ textDecoration: "none", opacity: "0.7" }}
            >
              {userInfo.name}
            </MenuButton>
            <MenuList>
              <MenuItem as={RouterLink} to="/profile">
                Profile
              </MenuItem>
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <MenuItems url="/login">
            <Flex alignItems="center" color="white">
              <Icon as={HiUser} color="white" w="4" h="4" mr="1" />
              Login
            </Flex>
          </MenuItems>
        )}
        {userInfo && userInfo.isAdmin && (
          <Menu>
            <MenuButton
              ml="5"
              color="white"
              fontSize="sm"
              fontWeight="semibold"
              as={Link}
              textTransform="uppercase"
              _hover={{ textDecoration: "none", opacity: "0.7" }}
            >
              Manage <Icon as={IoChevronDown} />
            </MenuButton>
            <MenuList>
              <MenuItem as={RouterLink} to="/admin/userlist">
                All Users
              </MenuItem>
              <MenuItem as={RouterLink} to="/admin/productlist">
                All Products
              </MenuItem>
              <MenuItem as={RouterLink} to="/admin/orderList">
                All Orders
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Box>
    </Flex>
    //  main Flex
  );
};

export default Header;
