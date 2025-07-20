import React, { useState, useEffect } from 'react';

function PetForm({ petList, handleSubmit, editIndex, setPetName, setPetType, setPetAge, setPetHealth }) {
    // Edit işlemi olduğunda pet bilgilerini formda göstermek için
    useEffect(() => {
        if (editIndex !== null) {
            const pet = petList[editIndex];
            setPetName(pet.petName);
            setPetType(pet.petType);
            setPetAge(pet.petAge);
            setPetHealth(pet.petHealth);
        }
    }, [editIndex, petList, setPetName, setPetType, setPetAge, setPetHealth]);

    return (
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
                    placeholder="Enter pet's name"
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
                    placeholder="Enter pet's type"
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
                    placeholder="Enter pet's age"
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
                    placeholder="Enter pet's health condition"
                />
            </div>

            <div className="flex justify-center">
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
                    {editIndex !== null ? 'Edit Pet' : 'Save Pet'}
                </button>
            </div>
        </form>
    );
}

export default PetForm;
