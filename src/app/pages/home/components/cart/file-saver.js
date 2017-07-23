import R from "ramda"

function getInitialContent(lineBreak) {
  return `Congratulations for completing this trial. I hope you found it tough to figure out what the secret gifts were.${lineBreak}Your combined knowledge of how my twisted brain works and what I'd like us to do together should have ${lineBreak}gotten you loads of the gifts you really wanted. Here's what you've half-blindly chosen:${lineBreak}`
}

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

function getLoveText(loveLeft) {
  if (loveLeft === 0) return "No extra love earned from me :(   Maybe next year)"
  if (loveLeft === 0) return `So selfish! You lost ${Math.abs(loveLeft)} seconds of my endless love`
  return `So selfless! On your birthday month?? You've earned ${Math.abs(loveLeft)} days on top of my endless love!`
}

function getFinalText(lineBreak, totalCost, loveLeft) {
  return `${lineBreak}${lineBreak}Total cost: ${totalCost.peopleOverload} crowd tolerance   ${totalCost.energy} energy   ${totalCost.money} imaginary money${lineBreak}${lineBreak}${getLoveText(loveLeft)}`
}

function prepareDataForSaving(lineBreak, cartTotal, love, rawJsonArray) {
  let textToSave = R.reduce((fileContent, gift) => {
    return fileContent + `- ${gift.name} (${gift.categoryName}) ~~~ ${getGiftCost(gift)} and ${getLoveEarned(gift)} ${lineBreak}`
  }, getInitialContent(lineBreak), rawJsonArray)
  textToSave += getFinalText(lineBreak, cartTotal, love)
  return textToSave
}

function getLineBreakChar(platform) {
  const pattern = new RegExp(/win/i)
  if (pattern.test(platform)) return "\r\n"
  return "\n"
}

export default function saveFile(cartContent, cartTotal, love) {
  const fileName = "gifts.txt"
  const lineBreak = getLineBreakChar(window.navigator.platform)
  const data = prepareDataForSaving(lineBreak, cartTotal, love, cartContent)
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
