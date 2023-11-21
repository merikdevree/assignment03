//constants for form data

const form = document.querySelector('#form');



//create pizza class
class Pizza {
    constructor(size, crust, toppings, sauce, instructions) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.sauce = sauce;
        this.instructions = instructions;
    }

    displayOrder() {
        return `You ordered a ${this.size} pizza with ${this.crust} crust, ${this.toppings} and ${this.sauce} sauce. Special instructions: ${this.instructions}`;
    }
}

function getFormData(){
    //get values from form
    size = form.elements['size'].value;
    crust = form.elements['crust'].value;
    //get values of checkboxes as an array
    formToppings = form.elements['toppings'];
    toppings = [];
    for (let i = 0; i < formToppings.length; i++) {
        if (formToppings[i].checked) {
            toppings.push(formToppings[i].value);
        }
    }
    sauce = form.elements['sauce'].value;
    if (sauce === '') {
        sauce = 'None';
    }
    instructions = form.elements['instructions'].value;
    if (instructions === '') {
        instructions = 'None';
    }
    //log pizza object to console
    pizza = new Pizza(size, crust, toppings, sauce, instructions);
}
 
//add event listener to form
form.addEventListener('submit', (event) => {
    event.preventDefault();
    getFormData();
    console.log(pizza.displayOrder());
    form.reset();
}
);
