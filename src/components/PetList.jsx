import React from 'react';

function PetList({ petList, handleEdit, handleDelete }) {
    return (
        <div className="mt-8 w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Pet List</h2>
            <ul className="mt-4">
                {petList.map((pet, index) => (
                    <li key={index} className="mb-4">
                        <div className="p-4 bg-gray-50 rounded-md shadow-sm">
                            <h3 className="text-lg font-bold text-gray-700">{pet.petName}</h3>
                            <p className="text-sm text-gray-500">Tür: {pet.petType}</p>
                            <p className="text-sm text-gray-500">Yaş: {pet.petAge}</p>
                            <p className="text-sm text-gray-500">Sağlık Durumu: {pet.petHealth}</p>

                            {/* Yorumlar */}
                            <div className="mt-4">
                                <h4 className="text-sm font-medium text-gray-600">Comments</h4>
                                <ul className="mt-2">
                                    {pet.comments.map((comment, idx) => (
                                        <li key={idx} className="text-sm text-gray-500">{comment}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Düzenleme ve Silme Butonları */}
                            <button
                                onClick={() => handleEdit(index)} // handleEdit fonksiyonuna index'i gönderiyoruz
                                className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded-lg"
                            >
                                Edit
                            </button>

                            <button
                                onClick={() => handleDelete(index)}
                                className="mt-2 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PetList;
