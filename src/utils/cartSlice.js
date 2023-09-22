import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items:[]
    },
    reducers: {
        addItem: (state, action) => {

            /* Vanilla redux - DON'T MUTATE STATE
                return [...state, ...action.payload];
            */

                /* Redux toolkit -
                    we have to mutate it, also no need to return - > but behind the scenes, redux is doing the same as above
                    Redux uses the immer library to do this - it 
                 */
            state.items.push(action.payload)
        },
        removeItem : (state, action)=>{
            state.items.pop()
        },
        clearCart: (state, action)=>{
            // state = [] - won't work - immer works behind the
            console.log(current(state))
            state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;