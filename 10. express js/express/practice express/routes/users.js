
const express = require("express")
    
const router = express.Router()



router.get("/", (req,res) => {
    console.log(req.query.name)
    res.send("user list")
})

router.get("/new", (req,res) => {
    res.render("users/new")
    res.send("user new form")
})

router.post("/", (req,res) => {
    const isValid = true
    if (isValid) {
        users.push({ firstname: req.body.firstname })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("error")
        res.render('users/new', { firstname: req.body.firstname })
    }
    // console.log(req.body.firstname)
    // res.send("hi")
    // res.send("create user")
})


// router
// .route("/:id")
//   .get("/:id", (req,res) => {
//     console.log(req.user)
//     res.send(`user get with ID ${req.params.id}`)
//   })
//   .put("/:id", (req,res) => {
//     res.send(`update get with ID ${req.params.id}`)
//   })
//   .delete("/:id", (req,res) => {
//     res.send(`delete get with ID ${req.params.id}`)
//   })


router.get("/:id", (req,res) => {
    console.log(req.user)
    res.send(`user get with ID ${req.params.id}`)
})

router.put("/:id", (req,res) => {
    res.send(`update get with ID ${req.params.id}`)
})

router.delete("/:id", (req,res) => {
    res.send(`delete get with ID ${req.params.id}`)
})

const users = [{ name: "tom"}, { name: "jerry"}]
router.param("id", (req, res, next, id) => {
    // console.log(id)
    req.user = users[id]
    next() 
})



module.exports = router