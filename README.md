# KubitDBonline
Versiyon: **kubitdbonline@1.0.4**
Modülün sahibi: **kubi#5443**
## Bilgiler 
**Yardım:** [Yardım sunucusu](https://discord.gg/4Xpwwz6pgN) 
# Kullanımı
## Sunucu açma

```js
const parola = "sifre"
const loglimit = "1mb"
const dosyaismi = "kubitdbonline"
const port = 80

const {kubitdb} = require('kubitdb')
const db = new kubitdb(dosyaismi)
const express = require('express')
const app = express()
app.listen(port)
const bodyParser = require("body-parser")
app.use(bodyParser.json({limit: loglimit}));
app.use(bodyParser.urlencoded({limit: loglimit, extended: true}));

app.get('/kubitdbonlineall/'+parola, function (req, res) {res.json(db.hepsi())})
app.post('/kubitdbonline', function (req, res) {
if (parola === req.body.parola) {
if(req.body.yapilcak === "set"){db.ayarla(req.body.deger1,req.body.deger2)}
if(req.body.yapilcak === "add"){db.ekle(req.body.deger1,req.body.deger2)}
if(req.body.yapilcak === "delete"){db.sil(req.body.deger1)}
if(req.body.yapilcak === "subtract"){db.cıkar(req.body.deger1,req.body.deger2)}
if(req.body.yapilcak === "push"){db.it(req.body.deger1,req.body.deger2)}
if(req.body.yapilcak === "clear"){db.temizle()}  
res.end()
}})
```
## Sunucuya bağlanma
```js
const kubitdbonline = require('kubitdbonline')
const db = new kubitdbonline("https://slyhterindashboard.cf","sifre")

//Sunucuda Bilgi alma (fetch,get,all)
db.al()
db.bak()
db.get()
db.fetch()

const kubitdbonline = require('kubitdbonline')
const db = new kubitdbonline("https://slyhterindashboard.cf","sifre")
db.al().then(kubitdb=>{
console.log(kubitdb)//if you want all data 
console.log(kubitdb["elma"])//elmayı değiştirebilirsiniz
})
})
/*/
3
/*/

//Sunucuda varmı (has)
db.al()
db.bak()
db.get()
db.fetch()

const kubitdbonline = require('kubitdbonline')
const db = new kubitdbonline("https://slyhterindashboard.cf","sifre")

db.al().then(kubitdb=>{
var has;if(kubitdb["elma"]) {has = true} else {has = false}
console.log(has)
})
/*
true
false
*/

//Sunucuda ayarlama (set)
db.ayarla()
db.set()

const kubitdbonline = require('kubitdbonline')
const db = new kubitdbonline("https://slyhterindashboard.cf","sifre")
db.ayarla("elma","yok") 
/*/
{
  "elma":"yok"
}
/*/

//Sunucuda silme (delete)
db.sil()
db.delete()
db.del()

const kubitdbonline = require('kubitdbonline')
const db = new kubitdbonline("https://slyhterindashboard.cf","sifre")
db.sil("elma") 
/*/
{}
/*/

//Sunucuda temizleme (clear)
db.temizle()
db.clear()
db.deleteAll()
db.clearAll()

const kubitdbonline = require('kubitdbonline')
const db = new kubitdbonline("https://slyhterindashboard.cf","sifre")
db.temizle()
/*/
{}
/*/

//Sunucuda cıkarma (subtract)
db.cıkar()
db.subtract()

const kubitdbonline = require('kubitdbonline')
const db = new kubitdbonline("https://slyhterindashboard.cf","sifre")
db.cıkar("elma",1) 
/*/
{
  "elma": "9"
}
/*/

//Sunucuda itme (push)
db.it()
db.push()

const kubitdbonline = require('kubitdbonline')
const db = new kubitdbonline("https://slyhterindashboard.cf","sifre")
db.it("elma","deneme")
/*/
{
  "elma":{
    "deneme",
    {
      deneme:"3",
      "aa":"c"
    }
  }
}
/*/

//Sunucuda ekleme (add)
db.ekle()
db.add()

const kubitdbonline = require('kubitdbonline')
const db = new kubitdbonline("https://slyhterindashboard.cf","sifre")
db.ekle("elma",1)
/*/
{
  "elma": 2
}
/*/

```
### Yerel Database için
##### KubitDB
- ```npm i kubitdb```
##### [KubitDB kullanımı](https://www.npmjs.com/package/kubitdb) 

##### Hatamı alıyorsun konsola npm i axios express kubitdb body-parser yazmayı dene
##### Hala hatamı alıyorsun [Yardım sunucumuza gel](https://discord.gg/4Xpwwz6pgN) 
##### KubitDBonline'yi Yüklemek için
- ```npm i kubitdbonline```
