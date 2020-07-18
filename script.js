console.log('good luck!');

const addOrderButton = document.querySelector('.add-order');
const modalInner = document.querySelector('.inner');
const modalOuter = document.querySelector('.outer');
const orderList = document.querySelector('.order-list');
const body = document.querySelector('body');

// Event listener to show the form
const clickAddOrder = (event) => {
    modalOuter.classList.add('open');
}

const handleClick = (event) => {
    const isOutside = !event.target.closest('.inner');
    if (isOutside) {
        modalOuter.classList.remove('open');
    }
};

const escapeClick = (event) => {
    if (event.key === 'Escape') {
        modalOuter.classList.remove('open');
    }
};

addOrderButton.addEventListener('click', clickAddOrder);
window.addEventListener('keydown', escapeClick);
modalOuter.addEventListener('click', handleClick);

const form = document.querySelector('form');
const name = document.querySelector('#name');
const selectDish = document.querySelector('.select-form');
const radioButton = document.querySelectorAll(`[type="radio"]`);
const quantity = document.querySelector('#quantity');
const submitOrderButton = document.querySelector(`[type="submit"]`);
const detailButton = document.querySelector('.detail');
const deleteButton = document.querySelector('.served');

// Submit form
const submitOrder = (event) => {
    event.preventDefault();
    
    const newOrder = `
        <div class="order">
            <span class="title">${name.value}</span>
            <button class="details">Details</button>
            <button class="served">Delete order</button>
        </div>
    `;
    orderList.insertAdjacentHTML("beforeend", newOrder);

    modalOuter.classList.remove('open');

    form.reset();
}
submitOrderButton.addEventListener('click', submitOrder);


const outerDetails = document.querySelector('outer-details');
const innerDetails = document.querySelector('inner-details');

// Showing details
const showDetail = (event) => {
    // if (event.target.classList.contains('details')) {
        
        innerDetails.innerHTML = `
            <div>
                <h2>${name.value}</h2>
                <h3>Order:</h3>
                <h4>${quantity.value} ${radioButton.value} ${selectDish.value}</h4>
                <img max-width="100%" max-height="100%" src="https://picsum.photos/400" alt>
            </div
        `;
        // body.insertAdjacentHTML('beforeend', showingDetails);
        outerDetails.classList.add('open');

    //     const detailsOfOrder = event.target;
    //     detailsOfOrder.add('.outer-detail');
    // }
}

const handleDetails = (event) => {
    const isOutside = !event.target.closest('.inner');
    if (isOutside) {
        outerDetails.classList.remove('open');
    }
};

const escapeDetails = (event) => {
    if (event.key === 'Escape') {
        outerDetails.classList.remove('open');
    }
};
window.addEventListener('keydown', escapeDetails);
// outerDetails.addEventListener('click', handleDetails);
// detailButton.addEventListener('click', showDetail);


// Delete list
const deleteFunction = (event) => {
    if (event.target.classList.contains('served')) {
        const order = event.target;
        order.parentElement.remove();
    }   
}
document.addEventListener('click', deleteFunction);

