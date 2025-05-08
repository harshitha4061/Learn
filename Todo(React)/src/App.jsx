import React from 'react';
import Header from "./assets/components/Header";
import Item from "./assets/components/Item";
import Button from "./assets/components/Button";
import Changestate from "./assets/components/Changestate";

function App() {
  return (
    <>
<div className='w-full h-full p-10 bg-gray-900 flex justify-center items-center'>
  <div className="w-full max-w-xl bg-gray-500 rounded-2xl p-5">
    <Changestate />
    <Header />
    <Item  title="sleep"/>
    <Item completed={true} title="draw"/>
    <Item title="study"/>
    <Item title="read"/>
    <Item title="play"/>
    <Button />
  </div>
</div>

    </>
  );
}

//integrating css is similar

export default App;
