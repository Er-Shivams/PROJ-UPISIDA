import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';

const columns = [{
    dataField: 'id',
    text: 'SI.No.',
    headerStyle: (colum, colIndex) => {
        return { width: '10%', height: '10px',padding: '0', margin:'0' };
      },
style: () =>{
    return{ height: '10px',padding: '0', margin:'0'};
}
  }, 
  {
    dataField: 'district',
    text: 'District',
    headerStyle: (colum, colIndex) => {
        return { width: '20%', height: '10px',padding: '0', margin:'0' };
      },
style: () =>{
    return{ height: '10px',padding: '0 5px', margin:'0'};
  }
},
  {
    dataField: 'projectName',
    text: 'Flagship Projects',
    sort: true,
    headerStyle: (colum, colIndex) => {
            return { width: '40%', height: '10px',padding: '0 4px', margin:'0' };
          },
    style: () =>{
        return{ height: '10px',color: 'blue', padding: '0 4px', margin:'0'};
    }
  }, 
  {
    dataField: 'area',
    text: 'Total Available Area (in acres)',
    headerStyle: (colum, colIndex) => {
        return { width: '30%', height: '10px',padding: '0', margin:'0'};
      },
style: () =>{
    return{ height: '10px',padding: '0 4px', margin:'0' };
}
     
  }]; 


const Flagship = props =>{
    return (
      <div>
      <BootstrapTable
          striped
          hover
          keyField="id"
          data={props.data}
          columns={columns}
        />
      </div>
    );
}

export default Flagship;