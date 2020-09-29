export default class Fetch {
    constructor(url, config){
        this.url = url
        this.config = config
    }


    async request(){
         return await fetch(this.url, this.config)
         .then(res => res.json())
    }
}