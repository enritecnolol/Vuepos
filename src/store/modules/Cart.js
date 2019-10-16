import moment from '../../lib/moment'
export const CartModule = {
    namespaced: true,
    state: {
        cartItems:[],
        holdCart:JSON.parse(localStorage.getItem('holdCart')) || []
    },
    getters: {
        ItemsQuantity(state)
        {
            return state.cartItems.length
        },
        SubTotal(state)
        {
            var sum = 0;
            for(var index in state.cartItems)
            {
                sum+=state.cartItems[index].total
            }
            return sum;
        },
        Total(state)
        {
            var sum = 0;
            for(var index in state.cartItems)
            {
                sum+=state.cartItems[index].total
            }
            return sum;
        }
    },
    mutations: {
        ADD_ITEM (state, item)
        {
            state.cartItems.push(item)
        },
        CHANGE_QUANTITY(state, item)
        {
            state.cartItems.map((cartItem) => {
                if (cartItem.id == item.id)
                {
                    cartItem.quantity += 1;
                    cartItem.total = cartItem.quantity * cartItem.price;
                    return;
                }
            })
        },
        REMOVE_ITEM(state, item_id){
            state.cartItems.map((cartItem, index) => {
                if (cartItem.id == item_id)
                {
                    cartItem.quantity -= 1;
                    cartItem.total = cartItem.total - cartItem.price;
                    if(cartItem.quantity <= 0)
                    {
                        state.cartItems.splice(index,1);
                        return;
                    }
                    return;
                }
            })
        },
        REMOVE_ALL_ITEM(state)
        {
            state.cartItems = [];
        },
        SET_CART_ITEMS(state, cart)
        {
            state.cartItems = cart;
        }
    },
    actions: {
        addItem({ commit, state }, item) {
            var foundIteminCart = state.cartItems.find(cartItem => cartItem.id == item.id);
            if(foundIteminCart)
            {
                commit("CHANGE_QUANTITY", item);
            }else{
                commit("ADD_ITEM", {
                    id:item.id,
                    name:item.name,
                    price:item.price,
                    quantity:1,
                    total:item.price
                });
            }
        },
        removeItem({ commit, state }, item_id)
        {
            commit("REMOVE_ITEM", item_id);
        },
        removeAllItems({ commit, state })
        {
            commit("REMOVE_ALL_ITEM");
        },
        holdCartSave({ commit, state }, description)
        {
            var array = [];
            array = state.holdCart;
            array.push({
                cart:state.cartItems,
                description:description,
                dateTime: moment().format('LLLL'),
            });
            localStorage.setItem('holdCart', JSON.stringify(array));
            commit("REMOVE_ALL_ITEM");
        },
        passToCart({ commit, state }, {index, cartItem, currentCartItemsMoveToHoldSale})
        {
            var HoldSaleSelected = [];
            var currentCartItems= [];
            var HoldSaleList = [];

            return new Promise((resolve, reject) => {

                HoldSaleList = state.holdCart; // Hold Sale List
                HoldSaleSelected = state.holdCart[index]; // this is the hold sale selected on the view
                if (currentCartItemsMoveToHoldSale)
                {
                    if(state.cartItems.length != 0){ // asking if cartItems has items in list
                        currentCartItems = state.cartItems;

                        HoldSaleList.push({ // Now adding the new Items the was on the cart before selected the hold sale
                            cart:currentCartItems,
                            description:'',
                            dateTime: moment().format('LLLL'),
                        });
                    }
                }

                HoldSaleList.splice(index, 1); // Here deleting from Hold Sale list the item that was selected

                localStorage.setItem('holdCart', JSON.stringify(HoldSaleList));

                commit('SET_CART_ITEMS', cartItem.cart); // equaling the cart items to the hold sale that was selected

                resolve();

            })

        },
        removeHoldSale({ commit, state }, {index, cartItem})
        {
            var HoldSaleList = [];

            HoldSaleList = state.holdCart;
            HoldSaleList.splice(index, 1);

            localStorage.setItem('holdCart', JSON.stringify(HoldSaleList));
        }

    }
};
