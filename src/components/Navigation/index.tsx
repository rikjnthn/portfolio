import React, { useState } from "react";

import { Flex, Heading, useMediaQuery } from "@chakra-ui/react";

import Hamburger from "./Hamburger";
import Nav from "./Nav";

const Navigation = () => {
  const [isSmallerThan780] = useMediaQuery("(max-width: 780px)");

  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <Flex
      as="header"
      height="20"
      justifyContent="space-between"
      alignItems="center"
      paddingInline="20"
      backgroundColor="customBlack"
      color="white"
      position="sticky"
      top="0"
      userSelect="none"
      scrollMarginBottom="16"
      zIndex="99"
    >
      <div>
        <Heading>Erik Jonathan</Heading>
      </div>

      <div>
        {isSmallerThan780 && (
          <Hamburger clicked={clicked} setClicked={setClicked} />
        )}

        <Nav clicked={clicked} />
      </div>
    </Flex>
  );
};

export default Navigation;
