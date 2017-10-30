import React from "react";
import Dock from "../dock";

export default function(props) {
  return (
    <Dock
      className="dock"
      width={Math.min(700, window.innerWidth * 0.5)}
      magnification={0.7}
      debug={false}
    >
      <Dock.App className="dock-app">
        <a href="https://facebook.com"><img src="images/social/facebook.png" /></a>
      </Dock.App>
      <Dock.App className="dock-app">
        <a href="https://twitter.com"><img src="images/social/twitter.png" /></a>
      </Dock.App>
      <Dock.App className="dock-app">
        <a href="https://plus.google.com"><img src="images/social/googleplus.png" /></a>
      </Dock.App>
      <Dock.App className="dock-app">
        <a href="https://instagram.com"><img src="images/social/instagram.png" /></a>
      </Dock.App>
      <Dock.App className="dock-app">
        <a href="https://tumblr.com"><img src="images/social/tumblr.png" /></a>
      </Dock.App>
      <Dock.App className="dock-app">
       <a href="https://linkedin.com"><img src="images/social/linkedin.png" /></a>
      </Dock.App>
    </Dock>
  );
}
