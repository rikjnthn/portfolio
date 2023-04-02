import React from "react";

const Hamburger = ({
  clicked,
  setClicked,
}: {
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={() => setClicked(!clicked)}
      className={`hamburger ${clicked ? "open" : ""}`}
      title="hamburger icon"
      type="button"
    >
      <span />
      <span />
      <span />
    </button>
  );
};
export default Hamburger;
