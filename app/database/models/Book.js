import Sequelize from 'sequelize'

import Database from '../Database'

import { getReferenceData } from '../../functions'

const BookModel = Database.define('book', {
  name: {
    allowNull: false,
    type: Sequelize.STRING
  }
})

BookModel.findById = (id) => {
  return BookModel.find({
    where: {
      id
    }
  })
}
BookModel.findByName = (name) => {
  return BookModel.find({
    where: {
      name
    }
  })
}
BookModel.findByReference = (reference) => {
  let data = getReferenceData(reference)
  return BookModel.find({
    where: {
      name: data.book
    }
  })
}

export default BookModel