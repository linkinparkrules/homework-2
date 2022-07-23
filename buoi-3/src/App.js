import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Header, Akatsuki, ThuyDoHoi, Appss, ClickButton, IncreaseButton, TitleCount} from './Card.jsx'
import Pokemon from './pokemonAPI'

function App() {
  const [appear, setAppear] = useState(false);
  return (
    <div className="App">
      {/* <button onClick={() => {setAppear(!appear)}}>appear header</button> */}
      {/* toán tử logical: nếu appear là false thì sẽ lấy luôn kết quả false, còn true thì sẽ lấy kết quả bên phải ngoài cùng
      vậy nên <Header /> phải viết ở bên phải, nếu viết bên trái thì sẽ lấy kết quả là appear */}
      {/* {appear && <Header />}
      <Akatsuki />
      <ThuyDoHoi nghiaDepZai="big heart" />
      <Appss>
        <div>Inside Appss</div>
        
      </Appss>
      <ClickButton />
      <IncreaseButton /> */}
      <Pokemon />
    </div>
  );
}

export default App;
