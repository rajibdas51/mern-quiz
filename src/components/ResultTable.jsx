import React from 'react';
import '../styles/result.css';
const ResultTable = () => {
  return (
    <div>
      <table>
        <thead className='table-header'>
          <tr className='table-row'>
            <td>Name</td>
            <td>Attemps</td>
            <td>Earned points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          <tr className='table-body'>
            <td>Rajib Das</td>
            <td>03</td>
            <td>20</td>
            <td>passed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
