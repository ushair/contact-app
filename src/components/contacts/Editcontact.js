import React ,{useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {  getContact, updateContact } from '../../actions/contactaction';
import shortid from 'shortid'
import { useHistory, useParams } from 'react-router';
export const Editcontact = () => {

    let {id} = useParams();
    let history = useHistory();
    
    const contact = useSelector((state)=>state.contact.contact)
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const dispatch = useDispatch()

    useEffect(() => {
        if(contact!=null){
            setName(contact.name)
            setPhone(contact.phone)
            setEmail(contact.email)
        }
        dispatch(getContact(id))
    }, [contact])

    function onUpdateContact(e){
        e.preventDefault();
        const update_contact =Object.assign(contact,{
            name:name,
            phone:phone,
            email:email
        })
        dispatch(updateContact(update_contact));
        history.push("/");
    }
    
    return (
        <div>
            <div className="card border-0 shadow">
                <div className="card-header">Add a contact</div>
                <div className="card-body">
                    <form onSubmit={(e)=>onUpdateContact(e)}>
                        <div className="form-group">
                            <input type="text" className="form-control"
                            placeholder="Enter you Name"
                            value={name}
                                onChange={(e)=>setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control"
                            placeholder="Enter you Phone number"
                            value={phone}
                                onChange={(e)=>setPhone(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control"
                            placeholder="Enter you Email ID "
                            value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-danger" type="submit">Edit Contact</button>
                    </form>
                </div>

            </div>
        </div>
    )
}
