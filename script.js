console.log('good luck!');

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
addOrderButton.addEventListener('click', clickAddOrder);

// handling all buttons
const handleClickButton = (event) => {

    // Submit button of the form 
    if (event.target.matches('button.submitOrder')) {
        const name = document.querySelector('#name');
        const newOrder = `
        <div class="order">
            <span class="title">${name.value}</span>
            <button class="details">Details</button>
            <button class="served">Delete order</button>
        </div>
    `;
        event.target = newOrder;
        orderList.insertAdjacentHTML('afterbegin', newOrder);
        modalOuter.classList.remove('open');
    }

    // Detail button 
    if (event.target.classList.matches('button.details')) {
        
    }

    // Delete button
    if (event.target.classList.contains('served')) {
        const order = event.target;
        order.parentElement.remove();
    }

}
window.addEventListener('click',handleClickButton);

