const multer = require("@koa/multer");

const uploadAvatar = multer({
  dest: "./uploads",
});

const handleAvatar = uploadAvatar.single("avatar");

module.exports = { handleAvatar };
