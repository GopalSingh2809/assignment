import React from 'react'
import {useState,useEffect} from 'react';
import { Post } from '../model/posts';
import axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
const TableComponent = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
          setPosts(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'userId', headerName: 'User ID', width: 50 },
        { field: 'title', headerName: 'Title', width: 200 },
        { field: 'body', headerName: 'Body', width: 300 },
      ];
  return (
    <div style={{ height: "400px", width: '100%' }}>
        <DataGrid rows={posts} columns={columns} style={{border:"3px solid blue",boxShadow:"3px 3px 5px blue",fontFamily:"'Poppins',sans-serif"}}/>
    </div>
  )
}

export default TableComponent
