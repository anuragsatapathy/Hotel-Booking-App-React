import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hotels: [],         // all hotels
  selectedHotel: null // hotel user clicked
};

export const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    setHotels: (state, action) => {
      state.hotels = action.payload;
    },
    selectHotel: (state, action) => {
      state.selectedHotel = action.payload;
    },
  },
});

export const { setHotels, selectHotel } = hotelSlice.actions;
export default hotelSlice.reducer;
