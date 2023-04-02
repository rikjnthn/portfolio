import React from "react";

import { Flex, Heading, Text, Image } from "@chakra-ui/react";

import { IconProps } from "@/components";

const About = () => {
  return (
    <Flex
      as="main"
      className="full-height opacity-animation"
      justifyContent="center"
      alignItems="center"
      color="white"
      flexWrap="wrap"
    >
      <Flex as="section" flexDir="column" width="300px">
        <Heading>
          Hi, I Am
          <Text as="span" display="block" color="blue.200">
            Web Developer
          </Text>
        </Heading>
        <Text marginY="12">Ready to build website for you</Text>

        <Flex alignItems="center" flexDir="row" gap="5">
          <IconProps
            iconPath="WhatsApp.svg"
            href="https://wa.me/081385160823"
            alt="WhatsApp"
          />
          <IconProps
            iconPath="Gmail.png"
            href="mailto:erikjonathan147@gmail.com"
            alt="Gmail"
          />
        </Flex>
      </Flex>
      <div>
        <Image src="/greet.png" alt="greet" loading="lazy" width="450px" />
      </div>
    </Flex>
  );
};

export default About;
