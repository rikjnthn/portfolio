import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Link as StyledLink, useMediaQuery } from "@chakra-ui/react";

import { LinkType } from "@/types";

const NavLink = ({ path, value }: LinkType) => {
  const [isSmallerThan780] = useMediaQuery("(max-width: 780px)");

  const isAcitve: boolean = useRouter().pathname === path;

  return (
    <StyledLink
      as={Link}
      href={path}
      data-isactive={isAcitve}
      width={`${isSmallerThan780 ? "fit-content" : "28"}`}
      height="10"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="full"
      color={isAcitve ? "black" : "whiteAlpha.700"}
      backgroundColor={isAcitve ? "#3BE4C6" : "transparent"}
    >
      {value}
    </StyledLink>
  );
};

export default NavLink;
