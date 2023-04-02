import React from "react";

import { Container } from "@chakra-ui/react";

const Portfolio = ({
  portfolioRef,
}: {
  portfolioRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <Container as="section" className="full-height" ref={portfolioRef}>
      <Container as="section" color="white"></Container>
    </Container>
  );
};

export default Portfolio;
