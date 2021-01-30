// // document.getElementById("first-minus-btn").addEventListener("click", function () {
// //     firstClassTicket(false);
// // });
// // first class plus button event handler
// document.getElementById("first-plus-btn").addEventListener("click", function () {
//     firstClassTicket(true);
// });

// function firstClassTicket(isIncrease) {
//     const firstClassInput = document.getElementById("first-class-input");
//     const firstClassInputNum = parseInt(firstClassInput.value);
//     let firstClassTicketQuantity = 0;
//     if (isIncrease == true) {
//         firstClassTicketQuantity = firstClassInputNum + 1;
//     }
//     if (isIncrease == false && firstClassInputNum > 0) {
//         firstClassTicketQuantity = firstClassInputNum - 1;
//     }
//     // const firstClassInputIncrease = (firstClassInputNum + 1);
//     firstClassInput.value = firstClassTicketQuantity;

//     const firstClassPerPrice = document.getElementById("first-class-perPrice");
//     const firstClassPerPriceNum = parseFloat(firstClassPerPrice.innerText);
//     firstClassPerPrice.innerText = 150 * firstClassInput.value;
// }

// function economyTicket(isIncrease) {
//     const economyInput = document.getElementById("economy-input");
//     const economyInputNum = parseInt(economyInput.value);
//     let economyTicketQuantity = 0;
//     if (isIncrease == true) {
//         economyTicketQuantity = economyInputNum + 1;
//     }
//     if (isIncrease == false && economyInputNum > 0) {
//         economyTicketQuantity = economyInputNum - 1;
//     }
//     economyInput.value = economyTicketQuantity;

//     const economyPerPrice = document.getElementById("economy-perPrice");
//     const economyPerPriceNum = parseFloat(economyPerPrice.innerText);
//     economyPerPrice.innerText = 100 * economyInput.value;
// }



function onlineTicket(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + '-input');
    const ticketInputNum = parseInt(ticketInput.value);
    let ticketQuantity = 0;
    if (isIncrease == true) {
        ticketQuantity = ticketInputNum + 1;
    }
    if (isIncrease == false && ticketInputNum > 0) {
        ticketQuantity = ticketInputNum - 1;
    }
    ticketInput.value = ticketQuantity;

    let totalTicketPrice = 0;
    if (ticket == 'first-class') {
        totalTicketPrice = 150 * ticketInput.value;
    }
    if (ticket == 'economy') {
        totalTicketPrice = 100 * ticketInput.value;
    }
    document.getElementById(ticket + '-perPrice').innerText = totalTicketPrice;

    calculateSubtotal();
}

function calculateSubtotal() {
    const firstClassInput = document.getElementById("first-class-input");
    const firstClassInputNum = parseInt(firstClassInput.value);

    const economyInput = document.getElementById("economy-input");
    const economyInputNum = parseInt(economyInput.value);

    const subtotal = firstClassInputNum * 150 + economyInputNum * 100;
    document.getElementById("sub-total").innerText = subtotal;

    const tax = subtotal * 0.1;
    document.getElementById("tax-amount").innerText = tax;
    const total = subtotal + tax;
    document.getElementById("grand-total").innerText = total;
    return total;
}

function bookNowBTn() {
    alert("Hi there, Thanks for travelling with us. We have received your booking confirmation. Happy journey!");
}

// function calculateSubtotal(ticket) {
//     const ticketInput = document.getElementById(ticket + "-input");
//     const ticketInputNum = parseInt(ticketInput.value);

//     let totalTicketPrice = 0;
//     if (ticket == 'first-class') {
//         totalTicketPrice = 150 * ticketInput.value;
//     }
//     if (ticket == 'economy') {
//         totalTicketPrice = 100 * ticketInput.value;
//     }
//     document.getElementById(ticket + '-perPrice').innerText = totalTicketPrice;

//     const subtotal = ticketInputNum * 150 + economyInputNum * 100;
//     document.getElementById("sub-total").innerText = subtotal;
//     return subtotal;
// }