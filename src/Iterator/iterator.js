class Container{
    constructor(list){
        this.list = list
    }
    getIterator(){
        return new Iterator(this)
    }
}
class Iterator{
    constructor(list){
        this.list = list.list
        this.index = 0
    }
    next(){
        if(this.hasNext()){
            return this.list[this.index++]
        }
        return null
    }
    hasNext(){
        if(this.index>=this.list.length){
            return false
        }else{
            return true
        }
    }
}
export {Container}
