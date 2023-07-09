import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Flex, Heading, Text } from "@chakra-ui/react";

import { ProjectType } from "@/types";

const Project = ({ href, imgPath, description, title }: ProjectType) => (
  <Flex
    width="full"
    gap={{ base: "1rem", sm: "4rem" }}
    justifyContent="center"
    alignItems="center"
    flexDirection={{ base: "column", lg: "row" }}
    color="white"
  >
    <Link href={href} target="_blank">
      <Image
        className="project-image"
        src={`/${imgPath}`}
        alt={title}
        width={400}
        height={400}
        quality={100}
      />
    </Link>

    <Flex flexDirection="column" width={{ base: "62", sm: "sm", md: "md" }}>
      <Heading marginBottom="10" textAlign="center">
        {title}
      </Heading>
      <Text textAlign="center">{description}</Text>
    </Flex>
  </Flex>
);
export default Project;
