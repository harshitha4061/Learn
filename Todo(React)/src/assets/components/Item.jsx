import React from 'react';

const Item = (props) => {
    return (
        <div>
            <li className="flex items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 m-5">
                {props.completed ? <></> : <input type="checkbox" className="mr-4 accent-blue-500" />}
                <p className="text-white">{props.title}</p>
                <p className="ml-auto text-gray-400">...</p>
            </li>
        </div>
    );
}

export default Item;
