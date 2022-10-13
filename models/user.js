const mongoose = require("mongoose");
const path = require("path");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
    googleId: String,
  },
  {
    timestamps: true,
  }
);

// Below is bcrypt and jwt

UserSchema.set("toJSON", {
  transform: function (doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  },
});

UserSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

UserSchema.methods.comparePassword = function (tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb);
};

module.exports = mongoose.model("User", UserSchema);
