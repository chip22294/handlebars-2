/* eslint-disable no-unused-vars */
const express = require("express")
const router = express.Router()
const hbs = require("hbs")

router.get("/", function (req, res, next) {
  const newLocal = 23
  res.render("index", {
    pageTitle: "Shablonizator /",
    stringVar: "test",
    numberVar: 222,
    boolVar: true,
    listStrVar: ["item1", "item2", "item3"],
    listNumberVar: [0, 1, 2, 3, 4, 5],
    objectVar: {
      objParam1: "value1",
      objParam2: newLocal,
    },
    users: [
      {
        name: "Taras",
        surname: "Berezovets",
        age: 10,
        isAdmin: true,
        _comments: [
          {
            id: 4323,
            text: "Hello, world !!!",
          },
          {
            id: 2345,
            text: "Слава Україні !!!",
          },
        ],
        get comments() {
          return this._comments
        },
        set comments(value) {
          this._comments = value
        },
      },
      {
        name: "Mikola",
        surname: "Shtepa",
        age: 35,
        isAdmin: false,
      },
    ],
  })
})

// eslint-disable-next-line no-unused-vars
router.get("/1", function (req, res, next) {
  res.render("1-var", {
    name: "Dima",
    surname: "Brilyukov",
    random: Math.random(),
    user: {
      login: "login",
      password: "password",
    },
  })
})

router.get("/2", function (req, res, next) {
  res.render("2-with", {
    user: {
      name: "Dima",
    },
    role: "Admin",
  })
})

module.exports = router