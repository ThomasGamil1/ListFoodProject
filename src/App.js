import React, { useState } from "react";
import { Container} from 'react-bootstrap';
import NavBar from './components/navBar';
import Header from './components/header';
import ListFood from './components/listFood';
import Foods from "./components/foods";
import { items } from "./data";


function App() {
  const [itemData, SetItemData] = useState(items)
  
  // filter category
  const filterCategory = (cat) =>{
    if (cat === 'All'){
      SetItemData(items)
    }else{
    const newArr = items.filter((item) => item.category === cat)
    SetItemData(newArr)}
  }

  // filter search

  const filterSearch = (word) =>{
    if (word !== ""){
      const newArr = items.filter((item) => item.title === word)
      SetItemData(newArr)
    }
  }
  const allCategory = ['All', ...new Set(items.map((i) =>i.category))]
  return (
    <div className="color-body fonts">
      <NavBar filterSearch={filterSearch}/>
      <Container>
        <Header/>
        <ListFood filterCategory={filterCategory} allCategory={allCategory}/>
        <Foods itemData={itemData}/>
      </Container>
    </div>
  );
}

export default App;
