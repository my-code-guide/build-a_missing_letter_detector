function fearNotLetter(str) {
  const allLetters = "abcdefghijklmnopqrstuvwxyz"
  const start = allLetters.indexOf(str[0])

  const range = allLetters.slice(start, start + str.length + 1)

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== range[i]) return range[i]
  }


}

console.log(fearNotLetter("abce"))
console.log(fearNotLetter("bcdf"))
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))