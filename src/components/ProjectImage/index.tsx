import React from "react";
import Link from "next/link";
import Image from "next/image";

import { ProjectImageType } from "@/types";

const ProjectImage = ({ path, imgPath, alt }: ProjectImageType) => (
  <Link href={path}>
    <Image src={`/${imgPath}`} alt={alt} />
  </Link>
);
export default ProjectImage;