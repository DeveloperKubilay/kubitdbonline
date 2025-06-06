//If you're getting an error, try typing 'npm i axios' in the console
//Good day and happy coding :)

const fetch = require('axios')

module.exports = class kubitdbonline {
    constructor(urlcik, sifre) {
        this.url = urlcik
        if (!this.url) throw new TypeError("KubitDB online: You did not enter the url\n" + __dirname)
        this.sifre = sifre
        if (!this.sifre) throw new TypeError("KubitDB online: You did not enter a password\n" + __dirname)
    }
    
    // Set functions
    set(veri, deger) {
        if (!veri || !deger) return;
        fetch.post(`${this.url}/kubitdbonline`, { parola: this.sifre, yapilcak: "set", deger1: veri, deger2: deger }).catch(() => { return; })
        return;
    }
    
    ayarla(veri, deger) {
        return this.set(veri, deger);
    }

    // Get functions
    get() {
        const api = fetch.get(`${this.url}/kubitdbonlineall/` + this.sifre).then(res => res.data).catch(() => { return {} })
        return api;
    }
    
    fetch() {
        return this.get();
    }
    
    al() {
        return this.get();
    }
    
    bak() {
        return this.get();
    }

    // Delete functions
    delete(veri) {
        if (!veri) return;
        fetch.post(`${this.url}/kubitdbonline`, { parola: this.sifre, yapilcak: "delete", deger1: veri }).catch(() => { return; })
        return;
    }
    
    del(veri) {
        return this.delete(veri);
    }
    
    sil(veri) {
        return this.delete(veri);
    }

    // Subtract functions
    subtract(veri, miktar) {
        if (!miktar || !veri) return;
        fetch.post(`${this.url}/kubitdbonline`, { parola: this.sifre, yapilcak: "subtract", deger1: veri, deger2: miktar }).catch(() => { return; })
        return;
    }
    
    cıkar(veri, miktar) {
        return this.subtract(veri, miktar);
    }

    // Push functions
    push(veri, deger) {
        if (!deger || !veri) return;
        fetch.post(`${this.url}/kubitdbonline`, { parola: this.sifre, yapilcak: "push", deger1: veri, deger2: deger }).catch(() => { return; })
        return;
    }
    
    it(veri, deger) {
        return this.push(veri, deger);
    }

    // Add functions
    add(veri, deger) {
        if (!deger || !veri) return;
        fetch.post(`${this.url}/kubitdbonline`, { parola: this.sifre, yapilcak: "add", deger1: veri, deger2: Number(deger) }).catch(() => { return; })
        return;
    }
    
    ekle(veri, deger) {
        return this.add(veri, deger);
    }

    // Clear functions
    clear() {
        fetch.post(`${this.url}/kubitdbonline`, { parola: this.sifre, yapilcak: "clear" }).catch(() => { })
        return;
    }
    
    clearAll() {
        return this.clear();
    }
    
    deleteAll() {
        return this.clear();
    }
    
    temizle() {
        return this.clear();
    }
}
