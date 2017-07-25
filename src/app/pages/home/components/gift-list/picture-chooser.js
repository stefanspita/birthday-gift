import defaultPicture from "./assets/gift-outline-md.png"
import devon from "./assets/devon.png"
import brugges from "./assets/brugges.jpg"
import indonesia from "./assets/indonesia.png"
import cornwall from "./assets/cornwall.jpg"
import amsterdam from "./assets/amsterdam.png"
import berlin from "./assets/berlin.png"
import snitch from "./assets/snitch.png"
import car from "./assets/car.png"
import laptop from "./assets/laptop.png"
import book from "./assets/book.png"
import plant from "./assets/plant.png"

const pictures = {
  devon,
  brugges,
  indonesia,
  cornwall,
  amsterdam,
  berlin,
  snitch,
  car,
  laptop,
  book,
  plant,
}

export function getGiftPicture(imageName) {
  if (pictures[imageName]) return pictures[imageName]
  return defaultPicture
}
