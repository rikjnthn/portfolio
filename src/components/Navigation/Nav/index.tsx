import React from "react";

import { Flex, useMediaQuery } from "@chakra-ui/react";

import { NavLink } from "@/components";

const Nav = ({ clicked }: { clicked: boolean }) => {
  const [isSmallerThan780] = useMediaQuery("(max-width: 780px)");
  return (
    <Flex
      as="nav"
      display={`${isSmallerThan780 ? (clicked ? "" : "none") : "flex"}`}
      gap="2rem"
      marginLeft="auto"
      fontSize="sm"
      className={`${isSmallerThan780 ? "navbar" : ""}`}
    >
      <NavLink path="/" value="My Portfolio" />
      <NavLink path="/about-me" value="About me" />
    </Flex>
  );
};

export default Nav;
