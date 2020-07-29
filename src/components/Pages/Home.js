import React from "react";
import Typical from "react-typical";
import banner from "../../../../public/images/hero-bg-2.jpg";
import logo from "../../../../public/images//Logo.svg.jpg";
import Icon from "@material-ui/core/Icon";

const myHdrStyle = {
  background: `url(${banner}) no-repeat center center`
};

const logoStyle = {
  width: "60px",
  paddingBottom: "0.6rem"
};

const members = [
  {
    title: "Developer",
    name: "Prashanth V"
  },
  {
    title: "Designer",
    name: "Shashank B R"
  },
  {
    title: "Planner",
    name: "Sagar R"
  }
];

const Home = () => {
  return (
    <header className="header">
      <section className="hero-section">
        <div className="hero-mask" style={myHdrStyle} />
        <img
          className="hero-mask"
          src={banner}
          style={myHdrStyle}
          alt="banner"
        />
        <div className="container text-center py-5">
          <div className="single-col-max mx-auto">
            <div className="hero-heading-upper pt-3 mb-3">
              <img src={logo} style={logoStyle} alt="logo" />
              Team: <br className="d-md-none" />
              Hack Elite
            </div>
            <h1 className="hero-heading mb-5 mt-2">
              <span className="brand mb-4 d-block">
                <span className="name">
                  <Typical
                    steps={["<Lowe's/>", 1000, "<Hackathon/>", 15000]}
                    loop={Infinity}
                    wrapper="p"
                  />
                </span>
              </span>
              <span className="desc d-block mt-5">
                Sprint for an Amazing Tech Transformation
              </span>
            </h1>

            <div className="hero-summary">
              <div className="row">
                {members.map((member, i) => (
                  <div className="item col-4" key={i}>
                    <div className="summary-desc mb-1">
                      <Icon className="icon">account_circle</Icon>
                      {member.title}
                    </div>
                    <h4 className="summary-heading">{member.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Home;
