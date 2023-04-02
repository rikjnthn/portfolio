import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Link as StyledLink } from "@chakra-ui/react";
import { IconComponentsType } from "@/types";

const IconComponents = ({
  iconPath,
  href,
  alt,
}: IconComponentsType) => (
  <StyledLink
    as={Link}
    className="icon"
    href={href}
    width="7"
    height="7"
    borderRadius="full"
  >
    <Image src={`/${iconPath}`} alt={alt} width="24" height="24" />
  </StyledLink>
);

export default IconComponents;
