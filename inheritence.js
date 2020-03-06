class Parent{
    constructor(){
        this.fatherName="Schwarzenegger";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
        
    }
    getNameFull(){
        return this.name +" " +this.fatherName;

    }
}
const baby =new Child("Arnold");
const baby2 =new Child("Tom");
console.log(baby.getNameFull());
console.log(baby2);