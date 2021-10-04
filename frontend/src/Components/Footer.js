// import { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  const D = new Date().getFullYear().toString();
  //   console.log(D);
  return (
    <Flex as="footer" justifyContent="center" py="5">
      <Text> Copyright @{D}.RST Store. All Rights Reserved.</Text>
    </Flex>
  );
};
export default Footer;
