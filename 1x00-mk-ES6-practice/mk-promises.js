export default class Promises {
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }

    static sayHi(name= 'World') {
        return `Hello ${name}!`;
    }
}

