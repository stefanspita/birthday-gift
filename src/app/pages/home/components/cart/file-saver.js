import R from "ramda"

const initialContent = "Congratulations for completing this trial. I hope you found it tough to figure out what the secret gifts were. Your combined knowledge of how my twisted brain works and what I'd like us to do together should have gotten you loads of the gifts you really wanted. Here's what you've half-blindly chosen: \n"

function getGiftCost(gift) {
  return `costed you ${gift.cost.peopleOverload} crowd tolerance, ${gift.cost.energy} energy, ${gift.cost.money} imaginary money`
}

function getLoveEarned(gift) {
  let word = "earned"
  let love = gift.love
  if (gift.love === 0) love = "no"
  else if (gift.love < 0) {
    love *= -1
    word = "lost"
  }
  return `${word} you ${love} love`
}

function prepareDataForSaving(rawJsonArray) {
  return R.reduce((fileContent, gift) => {
    return fileContent + `- ${gift.name} (${gift.categoryName}) ~~~ ${getGiftCost(gift)} and ${getLoveEarned(gift)} \n`
  }, initialContent, rawJsonArray)
}

export default function saveFile(cartContent) {
  const fileName = "gifts.txt"
  const data = prepareDataForSaving(cartContent)
  const file = new Blob([data], {type: "text/plain"})

  if (window.navigator.msSaveOrOpenBlob) // IE10+
    return window.navigator.msSaveOrOpenBlob(file, fileName)

  const link = document.createElement("a"),
    url = URL.createObjectURL(file)
  link.href = url
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  setTimeout(() => {
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  })
}
