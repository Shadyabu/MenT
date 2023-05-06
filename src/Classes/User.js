class User{
    constructor(username, password, msgid){
        this.username = username;
        this.password = password;
        this.msgid = msgid;
    }

    //getter for username attribute
    getUsername(){
        return this.username
    }

    //getter for password attribute
    getPassword(){
        return this.password
    }

    getMsgID(){ // 
        return this.msgid
    }

    //login function either TBD or not necessary for the Prototype presentation
    login(username, password){

    }

    //creates a profile for mentors and mentees; Fraaz please complete this
    //I have also not included constructors for mentor and mentee so you have a blank slate to work on
    createProfile(requirements){

    }

}
export default User;

