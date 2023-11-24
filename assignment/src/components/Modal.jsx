import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';
import { API } from './Context';

const Modal = ({ selectedItem, onClose, actionType }) => {
  const { data, setData } = useContext(API);
  const [editedName, setEditedName] = useState('');

  useEffect(() => {
    setEditedName(selectedItem ? selectedItem.name || '' : '');
  }, [selectedItem]);

  const handleSave = () => {
    const updatedData = data.map((item) =>
      item === selectedItem ? { ...item, name: editedName } : item
    );
    setData(updatedData);
    onClose();
  };

  const handleDelete = () => {
    const updatedData = data.filter((entry) => entry !== selectedItem);
    setData(updatedData);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{actionType === 'edit' ? 'Edit Entry' : 'Delete Entry'}</h2>
        {actionType === 'edit' && (
          <>
            <label>
              Name:
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
            </label>
            <div className="modal-buttons">
              <button onClick={handleSave}>
                <FontAwesomeIcon icon={faEdit} /> Save
              </button>
            </div>
          </>
        )}
        {actionType === 'delete' && (
          <div className="modal-buttons">
            <p>Are you sure you want to delete this entry?</p>
            <button onClick={handleDelete}>
              <FontAwesomeIcon icon={faTrash} /> Delete
            </button>
          </div>
        )}
        <div className="modal-buttons">
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
