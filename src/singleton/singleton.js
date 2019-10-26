class Singleton{
    operateFile(){
        console.log("file is operated")
    }
}
Singleton.instance = (function () {
    let instance
   return function () {
       if(!instance){
           instance = new Singleton()
       }
       return instance
   }

})()
 export {Singleton}
