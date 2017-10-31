import React from "react";
import Dock from "react-osx-dock";

export default class extends React.Component {
  render() {
    return (
      <Dock
        className="dock"
        width={Math.min(700, window.innerWidth * 0.5)}
        magnification={0.7}
        magnifyDirection="down"
        debug={false}
      >
        {this.platforms.map((platform, index) => (
          <Dock.Item key={index} className="dock-item">
            <a href={platform.url}><img src={`images/social/${platform.name}.png`} /></a>
          </Dock.Item>
        ))}
      </Dock>
    );
  }

  get platforms() {
    return [{
      name: "facebook",
      url: "https://facebook.com",
    }, {
      name: "twitter",
      url: "https://twitter.com",
    }, {
      name: "googleplus",
      url: "https://plus.google.com",
    }, {
      name: "instagram",
      url: "https://instagram.com",
    }, {
      name: "tumblr",
      url: "https://tumblr.com",
    }, {
      name: "linkedin",
      url: "https://linkedin.com",
    }];
  }
}
