export class Products{
    // _id:string;
    id:Number
	name:string;
	price:Number;

    constructor(id:Number,name:string, price:Number){
        // this._id=_id;
        this.id=id;
        this.name=name;
        this.price=price;
    }
}