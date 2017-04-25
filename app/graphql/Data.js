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
      number: 1
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
  Verses: {
    id: 100,
    number: 100,
    text: 'In the beginning ...'
  }
}