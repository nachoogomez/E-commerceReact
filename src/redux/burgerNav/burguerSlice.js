const { createSlice } = require("@reduxjs/toolkit");


const INITIAL_STATE = {
    hidden: true,
}

const burgerSlice = createSlice({
    name: 'burguer',
    initialState: INITIAL_STATE,
    reducers: {
        toggleHiddenBurguer: (state) => {
            return {
              ...state,
              hidden: !state.hidden,
            };
          },
    }
}

)

export const {toggleHiddenBurguer} = burgerSlice.actions;

export default burgerSlice.reducer;