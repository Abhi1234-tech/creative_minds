import React, { useContext, useState } from 'react';
import { API } from './Context';
import Modal from './Modal';
import './Table.css';

const Table = () => {
  const { data } = useContext(API);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleEdit = (item) => {
    setSelectedItem(item);
    setIsEditModalOpen(true);
  };

  const handleDelete = (item) => {
    setSelectedItem(item);
    setIsDeleteModalOpen(true);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>SL.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Pin Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name || 'Data Not Found'}</td>
              <td>{item.age || "Data Not Found"}</td>
              <td>{item.city || "Data Not Found"}</td>
              <td>{item.pinCode || 'Data Not Found'}</td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditModalOpen && (
        <Modal
          selectedItem={selectedItem}
          onClose={() => setIsEditModalOpen(false)}
          actionType="edit"
        />
      )}
      {isDeleteModalOpen && (
        <Modal
          selectedItem={selectedItem}
          onClose={() => setIsDeleteModalOpen(false)}
          actionType="delete"
        />
      )}
    </div>
  );
};

export default Table;
