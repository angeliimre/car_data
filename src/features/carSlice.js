import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

const carSlice=createSlice({
    name:"car",
    initialState:{
        value:{},
        value2:"ffdddsf",
        cars:[],
        status:"loading",
        visibility:"hidden"
    },
    reducers:{
        megjelenit:function(state){
            state.visibility="visible";
        },
        elrejt:(state)=>{
            state.visibility="hidden";
        },
        kiolvas:(state,action)=>{
            const id=action.payload;
            const index=state.cars.findIndex(function(item){
                return item.id==id;
            });
            state.value=state.cars[index];
        }
    },
    extraReducers: (build)=>{
        build.addCase(getCars.pending,(state)=>{
            state.status="loading"
        }).addCase(getCars.fulfilled,(state,action)=>{
            state.cars=action.payload;
            state.status="ok";
        })
    }
})

const getCars=createAsyncThunk(null,async()=>{
    const result=await fetch("data.json");
    return result.json();
})

export {getCars};
export default carSlice.reducer;
export const {megjelenit,elrejt,kiolvas}=carSlice.actions;