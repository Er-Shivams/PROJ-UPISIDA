import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const columns = [{
    dataField: 'id',
    text: 'SI.No.',
    headerStyle: (colum, colIndex) => {
        return {backgroundColor:"Yellow",};
    },
    style: (colum,colIndex) =>{
        return{alignItems: 'center'}
    }
  }, 
  {
    dataField: 'ref_no',
    text: 'Order Ref. No.',
    headerStyle: (colum, colIndex) => {
        return {backgroundColor:"Yellow",};
    },
    style: (colum,colIndex) =>{
        return{alignItems: 'center'}
    }
},
  {
    dataField: 'category',
    text: 'Category',
    headerStyle: (colum, colIndex) => {
        return {backgroundColor:"Yellow", };
    },
    style: (colum,colIndex) =>{
        return{alignItems: 'center'}
    }
  }, 
  {
    dataField: 'year',
    text: 'Issue Year',
    headerStyle: (colum, colIndex) => {
        return {backgroundColor:"Yellow",};
    },
    style: (colum,colIndex) =>{
        return{alignItems: 'center'}
    }
},  
{
    dataField: 'date',
    text: 'Issue Date',
    headerStyle: (colum, colIndex) => {
        return {backgroundColor:"Yellow", };
    },
    style: (colum,colIndex) =>{
        return{alignItems: 'center'}
    }
  },
  {
    dataField: 'section',
    text: 'Section',
    headerStyle: (colum, colIndex) => {
        return {backgroundColor:"Yellow",};
    },
    style: (colum,colIndex) =>{
        return{alignItems:'center'}
    }
  }, 
  {
    dataField: 'subject',
    text: 'Subject',
    headerStyle: (colum, colIndex) => {
        return {backgroundColor:"Yellow",};
    },
    style: (colum,colIndex) =>{
        return{alignItems: 'center'}
    }
  }, 
  {
    dataField: 'description',
    text: 'Description',
    headerStyle: (colum, colIndex) => {
        return {backgroundColor:"Yellow",};
    },
    style: (colum,colIndex) =>{
        return{alignItems: 'center'}
    }
  },
  {
    dataField: 'download',
    text: '',
    headerStyle: (colum, colIndex) => {
        return {backgroundColor:"Yellow", width:'20%', padding:'auto 10px',margin:'0'};
    },
    style: (colum,colIndex) =>{
        return{alignItems: 'center', color:'blue'}
    }
}
  ]; 


const OrderTable = props =>{
    return (
      <div style={{margin: 'auto'}}>
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

export default OrderTable;