export class User{
    // _id:string;
    name:string
	email:string;
	password:string;

    constructor(name:string,email:string, password:string){
        // this._id=_id;
        this.name=name;
        this.email=email;
        this.password=password;
    }

    getEmail():string{
        return this.email;
    }
    getPass():string{
        return this.password
    }
}