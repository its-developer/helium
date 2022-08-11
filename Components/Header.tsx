import { Image } from "@mantine/core";
import { createStyles } from "@mantine/styles";
import React from "react";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "rgba(26,26,26,0.75)",
    backdropFilter: "saturate(380%) blur(20px)",
    height: 55,
    position: "fixed",
    top: 0,
    right: 0,
    zIndex: 9999,
    width: "100vw",
    paddingLeft: 10,
  },
  linksMain: {
    display: "flex",
    alignItems: "center",
  },
  borderLink: {
    color: "white",
  },
}));

const Header = () => {
  const { classes } = useStyles();

  return (
    <div
      className={`${classes.root} m-0 d-flex align-items-center justify-content-between`}
    >
      <Image src={"/logosymbol.svg"} className="mx-3" style={{ width: 34 }} />
      <div className={`${classes.linksMain}`}>
        <a
          className="px-2 text-decoration-none m-0 text-white fw-bold"
          role="button"
        >
          Chapter 2
        </a>
        <a
          className={`px-2 text-decoration-none m-0 text-white fw-bolder text-muted`}
        >
          |
        </a>
        <a
          className="px-2 text-decoration-none m-0 text-white fw-bold d-flex align-items-center h6"
          role="button"
        >
          Build
          <Image src={"/navarrow.svg"} className="mx-1" style={{ width: 12 }} />
        </a>
        <a
          className="px-2 text-decoration-none m-0 text-white fw-bold d-flex align-items-center h6"
          role="button"
        >
          Use
          <Image src={"/navarrow.svg"} className="mx-1" style={{ width: 12 }} />
        </a>
        <a
          className="px-2 text-decoration-none m-0 text-white fw-bold d-flex align-items-center h6"
          role="button"
        >
          Resources
          <Image src={"/navarrow.svg"} className="mx-1" style={{ width: 12 }} />
        </a>
        <a
          className="px-2 text-decoration-none m-0 text-white fw-bold d-flex align-items-center h6"
          role="button"
        >
          Who Uses Helium
          <Image src={"/navarrow.svg"} className="mx-1" style={{ width: 12 }} />
        </a>
        <a
          className={`px-2 text-decoration-none m-0 text-white fw-bolder text-muted`}
        >
          |
        </a>
        <a
          className="px-2 text-decoration-none m-0 text-white fw-bold"
          role="button"
        >
          Cellular Summer
        </a>
      </div>
      <Image src={"/globe.svg"} className="mx-3" style={{ width: 34 }} />
    </div>
  );
};

export default Header;
