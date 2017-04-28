import Sequelize from 'sequelize'

import Database from '../Database'

import BookModel from './Book'
import ChapterModel from './Chapter'

import { getReferenceData } from '../../functions'

const VerseModel = Database.define('verse', {
  number: {
    allowNull: false,
    type: Sequelize.INTEGER
  }
})

VerseModel.belongsTo(ChapterModel)

VerseModel.findById = (id) => {
  return VerseModel.find({
    where: {
      id
    }
  })
}
VerseModel.findAllByReference = (reference) => {
  let data = getReferenceData(reference), where
  if (!data.verses.length) {
    where = {}
  } else {
    where = {
      number: {
        $in: data.verses
      }
    }
  }
  return VerseModel.findAll({
    where,
    include: [
      {
        model: ChapterModel,
        where: {
          number: data.chapter
        },
        include: [
          {
            model: BookModel,
            where: {
              name: data.book
            }
          }
        ]
      }
    ]
  })
}

export default VerseModel