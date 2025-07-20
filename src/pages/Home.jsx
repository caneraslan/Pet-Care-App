import React from 'react';
import PetList from '../components/PetList';
import {Link} from 'react-router-dom';

const Home = ({ petList, onDelete, onEdit }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Pet Form</h1>
            <Link to="/add-pet">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md mb-4">
                    Add Pet
                </button>
            </Link>
            {/* Eğer petList boşsa bir mesaj göster */}
            {petList.length === 0 ? (
                <p className="text-xl font-semibold text-gray-700">No pets available. Add a pet to get started!</p>
            ) : (
                <PetList petList={petList} onDelete={onDelete} onEdit={onEdit} />
            )}
        </div>
    );
};

export default Home;
