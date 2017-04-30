const getReferenceData = (reference) => {
  let matches = reference.match(/([\w\s]+[A-z])\s?(\d+)?:?(.+)?/)
  let book = matches[1], chapter = matches[2] * 1, verses = []
  if (matches[3]) {
    matches[3].split(',').map((part) => {
      let matches = part.match(/(\d+)[-—]?(\d+)?/)
      if (matches[2] === undefined) {
        verses.push(matches[1] * 1)
      } else {
        for (let verse = matches[1] * 1; verse <= matches[2]; verse++) {
          verses.push(verse)
        }
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