import React from 'react'
import "./Home.css";

import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

export default function Home() {
  return (
    <main>
       <SearchForm />
      <CocktailList />
    </main>
  )
}