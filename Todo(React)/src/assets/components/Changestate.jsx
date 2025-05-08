import React, { useState } from 'react';

const Changestate = () => {
    const [value, setValue] = useState(0);

    return (
        <div className="text-center mt-10">
            <p className="text-lg font-semibold">The value is <span className="text-blue-500">{value}</span></p>
            <p className="text-md font-medium">{value % 2 === 0 ? "EVEN" : "ODD"}</p>
            <div className="mt-4 space-x-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => setValue(value + 1)}
                >
                    Increment
                </button>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded"
                    onClick={() => setValue(value - 1)}
                >
                    Decrement
                </button>
            </div>
        </div>


    )
}

export default Changestate;