import React from "react";

import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

function particlesInit(tsParticles) {
  console.log("init", tsParticles);

  loadLinksPreset(tsParticles);
}

const Landing = () => {
  return (
    <div>
      <div>
        <div>
          <h1 className="hi">Finally</h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
