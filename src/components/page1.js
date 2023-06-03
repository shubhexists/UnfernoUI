import InfernoLogo from "../assets/logo.png";
export const Page1 = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img
          className="logo-image"
          src={InfernoLogo}
          alt="logo"
          height="65px"
          width="180px"
        />
        <div className="heading">Team Inferno WebUI</div>
      </div>
      <div className="Text">
        <div className="lower-box">
          <div className="text1">
            <div className="camera1">
              <h1>Waiting for feed...</h1>
            </div>
            <div className="camera1">
              <h1>Waiting for feed...</h1>
            </div>
            <div className="camera1">
              <h1>Waiting for feed...</h1>
            </div>
            <div className="camera1">
              <h1>Waiting for feed...</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
