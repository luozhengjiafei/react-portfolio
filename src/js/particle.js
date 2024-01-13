import { useEffect, useMemo, useState } from "react";

//particles
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

function Particle(){
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadFull(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  // particles  config
  const HeaderData = {
    fullScreen: {
			enable: true
		},
		particles: {
			links: {
				enable: true
			},
			move: {
				enable: true
			},
			number: {
				value: 50
			},
			opacity: {
				value: { min: 0.3, max: 1 }
			},
			shape: {
				type: ["circle", "square", "triangle", "polygon"],
				options: {
					polygon: [
						{
							sides: 5
						},
						{
							sides: 6
						},
						{
							sides: 8
						}
					]
				}
			},
			size: {
				value: { min: 1, max: 3 }
			},
      particles: {
				color: {
					value: "#E0FFFF"
				},
				links: {
					color: "#E0FFFF"
				}
			}
		},
  };

  return (
    <Particles
      id='tsparticles'
      options={HeaderData}
      loaded={particlesLoaded}
    >
    </Particles>
  );
}
export default Particle;