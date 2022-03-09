export class User{
    // _id:string;
    Fname:string;
    Lname:string;
    Shopno:string;
	email:string;
	password:string;

    constructor(Fname:string,Lname:string,Shopno:string,email:string, password:string){
        // this._id=_id;
        this.Fname=Fname;
        this.Lname=Lname;
        this.Shopno=Shopno;
        this.email=email;
        this.password=password;
    }

    getEmail():string{
        return this.email;
    }
    getFname():string{
        return this.Fname;
    }
    getLname():string{
        return this.Lname;
    }
    getShopno():string{
        return this.Shopno;
    }
    getPass():string{
        return this.password
    }
}