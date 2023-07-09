import React, { useState } from "react";
import Link from "next/link";

import { Flex, Heading } from "@chakra-ui/react";

import Hamburger from "./Hamburger";
import Nav from "./Nav";

const Navigation = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <Flex
      as="header"
      height={{ base: "12", sm: "16" }}
      justifyContent="space-between"
      alignItems="center"
      paddingInline={{ base: "10", sm: "20" }}
      backgroundColor="customBlack"
      color="white"
      position="sticky"
      top="0"
      userSelect="none"
      scrollMarginBottom="16"
      zIndex="99"
    >
      <div>
        <Heading as={Link} href="/" fontSize={{ base: "20", sm: "30" }}>
          Erik Jonathan
        </Heading>
      </div>

      <div>
        <Hamburger clicked={clicked} setClicked={setClicked} />

        <Nav clicked={clicked} />
      </div>
    </Flex>
  );
};

export default Navigation;
