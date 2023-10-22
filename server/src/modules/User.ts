import mongoose from 'mongoose';
import argon2 from 'argon2';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    todos: {
      type: [
        {
          finished: { type: Boolean, required: true },
          content: { type: String, required: true },
        },
      ],
      default: [],
    },
  },
  {
    methods: {
      async comparePassword(password: string) {
        return argon2.verify(this.password, password);
      },
      async hashPassword() {
        this.password = await argon2.hash(this.password);
      },
    },
  },
);

const User = mongoose.model('User', userSchema);

export default User;
