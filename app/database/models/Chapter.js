import Sequelize from 'sequelize'

import Database from '../Database'

import BookModel from './Book'

import { getReferenceData } from '../../functions'

const ChapterModel = Database.define('chapter', {
  number: {
    allowNull: false,
    type: Sequelize.INTEGER
  }
})

ChapterModel.belongsTo(BookModel)

ChapterModel.findById = (id) => {
  return ChapterModel.find({
    where: {
      id
    }
  })
}
ChapterModel.findByReference = async (reference) => {
  let data = getReferenceData(reference)
  return ChapterModel.find({
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
  })
}

export default ChapterModel