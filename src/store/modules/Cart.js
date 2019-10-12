export const CartModule = {
    namespaced: true,
    state: {
        cartItems:[]
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
        }

    }
};
