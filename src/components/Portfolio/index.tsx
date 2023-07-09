import React from "react";

import { Flex } from "@chakra-ui/react";

import { Project } from "..";
import { ProjectBody } from "@/data";

const Portfolio = ({
  portfolioRef,
}: {
  portfolioRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <Flex
      as="section"
      flexDir="column"
      gap="20"
      justifyContent="center"
      alignItems="start"
      ref={portfolioRef}
      paddingBlock="20"
      paddingInline={{base: "10",md: "20"}}
    >
      {ProjectBody.map((props) => {
        return <Project key={props.imgPath} {...props} />;
      })}
    </Flex>
  );
};

export default Portfolio;
