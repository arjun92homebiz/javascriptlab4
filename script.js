"use strict";

class contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

class addressBook {
    constructor() {
        this.contacts = [];
    }
    add(info) {
        this.contacts.push(info);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    deleteByName(name) {
        this.contacts.splice(name, 1);
        for (let i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].name === name) {
                this.contacts.splice(i, 1);
                break;
            }
        }
    }
    display() {
        document.querySelector(".class_contact").innerHTML = "";
        let count = 0;
        for (let contact of this.contacts) {
            const newEntry = document.createElement("div");
            newEntry.setAttribute("index", count);
            newEntry.classList.add("contactBox");
            newEntry.innerHTML = `
            <p>Name: ${contact.name} </p>
            <p>E-mail: ${contact.email} </P>
            <p>Phone: ${contact.phone} </p>
            <p>Relation: ${contact.relation} </p>
            <i class="material-icons">delete</i>
            `;
            document.querySelector(".class_contact").append(newEntry);
            count++;
        }
    }

}

const book = new addressBook();

//add listener
document.querySelector("form").addEventListener("click", function (event) {
    if (event.target.classList.contains("add_button")) {
        event.preventDefault();
        let inputs = document.querySelectorAll("input"); // this will return in a array of all the inputs
        let info = (new contact(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value))
        book.add(info);
        for(let input of inputs) {
            input.value = "";
        }
        console.log(book);
    };
    book.display();
});
document.querySelector(".class_contact").addEventListener("click", deleteCart);
    function deleteCart(event) {
        if (event.target.tagName === "I") {
            book.deleteAt(event.target.parentNode.attributes[0].value);
            event.target.parentNode.remove();
            console.log(event.target.parentNode.attributes[0].value)
        }
    }
// document.querySelector(".class_contact").addEventListener("click", deleteCart);
// function deleteCart(event) {
//     if (event.target.tagName === "IMG") {
//         console.log("this can be deleted")
//     }
// }
// let div = document.createElement("div");
// div.innerHTML = `
// <p>Name: ${inputs[0].value} </p>
// <p>E-mail: ${inputs[1].value} </P>
// <p>Phone: ${inputs[2].value} </p>
// <p>Relation: ${inputs[3].value} </p>
// <img class="delete_cart" href="">
// `;
// document.querySelector(".class_contact").appendChild(div);
// for (let input of inputs) {
//     input.value = "";
// }

// create a function

// document.querySelector(".add_button").addEventListener("click", createCard);
// function createCard(event) {
//     let inputElements = document.querySelectorAll("input")
//     console.log(inputElements[0].value);
//     console.log(inputElements[1].value);
//     console.log(inputElements[2].value);

//     document.querySelector(".card_container").addEventListener("click", deleteCard);
//     function deleteCard(event) {
//         if (event.target.tagName === "IMG") {       //event.target.tagName is targeting 
//         console.log("this can be deleted.");
//         // DELETE THE PARENT OF EVENT.TARGET
//         }
//     }
//     let div = document.createElement("div"); // create a new element, nothing to do with HTML
//     div.innerHTML = `
//     <p>Name: ${inputElements[0].value} </p>
//     <p>Age: ${inputElements[1].value} </p>
//     <p>Favorite Food: ${inputElements[2].value} </p>
//     <img class="delete_card" src="" >
//     `;
//     document.querySelector(".card_container").append(div); //Selecting a card container from HTML and append the div
//     for (let input of inputElements) {
//         input.value = "";
//     }
// }   