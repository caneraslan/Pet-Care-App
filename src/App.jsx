import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddPet from './pages/AddPet';

function App() {
    const [petList, setPetList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        const storedPets = JSON.parse(localStorage.getItem('pets')) || [];
        setPetList(storedPets);
    }, []);

    const handleAddPet = (petData, editIndex = null) => {
        const updatedPetList = [...petList];
        if (editIndex !== null) {
            updatedPetList[editIndex] = petData;
        } else {
            updatedPetList.push(petData);
        }
        setPetList(updatedPetList);
        localStorage.setItem('pets', JSON.stringify(updatedPetList));
    };

    const handleDelete = (index) => {
        const updatedPetList = petList.filter((_, i) => i !== index);
        setPetList(updatedPetList);
        localStorage.setItem('pets', JSON.stringify(updatedPetList));
    };


    const handleEdit = (index) => {
        setEditIndex(index); // Düzenlenecek öğeyi seçiyoruz
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home petList={petList} onDelete={handleDelete} onEdit={handleEdit} />} />
                <Route path="/add-pet" element={<AddPet onAddPet={handleAddPet} petList={petList} />} />
            </Routes>
        </Router>
    );
}

export default App;
