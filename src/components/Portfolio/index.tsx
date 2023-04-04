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
      className="full-height"
      justifyContent="center"
      ref={portfolioRef}
      paddingBlock="20"
    >
      {ProjectBody.map(({ alt, description, imgPath, path, title }) => {
        return (
          <Project
            key={imgPath}
            alt={alt}
            description={description}
            imgPath={imgPath}
            path={path}
            title={title}
          />
        );
      })}
    </Flex>
  );
};

export default Portfolio;
