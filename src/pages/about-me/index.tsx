import React from "react";

import { Flex, Heading, Text, Image } from "@chakra-ui/react";

import { HTMLHead, IconProps } from "@/components";

export default function AboutMe() {
  return (
    <>
      <HTMLHead />
      <Flex
        as="main"
        className="full-height opacity-animation"
        justifyContent="space-around"
        alignItems="center"
        color="white"
      >
        <Flex flexWrap="wrap" justifyContent="space-around" alignItems="center">
          <Flex
            as="section"
            flexDir="column"
            maxWidth="xs"
            marginInline={{ base: "5", sm: "10" }}
            marginBottom={{ base: "5", sm: "0" }}
          >
            <Heading>
              Hi, I Am{" "}
              <Text as="span" display="block" color="blue.200">
                Frontend Web Developer
              </Text>
            </Heading>
            <Text marginY="12">Ready to build website for you</Text>

            <Flex alignItems="center" flexDir="row" gap="5">
              <IconProps
                iconPath="WhatsApp.svg"
                href="https://wa.me/+6281385160823"
                alt="WhatsApp"
              />
              <IconProps
                iconPath="Gmail.png"
                href="mailto:erjo9467@gmail.com"
                alt="Gmail"
              />
            </Flex>
          </Flex>
          <div>
            <Image src="/greet.png" alt="greet" loading="lazy" width="450px" />
          </div>
        </Flex>
      </Flex>
    </>
  );
}
