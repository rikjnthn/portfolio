import React, { useRef } from "react";

import {
  Container,
  Heading,
  Flex,
  Button,
} from "@chakra-ui/react";

import { HTMLHead, Portfolio, ProjectImage } from "@/components";

export default function Home() {
  const portfolioRef = useRef<HTMLDivElement>(null);

  const handleClick = () => portfolioRef.current?.scrollIntoView();

  return (
    <>
      <HTMLHead />
      <Container as="main" className="opacity-animation" maxWidth="full">
        <Flex
          as="section"
          className="full-height"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="20"
          backgroundImage="/sea.webp"
          backgroundClip="text"
        >
          <Heading
            as="h1"
            fontSize={{ base: "5xl", sm: "7xl", md: "9xl" }}
            letterSpacing="widest"
            fontWeight="black"
            fontFamily="sans-serif"
          >
            Portfolio
          </Heading>

          <Button
            onClick={handleClick}
            backgroundColor="cyan.900"
            color="white"
            _hover={{ backgroundColor: "blue.600" }}
            _active={{ backgroundColor: "blue.900" }}
          >
            See My Portfolio
          </Button>
        </Flex>

        <Portfolio portfolioRef={portfolioRef} />
      </Container>
    </>
  );
};