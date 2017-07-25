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
import writing from "./assets/writing.png"
import blog from "./assets/blog.png"
import tea from "./assets/tea.png"
import clean from "./assets/clean.png"
import pillow from "./assets/pillow.png"

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
  writing,
  blog,
  tea,
  clean,
  pillow,
}

export function getGiftPicture(imageName) {
  if (pictures[imageName]) return pictures[imageName]
  return defaultPicture
}
