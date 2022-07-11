import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Menu from '../Components/Menu';
import '../Style/Admin.css'
import axios from 'axios';
import { useCallback } from 'react';
import User from './User';



function AdminUsers() {
    const [users, setUsers] = useState([])
    const [selectedId, setSelectedId] = useState()
    const [showPage, setShowPage] =  useState(true)

    console.log(selectedId);


    useEffect(() => {
        axios.get("https://62c69ecf2b03e73a58d225ce.mockapi.io/signup")
        .then((res) => setUsers(res.data))
    })

    const getUsers = () => {
        axios.get("https://62c69ecf2b03e73a58d225ce.mockapi.io/signup")
        .then((res) => setUsers(res.data))
    }


    
    // const deleteUserData = () => {
    //   axios.delete("https://62c69ecf2b03e73a58d225ce.mockapi.io/signup/" + selectedId)
    //         .then((res) => {
    //             getUsers()
    //             setUsers(users)
    //         })
    // }

  return (
    <>
    {showPage ? (<>
    <Menu/>
    <div className='admin_users_table'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='right'>No</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Password</TableCell>
            <TableCell align="right">Education</TableCell>
            <TableCell align='right'>More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item, index) => {
            return(
                <TableRow
              key={item.username}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{item.id}</TableCell>
              <TableCell align="right">{item.username}</TableCell>
              <TableCell align="right">{item.password}</TableCell>
              <TableCell align="right">{item.education}</TableCell>
              <TableCell align='right'><button 
              onClick={() => window.location = `/users/${item.id}`}>More</button></TableCell>
            </TableRow>
            )
            })}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
    </>) : (
      <User />
    )}
    </>
  )
}

export default AdminUsers