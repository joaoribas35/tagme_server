import moongose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = moongose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: "username is required",
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: "password is required",
      min: 6,
      max: 64,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  let user = this;

  if (user.isModified("password")) {
    return bcrypt.hash(user.password, 8, function (error, hash) {
      if (error) {
        console.log("bcrypt hash error", error);
        return next(error);
      }

      user.password = hash;
      return next();
    });
  } else {
    return next();
  }
});

userSchema.methods.comparePassword = function (password, next) {
  bcrypt.compare(password, this.password, function (err, match) {
    if (err) {
      return next(err, false);
    }

    return next(null, match);
  });
};

export default moongose.model("User", userSchema);
