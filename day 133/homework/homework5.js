let person = {
    firstName: "Maya",
    lastName: "Tsereteli",
    
    sayHello: function() {
        console.log(`გამარჯობა, მე ვარ ${this.firstName} ${this.lastName}`);
    }
};

person.sayHello();