import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPet = ({ onAddPet, petList }) => {
    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('');
    const [petAge, setPetAge] = useState('');
    const [petHealth, setPetHealth] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const navigate = useNavigate();


    const handleGoBack = () => {
        navigate(-1); // Bir önceki sayfaya git
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPet = {
            petName,
            petType,
            petAge,
            petHealth,
            comments: [],
        };

        // Eğer editIndex varsa, mevcut pet'i güncelle
        if (editIndex !== null) {
            onAddPet(newPet, editIndex);
        } else {
            // Yeni pet ekle
            onAddPet(newPet);
        }

        // Formu sıfırla
        setPetName('');
        setPetType('');
        setPetAge('');
        setPetHealth('');
    };


    return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">Add a New Pet</h1>

                <button
                    onClick={handleGoBack}
                    className="mb-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
                >
                    Geri Dön
                </button>

                <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label htmlFor="petName" className="block text-sm font-medium text-gray-700">Pet Name</label>
                        <input
                            type="text"
                            id="petName"
                            value={petName}
                            onChange={(e) => setPetName(e.target.value)}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="petType" className="block text-sm font-medium text-gray-700">Pet Type</label>
                        <input
                            type="text"
                            id="petType"
                            value={petType}
                            onChange={(e) => setPetType(e.target.value)}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="petAge" className="block text-sm font-medium text-gray-700">Pet Age</label>
                        <input
                            type="number"
                            id="petAge"
                            value={petAge}
                            onChange={(e) => setPetAge(e.target.value)}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="petHealth" className="block text-sm font-medium text-gray-700">Pet Health</label>
                        <textarea
                            id="petHealth"
                            value={petHealth}
                            onChange={(e) => setPetHealth(e.target.value)}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
                            {editIndex !== null ? 'Edit Pet' : 'Save Pet'}
                        </button>
                    </div>
                </form>
            </div>
    );
};

export default AddPet;
