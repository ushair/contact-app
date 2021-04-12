import React from 'react'
import Avatar from 'react-avatar'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import {deleteContact} from '../../actions/contactaction'

export const Contacts = ({contact,SelectAll}) => {
    const dispatch = useDispatch();
    const {name,phone,email,id}= contact
    return (              
              <tr>
                  <td scope="row">
                    <div className="custom-control custom-checkbox">
                    <input checked={SelectAll}
                    type="checkbox" className="custom-control-input"/>
                    <label className="custom-control-label"></label>   
                               
                </div>
                </td>
                  <td><Avatar className="mr-2" name={name} size="45" round={true}/>{name}</td>
                  <td>{phone}</td>
                  <td>{email}</td>
                  <td>
                  
                  <Link to={`/contacts/edit/${id}`}>
                      <span className="material-icons">edit</span>
                      </Link>
                     
                      <Link className="material-icons" onClick={()=>{
                        dispatch(deleteContact(id))
                      }}>remove_circle</Link>
                  </td>
                </tr>
    )
}
