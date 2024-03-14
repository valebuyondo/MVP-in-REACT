// AddAsset.js component code snippet
import React, { useState } from 'react';
import axios from 'axios';

const AddAsset = () => {
  const [asset, setAsset] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/assets', { asset });
      console.log(response.data);
      // Add success message or redirection logic here
    } catch (error) {
      console.error('Error adding asset:', error);
      // Add error handling logic here
    }
  };

  return (
    <div>
      <h2>Add New Asset</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter asset name"
          value={asset}
          onChange={(e) => setAsset(e.target.value)}
        />
        <button type="submit">Add Asset</button>
      </form>
    </div>
  );
};

export default AddAsset;
