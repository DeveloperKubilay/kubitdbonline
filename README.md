# KubitDBonline

### Short des: [kubitdb](https://github.com/DeveloperKubilay/kubitdb) is used to open an online server for my database system.

## Opening a server
```js
const password = "sifre"
const requestLimit = "1mb"
const databaseFileName = "kubitdbonline"
const port = 80

const kubitdb = require('kubitdb')
const db = new kubitdb(databaseFileName)
const express = require('express')
const app = express()
app.listen(port)
const bodyParser = require("body-parser")
app.use(bodyParser.json({ limit: requestLimit }))
app.use(bodyParser.urlencoded({ limit: requestLimit, extended: true }))

app.get('/kubitdbonlineall/' + password, function (req, res) {
    res.json(db.hepsi())
})

app.post('/kubitdbonline', function (req, res) {
    if (password === req.body.parola) {
        if (req.body.yapilcak === "set") { db.ayarla(req.body.deger1, req.body.deger2) }
        if (req.body.yapilcak === "add") { db.ekle(req.body.deger1, req.body.deger2) }
        if (req.body.yapilcak === "delete") { db.sil(req.body.deger1) }
        if (req.body.yapilcak === "subtract") { db.cıkar(req.body.deger1, req.body.deger2) }
        if (req.body.yapilcak === "push") { db.it(req.body.deger1, req.body.deger2) }
        if (req.body.yapilcak === "clear") { db.temizle() }
        res.end()
    }
})
```

## Connecting to the server
```js
const kubitdbonline = require('kubitdbonline')
const db = new kubitdbonline("https://slyhterindashboard.cf", "sifre")
```

## Fetching data from server (al, bak, get, fetch)
```js
db.al()
db.bak()
db.get()
db.fetch()

const kubitdbonline = require('kubitdbonline')
const db = new kubitdbonline("https://slyhterindashboard.cf", "sifre")
db.al().then(kubitdb => {
  console.log(kubitdb) // get all data
  console.log(kubitdb["elma"]) // you can change "elma"
}
```
### OUTPUT: 3

## Check if data exists on server (has)
```js
db.al()
db.bak()
db.get()
db.fetch()

const kubitdbonline = require('kubitdbonline')
const db = new kubitdbonline("https://slyhterindashboard.cf", "sifre")

db.al().then(kubitdb => {
  var has;
  if (kubitdb["elma"]) {
    has = true
  } else {
    has = false
  }
  console.log(has)
})
```
### OUTPUT: true or false

## Set value on server (ayarla, set)
```js
db.ayarla()
db.set()

const kubitdbonline = require('kubitdbonline')
const db = new kubitdbonline("https://slyhterindashboard.cf", "sifre")
db.ayarla("elma", "yok") 
```
### OUTPUT:
```json
{
  "elma": "yok"
}
```

## Delete key from server (sil, delete, del)
```js
db.sil()
db.delete()
db.del()

const kubitdbonline = require('kubitdbonline')
const db = new kubitdbonline("https://slyhterindashboard.cf", "sifre")
db.sil("elma") 
```
### OUTPUT:
```json
{}
```

## Clear all data on server (temizle, clear, deleteAll, clearAll)
```js
db.temizle()
db.clear()
db.deleteAll()
db.clearAll()

const kubitdbonline = require('kubitdbonline')
const db = new kubitdbonline("https://slyhterindashboard.cf", "sifre")
db.temizle()
```
### OUTPUT:
```json
{}
```


## Subtract from value (çıkar, subtract)
```js
db.cıkar()
db.subtract()

const kubitdbonline = require('kubitdbonline')
const db = new kubitdbonline("https://slyhterindashboard.cf", "sifre")
db.cıkar("elma", 1) 
```
### OUTPUT:
```json
{
  "elma": "9"
}
```


## Push to array or object (it, push)
```js
db.it()
db.push()

const kubitdbonline = require('kubitdbonline')
const db = new kubitdbonline("https://slyhterindashboard.cf", "sifre")
db.it("elma", "deneme")
```
### OUTPUT:
```json
{
  "elma": {
    "deneme",
    {
      deneme: "3",
      "aa": "c"
    }
  }
}
```


## Add to value (ekle, add)
```js
db.ekle()
db.add()

const kubitdbonline = require('kubitdbonline')
const db = new kubitdbonline("https://slyhterindashboard.cf", "sifre")
db.ekle("elma", 1)
```
### OUTPUT:
```json
{
  "elma": 2
}
```



### For Local Database  
##### KubitDB  
- ```npm i kubitdb```  

##### [Using KubitDB](https://www.npmjs.com/package/kubitdb)  

##### Getting an error? Try running this in your console:  
- ```npm i axios express kubitdb body-parser```  

##### Still getting errors?  
- [Join our support server](https://discord.gg/4Xpwwz6pgN)  

##### To Install KubitDBonline  
- ```npm i kubitdbonline```
