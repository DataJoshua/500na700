import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Article from "./pages/Article";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [isActiveModal, setIsActiveModal] = useState(false)
  
  const handleOnModal = () => setIsActiveModal(prev => !prev)
  const handleOnCloseModal = () => setIsActiveModal(false)

  return (
    <>
      <BrowserRouter>
        <Header handleOnModal={handleOnModal} />
        <Modal isActive={isActiveModal} closeModal={handleOnCloseModal} />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/news/:id" element={<Article/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
