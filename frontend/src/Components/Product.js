import { Link as RouterLink } from "react-router-dom";
import { Box, Link, Image, Flex, Heading, Text } from "@chakra-ui/react";
import Rating from "./Rating";

const Product = ({ product }) => {
  //object destructring product
  return (
    <Link
      as={RouterLink}
      to={`/product/${product._id}`}
      _hover={{ textDecor: "none" }}
    >
      {/* first div element */}
      <Box
        maxW="sm"
        borderRadius="lg"
        overflow="hidden"
        bgColor="white"
        transition="all"
        _hover={{ shadow: "md" }}
      >
        {/* this is image tag in box tag  */}

        <Image
          src={product.image}
          alt={product.name}
          minH="360px"
          objectFit="cover"
        />

        {/* then we create another div with flex  */}
        <Flex py="5" px="4" direction="column" justifyContent="space-between">
          {/* in flex first is heading element that is h4 */}
          <Heading as="h4" fontSize="lg" mb="3">
            {product.name}
          </Heading>
          <Flex alignItems="flex-end" justifyContent="space-between">
            {/* here we pass jsx return */}
            <Rating
              value={product.rating}
              Text={`${product.numReviews} reviews`}
            />
            <Text fontSize="2xl" fontWeight="medium" color="blue.600">
              ${product.price}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
};

export default Product;
