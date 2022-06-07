//Modül version 1.0.4

//Modül MİT lisanslıdır
//axios modülünün yardımı ile çalışmaktadır ve bu modülün sahibi: Discord kubi#5443
//Hatamı alıyorsun konsola npm i axios yazmayı dene
//Hala hatamı alıyorsun Yardım sunucumuza gel https://discord.gg/4Xpwwz6pgN
//İyi günler İyi kodlamalar :)

const fetch = require('axios')
module.exports = class kubitdbonline {
constructor(urlcik,sifre){
this.url = urlcik
if(!this.url) throw new TypeError("KubitDB online\nUrl girmediniz\nYou did not enter the url\n" + __dirname)
this.sifre = sifre
if(!this.sifre) throw new TypeError("KubitDB online\nŞifre girmediniz\nYou did not enter a password\n" + __dirname)
}

set(veri, deger) {
if (!veri || !deger) return;
fetch.post(`${this.url}/kubitdbonline`,{parola:this.sifre,yapilcak:"set",deger1:veri,deger2:deger}).catch(() => {return;})
return;}
ayarla(veri, deger) {
if (!veri || !deger) return;
fetch.post(`${this.url}/kubitdbonline`,{parola:this.sifre,yapilcak:"set",deger1:veri,deger2:deger}).catch(() => {return;})
return;}

fetch () {
const api = fetch.get(`${this.url}/kubitdbonlineall/`+this.sifre).then(res=>res.data).catch(() => {return{}})
return api}
get() {
const api = fetch.get(`${this.url}/kubitdbonlineall/`+this.sifre).then(res=>res.data).catch(() => {return{}})
return api;}
al() {
const api = fetch.get(`${this.url}/kubitdbonlineall/`+this.sifre).then(res=>res.data).catch(() => {return{}})
return api;}
bak() {
const api = fetch.get(`${this.url}/kubitdbonlineall/`+this.sifre).then(res=>res.data).catch(() => {return{}})
return api;}

sil(veri) {
if (!veri) return;
fetch.post(`${this.url}/kubitdbonline`,{parola:this.sifre,yapilcak:"delete",deger1:veri}).catch(() => {return;})
return;}
delete(veri) {
if (!veri) return;
fetch.post(`${this.url}/kubitdbonline`,{parola:this.sifre,yapilcak:"delete",deger1:veri}).catch(() => {return;})
return;}
del(veri) {
if (!veri) return;
fetch.post(`${this.url}/kubitdbonline`,{parola:this.sifre,yapilcak:"delete",deger1:veri}).catch(() => {return;})
return;}

cıkar(veri,miktar) {
if(!miktar || !veri) return;
fetch.post(`${this.url}/kubitdbonline`,{parola:this.sifre,yapilcak:"subtract",deger1:veri,deger2:miktar}).catch(() => {return;})
return;}
subtract(veri,miktar) {
if(!miktar || !veri) return;
fetch.post(`${this.url}/kubitdbonline`,{parola:this.sifre,yapilcak:"subtract",deger1:veri,deger2:miktar}).catch(() => {return;})
return;}

it(veri,deger) {
if (!deger || !veri) return;
fetch.post(`${this.url}/kubitdbonline`,{parola:this.sifre,yapilcak:"push",deger1:veri,deger2:deger}).catch(() => {return;})
return;}
push(veri,deger) {
if (!deger || !veri) return;
fetch.post(`${this.url}/kubitdbonline`,{parola:this.sifre,yapilcak:"push",deger1:veri,deger2:deger}).catch(() => {return;})
return;}

ekle(veri,deger) {
if (!deger || !veri) return;
fetch.post(`${this.url}/kubitdbonline`,{parola:this.sifre,yapilcak:"add",deger1:veri,deger2:Number(deger)}).catch(() => {return;})
return;}
add(veri,deger) {
if (!deger || !veri) return;
fetch.post(`${this.url}/kubitdbonline`,{parola:this.sifre,yapilcak:"add",deger1:veri,deger2:Number(deger)}).catch(() => {return;})
return;}

temizle() {
fetch.post(`${this.url}/kubitdbonline`,{parola:this.sifre,yapilcak:"clear"}).catch(() => {})
return;}
clearAll() {
fetch.post(`${this.url}/kubitdbonline`,{parola:this.sifre,yapilcak:"clear"}).catch(() => {})
return;}
deleteAll() {
fetch.post(`${this.url}/kubitdbonline`,{parola:this.sifre,yapilcak:"clear"}).catch(() => {})
return;}
clear() {
fetch.post(`${this.url}/kubitdbonline`,{parola:this.sifre,yapilcak:"clear"}).catch(() => {})
return;}
}