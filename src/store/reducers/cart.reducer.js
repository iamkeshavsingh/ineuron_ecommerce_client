const INIT_STATE = {
    items: [{
        id: '5sdasd34234dsasa',
        quantity: 1,
        imageUrl: 'http://localhost:3000/macbook.jpeg',
        price: 93000,
        title: 'Macbook Air'
    }, {
        id: '5sdasd34234dsasa',
        quantity: 1,
        imageUrl: 'http://localhost:3000/macbook.jpeg',
        price: 93000,
        title: 'Macbook Air'
    }],
    total: 186000
};

function reducer(state = INIT_STATE, action) {
    return state;
}


export default reducer;