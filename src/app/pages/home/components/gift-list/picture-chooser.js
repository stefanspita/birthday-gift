import defaultPicture from "./assets/gift-outline-md.png"
import devon from "./assets/devon.png"

const pictures = {
  devon,
}

export function getGiftPicture(imageName) {
  if (pictures[imageName]) return pictures[imageName]
  return defaultPicture
}
