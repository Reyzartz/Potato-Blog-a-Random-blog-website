const express = require('express');
const router = express.Router();

const {blogIndex,blogDetails,blogCreatePost,blogCreateGet} = require('../controller/BlogController')


router.get("/",blogIndex)

router.post("/",blogCreatePost)

router.get("/create",blogCreateGet)

router.get("/:id",blogDetails)

module.exports = router;
