import React from 'react';

import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

function particlesInit(tsParticles) {
  console.log("init", tsParticles);

  loadLinksPreset(tsParticles);
}

export default function Landing() {
  return (
    <div>
      <div >
        <div>
          <h1 className="h1">Finally</h1>

        </div>

        <Particles
          options={{
            preset: "links",
          }}
          init={particlesInit}
        />
      </div>

    </div>
  );
}

