import { createSlice } from "@reduxjs/toolkit";

let themeSlice = createSlice({

    name:"theme",
    initialState:{
        value:true,
    },
    reducers:{
        chnageTheme:(state , actions)=>{
            state.value = actions.payload
            
        }
    }
})

export let {chnageTheme} = themeSlice.actions
export default themeSlice.reducer