import Lottie from "lottie-react";
import icon from "../../animation/icon/65556-moviesTitle.json" 

const style = {
  height: "100px",
  width: "100px",
};

function AnimationIcon() {
    return (
          <Lottie animationData={icon} style={style} />
      );
}

export default AnimationIcon