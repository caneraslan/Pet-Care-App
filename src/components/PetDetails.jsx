import React from 'react';

const PetDetails = ({ pet, onEdit, onDelete }) => {
    return (
        <div className="p-4 bg-gray-50 rounded-md shadow-sm">
            <h3 className="text-lg font-bold text-gray-700">{pet.petName}</h3>
            <p className="text-sm text-gray-500">Type: {pet.petType}</p>
            <p className="text-sm text-gray-500">Age: {pet.petAge}</p>
            <p className="text-sm text-gray-500">Health: {pet.petHealth}</p>

            <button
                onClick={onEdit}
                className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded-lg"
            >
                Edit
            </button>

            <button
                onClick={onDelete}
                className="mt-2 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg"
            >
                Delete
            </button>
        </div>
    );
};

export default PetDetails;
