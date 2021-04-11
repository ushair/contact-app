import React from 'react'
import { useSelector } from 'react-redux'
import { Contacts } from './Contacts'

export const Contact = () => {
    const contacts = useSelector(state => state.contacts)
    return (
        <div>
            <table class="table shadow">
          <thead>
          <tr>
          </tr>
          <tr>
            <th> </th>
            <th >Name</th>
            <th >Phone</th>
            <th >Email</th>
          </tr>
          </thead>

          <tbody>
          {contacts.map((contact)=>{
            return (
                <Contacts contact={contact}/>)
          })}
          </tbody>
          
      </table>
        </div>
    )
}
