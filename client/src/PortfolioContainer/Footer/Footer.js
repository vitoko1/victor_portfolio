import React from "react";
import "./Footer.css";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
export default function Footer(props) {

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

    const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="scroll-container ">
      <button
        className="btn-scroll" title=""
        onClick={() => ScrollService.scrollHandler.scrollToHome()}
      > up
        {" "}
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}