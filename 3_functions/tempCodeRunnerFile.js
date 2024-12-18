const user = {
    username : "hitesh",
    price: 999,

    welcomeMessage : function(){
        // here this is for the current context of this const user
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}
