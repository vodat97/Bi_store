module.exports = {
    mutipleMongooseToObject: function (mongooseArrays) {
      return mongooseArrays.map((mongooseArray) => mongooseArray.toObject());
    },
    singleMongooseToObject: function (mongoose) {
      return mongoose ? mongoose.toObject() : mongoose;
    },
};
  