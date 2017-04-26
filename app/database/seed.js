import Database from './Database'

import Book from './models/Book'
import Chapter from './models/Chapter'
import Verse from './models/Verse'
import Translation from './models/Translation'
import VerseTranslation from './models/VerseTranslation'

// Database.drop()
// .then(() => Book.sync())
// .then(() => Chapter.sync())
// .then(() => Translation.sync())
// .then(() => Verse.sync())
// .then(() => VerseTranslation.sync())

// Book.sync({ force: true }).then(function() {
//   Book.create({
//     name: 'Genesis'
//   }).then(() => {
//     console.log('Done!')
//   })
// })

// Chapter.sync({ force: true }).then(function() {
//   Chapter.create({
//     number: 1
//   }).then(() => {
//     console.log('Done!')
//   })
// })

// Translation.sync({ force: true }).then(function() {
//   Translation.create({
//     code: 'kjv',
//     name: 'King James (Authorized Version)'
//   }).then(() => {
//     console.log('Done!')
//   })
// })