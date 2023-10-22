import mongoose from 'mongoose';

mongoose.set('toJSON', {
  virtuals: true,
  transform: (doc, converted) => {
    converted.id = doc._id.toHexString();
    delete converted._id;
    delete converted.__v;
  },
});

const connectDatabase = () => {
  return mongoose.connect(process.env.MONGO_URI!);
};

export default connectDatabase;
