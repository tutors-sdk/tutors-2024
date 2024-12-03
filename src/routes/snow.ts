/* eslint-disable @typescript-eslint/ban-ts-comment */
import { lightMode } from "../lib/runes";

const snow = {
  // The background color is for making the particles visible since they're white. Remove this section if not needed
  background: {
    color: "#000000"
  },
  // The particles options
  particles: {
    // The color of the particles/snowflakes
    color: {
      value: "#ffffff"
    },
    // Move the snow flakes to bottom for a realistic effect, "out" in outModes is for making them reappear on top once exited at the bottom of the page, the speed should be slow for a realistic effect
    move: {
      direction: "bottom",
      enable: true,
      outModes: "out",
      speed: 2
    },
    // How many particles/snowflakes will be created when starting the effect, density is a good option to enable since it calculates the particles number based on the screen size (mobile users will be happy)
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 400
    },
    // The opacity of the particles/snowflakes
    opacity: {
      value: 1.0
    },
    // The shape of the particles/snowflakes, also custom shapes can be used, this will be discussed at the end
    shape: {
      type: "circle"
    },
    // The size of the particles/snowflakes
    size: {
      value: 10
    },
    // A nice wobble movement
    wobble: {
      enable: true,
      distance: 10,
      speed: 10
    },
    // Some depth to the effect, (the layers count by default is 100, changing max here is not affecting that count)
    // The zIndex will affect speed, size and opacity of the particles/snowflakes, the smaller the zIndex the smaller/more transparent/slower the particles/snowflakes will be
    zIndex: {
      value: {
        min: 0,
        max: 100
      }
    }
  }
};
export async function makeItSnow() {
  if (lightMode.value === "light") {
    snow.background.color = "#ffffff";  // White background for light mode
    snow.particles.color.value = "#e8d1d2"; // Red snowflakes in light mode
  } else {
    snow.background.color = "#000000";  // Black background for dark mode
    snow.particles.color.value = "#ffffff"; // White snowflakes in dark mode
  }

  // @ts-expect-error
  // eslint-disable-next-line no-undef
  await loadSnowPreset(tsParticles);
  // @ts-expect-error
  // eslint-disable-next-line no-undef
  tsParticles.load({
    id: "tsparticles",
    options: {
      //preset: "snow",
      ...snow,
      fullScreen: {
        enable: true,
        zIndex: -1 // Set z-index here
      }
    }
  });
}

export async function makeItStopSnowing() {
  const element = document.getElementById("tsparticles");
  if (element) {
    element.remove();
  }
}
