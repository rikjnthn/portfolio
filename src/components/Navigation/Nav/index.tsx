import React from "react";

import { Flex, useMediaQuery } from "@chakra-ui/react";

import { NavLink } from "@/components";

const Nav = ({ clicked }: { clicked: boolean }) => {
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");
  return (
    <Flex
      as="nav"
      display={`${isSmallerThan768 ? (clicked ? "" : "none") : "flex"}`}
      gap="2rem"
      marginLeft="auto"
      fontSize="sm"
      className="navbar"
    >
      <NavLink path="/" value="My Portfolio" />
      <NavLink path="/about-me" value="About me" />
    </Flex>
  );
};

export default Nav;
