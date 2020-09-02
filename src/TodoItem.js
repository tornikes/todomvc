import React, { useState, useEffect } from 'react';

export default function TodoItem({ id, editing, task, complete, onToggleComplete, onRemoveTodo, onStartEditing, onEndEditing }) {
    const [val, setVal] = useState(task);
    const editInputRef = React.createRef();
    useEffect(() => {
        if (editing) {
            editInputRef.current.focus();
        }
    });

    return (
        <li className={`${complete ? 'completed' : ''} ${editing ? 'editing' : ''}`}>
            <div className="view">
                <input
                    type="checkbox"
                    checked={complete}
                    className="toggle"
                    onChange={onToggleComplete}
                />
                <label onDoubleClick={onStartEditing}>{val}</label>
                <button onClick={onRemoveTodo} className="destroy"></button>
            </div>
            <input
                ref={editInputRef}
                type="text"
                className="edit"
                onBlur={() => onEndEditing(id, val)}
                onKeyDown={(e) => {
                    if(e.keyCode === 13) {
                        onEndEditing(id, val);
                    }
                }}
                value={val}
                onChange={e => setVal(e.target.value)}
            />
        </li>
    );
}