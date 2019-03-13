import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => (       
        <div className="Category">
            <button className="delete"><Link to='/Project'>Projects</Link></button>
            <button className="delete"><Link to='/Epic'>Projects</Link></button>
            <button className="delete">Versions</button>
            <button className="delete">Stories</button>
            <button className="delete">Tasks</button>
            <button className="delete">Subtasks</button>
            <button className="delete">Bugs</button>
            <button className="delete">Users</button>
            <button className="delete">Backlogs</button>
            <button className="delete">Sprint</button>
            <button className="delete">Labels</button>
            <button className="delete">Components</button>
        </div>
)

export default Category;
