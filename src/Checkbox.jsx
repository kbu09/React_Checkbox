import React, { useState, useContext, createContext } from 'react';

// Create a context for the checklist state
const ChecklistContext = createContext();

const ChecklistProvider = ({ children }) => {
    const [checklist, setChecklist] = useState({
        isCitizen: false,
        isOver21: false,
    });

    // Function to handle checkbox changes
    const handleChange = (event) => {
        const { name, checked } = event.target;
        setChecklist((prevChecklist) => ({
            ...prevChecklist,
            [name]: checked,
        }));
    };

    return (
        <ChecklistContext.Provider value={{ checklist, handleChange }}>
            {children}
        </ChecklistContext.Provider>
    );
};

const Checklist = () => {
    // Use the checklist context
    const { checklist, handleChange } = useContext(ChecklistContext);

    return (
        <div className='p-5'>
            <h3 className='mb-4'>Checklist</h3>
            <label>
                Are you a citizen :
                <input
                    type="checkbox"
                    name="isCitizen"
                    checked={checklist.isCitizen}
                    onChange={handleChange}
                    className='mx-3'
                />
            </label>
            <br />
            <label>
                Are you over 21 :
                <input
                    type="checkbox"
                    name="isOver21"
                    checked={checklist.isOver21}
                    onChange={handleChange}
                    className='mx-3'
                />
            </label>
            <br />
            <div className='mt-3'>
                <p>Are you a citizen? =  {checklist.isCitizen ? 'Yes' : 'No'}</p>
                <p>Are you over 21? =  {checklist.isOver21 ? 'Yes' : 'No'}</p>
            </div>
        </div>
    );
};

const Checkbox = () => (
    <ChecklistProvider>
        <Checklist />
    </ChecklistProvider>
);

export default Checkbox;
