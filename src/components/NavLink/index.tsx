import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Link as StyledLink } from "@chakra-ui/react";

import { LinkType } from "@/types";

const NavLink = ({ path, value }: LinkType) => {
  const isAcitve: boolean = useRouter().pathname === path;

  return (
    <StyledLink
      as={Link}
      href={path}
      data-isactive={isAcitve}
      width={{base: "fit-content", md: "28"}}
      height="10"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="full"
      color={{base: isAcitve ? "#3BE4C6" : "white",md: isAcitve ? "black" : "whiteAlpha.700"}}
      backgroundColor={{md: isAcitve ? "#3BE4C6" : "transparent"}}
    >
      {value}
    </StyledLink>
  );
};

export default NavLink;
