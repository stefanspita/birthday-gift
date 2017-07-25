import defaultPicture from "./assets/gift-outline-md.png"
import devon from "./assets/devon.png"
import brugges from "./assets/brugges.jpg"
import indonesia from "./assets/indonesia.png"
import cornwall from "./assets/cornwall.jpg"
import amsterdam from "./assets/amsterdam.png"
import berlin from "./assets/berlin.png"

const pictures = {
  devon,
  brugges,
  indonesia,
  cornwall,
  amsterdam,
  berlin,
}

export function getGiftPicture(imageName) {
  if (pictures[imageName]) return pictures[imageName]
  return defaultPicture
}
