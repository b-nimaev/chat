const express = require("express")
const router = express.Router();

router.post("/register", async function (request, response) {
    try {
        console.log(request.req)
    } catch (err) {
        console.log(err)
    }
})

export default userRouter