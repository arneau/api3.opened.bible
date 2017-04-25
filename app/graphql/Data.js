export default {
  Books: {
    1: {
      id: 1,
      Chapters: [
        1,
        2,
        3
      ],
      name: 'Genesis'
    },
    2: {
      id: 2,
      Chapters: [
        4,
        5
      ],
      name: 'Exodus'
    },
    3: {
      id: 3,
      Chapters: [
        6
      ],
      name: 'Leviticus'
    }
  },
  Chapters: {
    1: {
      id: 1,
      Book: 1,
      number: 1,
      Verses: [
        1,
        2,
        3
      ]
    },
    2: {
      id: 2,
      Book: 1,
      number: 2
    },
    3: {
      id: 3,
      Book: 1,
      number: 3
    },
    4: {
      id: 4,
      Book: 2,
      number: 1
    },
    5: {
      id: 5,
      Book: 2,
      number: 2
    },
    6: {
      id: 6,
      Book: 3,
      number: 1
    },
  },
  Translations: {
    1: {
      id: 1,
      code: 'kjv',
      name: 'King James (Authorized Version)'
    }
  },
  VerseTranslations: {
    1: {
      id: 1,
      text: 'In the beginning ...',
      Translation: 1,
      Verse: 1
    },
    2: {
      id: 2,
      text: 'And the Spirit of God ...',
      Translation: 1,
      Verse: 2
    },
    3: {
      id: 3,
      text: 'And God said ...',
      Translation: 1,
      Verse: 3
    }
  },
  Verses: {
    1: {
      id: 1,
      number: 1,
      VerseTranslations: [
        1
      ]
    },
    2: {
      id: 2,
      number: 2,
      VerseTranslations: [
        2
      ]
    },
    3: {
      id: 3,
      number: 3,
      VerseTranslations: [
        3
      ]
    }
  }
}