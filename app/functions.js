const getReferenceData = (reference) => {
  let matches = reference.match(/([\w\s]+[A-z])\s?(\d+)?:?(.+)?/)
  console.log(reference, matches)
  let book = matches[1], chapter = matches[2] * 1, verses = []
  if (matches[3]) {
    matches[3].split(',').map((part) => {
      let matches = part.match(/(\d+)[-—]?(\d+)?/)
      for (let i = matches[1] * 1; i <= matches[2]; i ++) {
        verses.push(i)
      }
    })
  }
  return {
    book,
    chapter,
    verses
  }
}

export {
  getReferenceData
}