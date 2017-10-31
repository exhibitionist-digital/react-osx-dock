import React from "react";
import Dock from "react-osx-dock";

export default class extends React.Component {
  render() {
    return (
      <Dock
        className="dock"
        backgroundClassName="dock-background"
        width={Math.min(700, window.innerWidth * 0.5)}
        magnification={1}
        magnifyDirection="center"
        debug={false}
      >
        {this.pokemon.map((pokemon, index) => (
          <Dock.Item key={index} className="dock-item">
            <img src={`images/pokemon/${pokemon}.png`} />
          </Dock.Item>
        ))}
      </Dock>
    );
  }

  get pokemon() {
    return [
      "pikachu",
      "charmander",
      "squirtle",
      "bulbasaur",
      "snorlax",
      "psyduck",
      "eevee",
      "meowth",
    ];
  }
}
