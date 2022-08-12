import { createStyles, Image } from "@mantine/core";
import type { NextPage } from "next";
import MainLayout from "../Layouts/MainLayout";

const useStyles = createStyles((theme) => ({
  root: {
    background: "#1d1d1d url('/isoheaderbg.svg') center center no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // height: "100vh",
    width: "100%",
    position: "relative",
    overflow: "hidden",
  },
  cellularSummer: {
    background: "linear-gradient(90.06deg,#8816e3 10.06%,#d5149f 92.17%)",
    marginBottom: 30,
    borderRadius: 6,
    cursor: "pointer",
    padding: "10px",
  },
  customBtn: {
    color: "white",
    borderRadius: 8,
    padding: "15px 26px",
    letterSpacing: ".5",
    border: "none",
    outline: "none",
  },
  newsBg: {
    padding: "60px 20px 20px",
    borderRadius: "20px",
    transition: "all 0.2s ease 0s",
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div
          className={`px-4 mx-md-5 mx-0 mt-5 pt-5 d-flex align-items-start justify-content-center`}
          style={{ height: "140vh" }}
        >
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-xl-5 col-12 " style={{ zIndex: 999 }}>
              <div className={`${classes.cellularSummer} mt-md-5 mt-0`}>
                <h6 className="m-0 p-0 text-white d-flex align-items-center justify-content-between">
                  <p className="m-0 p-0">
                    <span className="fw-bold">Cellular Summer is here!</span>{" "}
                    Get your 5G Hotspots
                  </p>
                  <Image
                    src={"/roadmaparrowwhite.svg"}
                    style={{ width: 13, opacity: 0.5 }}
                  />
                </h6>
              </div>
              <h1
                style={{ fontSize: 110, lineHeight: 0.9, letterSpacing: -4 }}
                className={"fw-bolder text-white smallInMedium"}
              >
                People-Powered Networks.
              </h1>
              <h3 className="mb-3 text-primary mt-3">
                Start a Wireless Revolution
              </h3>
              <h5 className="mb-3 mt-3" style={{ lineHeight: "30px" }}>
                Powered by the Helium Blockchain, The People’s Network
                represents a paradigm shift for decentralized wireless
                infrastructure.
              </h5>
              <br />
              <div className="d-flex align-items-center justify-content-start">
                <button
                  style={{ background: "rgb(71, 77, 255)" }}
                  className={`${classes.customBtn} mx-2 mb-4 text-dark fw-bold`}
                >
                  Mine
                </button>
                <button
                  style={{ background: "rgb(163, 52, 251)" }}
                  className={`${classes.customBtn} mx-2 mb-4 text-dark fw-bold`}
                >
                  Stack
                </button>
                <button
                  style={{ background: "rgb(10, 207, 131)" }}
                  className={`${classes.customBtn} mx-2 mb-4 text-dark fw-bold`}
                >
                  Use
                </button>
              </div>
              <br />
            </div>
            <div className="col-xl-6 offset-1 col-12">
              <div
                className="position-absolute top-0 right-0"
                style={{ zIndex: 1 }}
              >
                <Image
                  src={"/tesitng.png"}
                  width="900px"
                  className="testingImage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header End */}
      <div className="mx-md-5 px-5 py-5 my-5">
        <h2 className="m-0 text-white fw-bold" style={{ fontSize: 46 }}>
          Latest News
        </h2>
        <br />
        <div className="row">
          {[0, 1, 2, 3].map((item) => {
            return (
              <div
                key={item}
                className="px-3 col-lg-3 col-sm-6 col-12 my-2"
                id="newsButton"
                role="button"
              >
                <div
                  id="orange"
                  className={`${classes.newsBg} d-flex align-items-start justify-content-start flex-column`}
                >
                  <h6 className="fw-bold text-dark">5G Carrier</h6>
                  <h2
                    className="m-0 p-0 text-white fw-bold mr-5"
                    style={{ fontSize: "20px", lineHeight: "1.1" }}
                  >
                    DISH First Major
                    <br /> Carrier to Deploy Helium 5G
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row mt-5 pt-5">
          <div className="col-lg-2 col-sm-4 col-12 py-3 align-items-center d-flex justify-content-center">
            <Image
              src={"https://www.helium.com/static/images/new/coindesk.png"}
              style={{ width: 150 }}
            />
          </div>
          <div className="col-lg-2 col-sm-4 col-12 py-3 align-items-center d-flex justify-content-center">
            <Image
              src={"https://www.helium.com/static/images/new/coindesk.png"}
              style={{ width: 150 }}
            />
          </div>
          <div className="col-lg-2 col-sm-4 col-12 py-3 align-items-center d-flex justify-content-center">
            <Image
              src={"https://www.helium.com/static/images/new/coindesk.png"}
              style={{ width: 150 }}
            />
          </div>
          <div className="col-lg-2 col-sm-4 col-12 py-3 align-items-center d-flex justify-content-center">
            <Image
              src={"https://www.helium.com/static/images/new/coindesk.png"}
              style={{ width: 150 }}
            />
          </div>
          <div className="col-lg-2 col-sm-4 col-12 py-3 align-items-center d-flex justify-content-center">
            <Image
              src={"https://www.helium.com/static/images/new/coindesk.png"}
              style={{ width: 150 }}
            />
          </div>
          <div className="col-lg-2 col-sm-4 col-12 py-3 align-items-center d-flex justify-content-center">
            <Image
              src={"https://www.helium.com/static/images/new/coindesk.png"}
              style={{ width: 150 }}
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <hr />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-6">
            <h1 className="fw-bolder text-white mb-3" style={{ fontSize: 50 }}>
              The Network is Live
            </h1>
            <p className="m-0 p-0" style={{ fontSize: 25 }}>
              The People’s Network is the world’s fastest growing wireless
              network ever.
            </p>
            <br />
            <br />
            <button
              style={{ background: "rgb(71, 77, 255)" }}
              className={`${classes.customBtn} me-2 mb-4 text-dark fw-bold`}
            >
              <h4 className={"fw-bold text-white m-0 p-0"}>
                View Network Coverage
              </h4>
            </button>
          </div>
          <div className="col-6">
            <div>
              <h5 className="m-0 p-0 text-muted fw-bolder text-end">
                TOTAL HOTSPOTS
              </h5>
              <p
                className="fw-bolder text-white h1 text-end"
                style={{ fontSize: 50 }}
              >
                921,531
              </p>
            </div>
            <br />
            <br />
            <div>
              <h5 className="m-0 p-0 text-muted fw-bolder text-end">
                CIRCULATING HNT SUPPLY
              </h5>
              <p
                className="fw-bolder text-white h1 text-end"
                style={{ fontSize: 50 }}
              >
                125,252,700
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Home.layout = MainLayout;

export default Home;
