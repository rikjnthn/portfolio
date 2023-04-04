import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Flex, Heading, Text } from "@chakra-ui/react";

import { ProjectType } from "@/types";

const Project = ({ path, imgPath, alt, description, title }: ProjectType) => (
  <>
    <Flex
      width="max"
      gap={{ base: "1rem", md: "10%" }}
      justifyContent='space-around'
      alignItems="center"
      flexDirection={{base: 'column', lg: 'row'}}
      color="white"
    >
      <Link href={path} target="_blank">
        <Image
          src={`/${imgPath}`}
          alt={alt}
          width="500"
          height="500"
          quality="100"
          loading="lazy"
        />
      </Link>

      <Flex flexDirection='column' width="md" height="250">
        <Heading marginBottom="10" textAlign='center'>{title}</Heading>
        <Text textAlign="justify">{description}</Text>
      </Flex>
    </Flex>
  </>
);
export default Project;
