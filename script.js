console.log('good luck!');

// Grabing elements which I need
const addOrderButton = document.querySelector('.add-order');
const modalInner = document.querySelector('.inner');
const modalOuter = document.querySelector('.outer');
const orderList = document.querySelector('.order-list');
const body = document.querySelector('body');

// Event listener to show the form
const clickAddOrder = (event) => {
    modalInner.innerHTML = `
        <form>
            <p>Your name :</p>
            <input
            class="input-form"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name here"
            required
            />
            <p>Please select your dish :</p>
            <select name="dish" class="select-form" required>
            <option value="romazava">Romazava</option>
            <option value="koba">Koba</option>
            <option value="ravitoto">Ravitoto</option>
            <option value="mokary">Mokary</option>
            <option value="achard">Achard</option>
            <option value="masikita">Masikita</option>
            <option value="sambos">Sambos</option>
            <option value="mofo-baolina">Mofo baolina</option>
            <option value="ranonapango">Ranonapango</option>
            </select>
            <p>Please select the size of your plate :</p>
            <input type="radio" id="small" name="size" value="small" required />
            <label for="small">Small</label><br />
            <input type="radio" id="medium" name="size" value="medium" />
            <label for="medium">Medium</label><br />
            <input type="radio" id="large" name="size" value="large" />
            <label for="large">Large</label><br />
            <p>How many pieces do you want to order?</p>
            <input
            class="input-form"
            type="number"
            id="quantity"
            name="amount"
            placeholder="Enter a number here"
            required
            />
            <button class="submitOrder" type="submit">Add this order</button>
        </form>
    `;
    modalOuter.classList.add('open');
}

// handling all buttons
const submitClickButton = (event) => {
    event.preventDefault();
    // Submit button of the form 
    if (event.target.matches('form')) {
        const form = event.target;
        const name = form.name.value;
        const dish = form.dish.value;
        const size = form.size.value;
        const amount = form.amount.value;

        const anOrder = `
        <div class="order">
            <span class="title">${name}</span>
            <button class="details">Details</button>
            <button class="served">Delete order</button>
        </div>
    `;
        orderList.insertAdjacentHTML('afterbegin', anOrder);
        modalOuter.classList.remove('open');
    }
}

// Detail button
const detailsOrder = event => {
    if (event.target.matches('button.details')) {
        const name = document.querySelector('#name');
        const dish = document.querySelector('.select-form');
        const size = document.querySelector(`[type="radio"]`);
        const amount = document.querySelector('#quantity');
        
        const orderDetails = `
            <h2>${name}</h2>
            <h3>Order:</h3>
            <h4>${amount} ${dish} ${size}</h4>
            <img src="https://picsum.photos/500/200" alt>   
        `;
        
        event.target = orderDetails;

        // This is from HTML
        const innerDetails = document.querySelector('.inner-details');
        innerDetails.insertAdjacentHTML('afterbegin', orderDetails);
        console.log(innerDetails);

        // This is from HTML
        const outerDetails = document.querySelector('.outer-details');
        outerDetails.classList.remove('open');
    }
}

// Delete Order
const deleteOrder = event => {
    if (event.target.classList.contains('served')) {
        const order = event.target;
        order.parentElement.remove();
    }
}

// Add new order event listener
addOrderButton.addEventListener('click', clickAddOrder);

// Submit button event listener
window.addEventListener('submit',submitClickButton);

// Add showing order event listener
window.addEventListener('click',detailsOrder);

// Add delete order event listener
window.addEventListener('click',deleteOrder);

