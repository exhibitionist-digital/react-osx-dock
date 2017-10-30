import React from "react";
import Dock from "../dock";

export default function(props) {
  return (
    <Dock
      className="dock"
      backgroundClassName="dock-background"
      width={Math.min(700, window.innerWidth * 0.5)}
      magnification={1}
      debug={false}
    >
      <Dock.App className="dock-app">
        <img src="images/pokemon/pikachu.png" />
      </Dock.App>
      <Dock.App className="dock-app">
        <img src="images/pokemon/charmander.png" />
      </Dock.App>
      <Dock.App className="dock-app">
        <img src="images/pokemon/squirtle.png" />
      </Dock.App>
      <Dock.App className="dock-app">
        <img src="images/pokemon/bulbasaur.png" />
      </Dock.App>
      <Dock.App className="dock-app">
        <img src="images/pokemon/snorlax.png" />
      </Dock.App>
      <Dock.App className="dock-app">
        <img src="images/pokemon/psyduck.png" />
      </Dock.App>
      <Dock.App className="dock-app">
        <img src="images/pokemon/eevee.png" />
      </Dock.App>
      <Dock.App className="dock-app">
        <img src="images/pokemon/meowth.png" />
      </Dock.App>
    </Dock>
  );
}
