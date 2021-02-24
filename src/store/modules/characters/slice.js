import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'characters',
  initialState: {
    data: [
      {
      "id": 1009368,
      "name": "Iron Man",
      "description": "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
      "modified": "2016-09-28T12:08:19-0400",
      "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
        "extension": "jpg"
      },
    },
      {
        "id": 1009220,
        "name": "Captain America",
        "description": "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.",
        "modified": "2020-04-04T19:01:59-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087",
          "extension": "jpg"
        },
      },
      {
        "id": 1009664,
        "name": "Thor",
        "description": "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
        "modified": "2020-03-11T10:18:57-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350",
          "extension": "jpg"
        },
      },
      {
        "id": 1009351,
        "name": "Hulk",
        "description": "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.",
        "modified": "2020-07-21T10:35:15-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0",
          "extension": "jpg"
        },
      },
    ],
    isLoading: false
  },
  reducers: {
    getCharactersRequest: (state) => {
      state.isLoading = true
    },
    getCharactersSuccess: (state, action) => {
      state.data = action.payload.data.data.results
      state.isLoading = false
    }
  }
})

export const {
  getCharactersRequest,
  getCharactersSuccess
} = slice.actions

export default slice.reducer