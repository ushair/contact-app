import React ,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addContact } from '../../actions/contactaction';
import shortid from 'shortid'
import { useHistory } from 'react-router';
export const Addcontact = () => {
    let history = useHistory();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const dispatch = useDispatch()

    function createContact(e){
        e.preventDefault()
        console.log("name:",name);
        console.log("email:",email);
        console.log("phone:",phone);
        const new_contact ={
            id:shortid.generate,
            name:name,
            phone:phone,
            email:email
        }
        dispatch(addContact(new_contact))
        history.push("/")
    }

    return (
        <div>
            <div className="card border-0 shadow">
                <div className="card-header">Add a contact</div>
                <div className="card-body">
                    <form onSubmit={(e)=>createContact(e)}>
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
                        <button className="btn btn-primary" type="submit">Add Contact</button>
                    </form>
                </div>

            </div>
        </div>
    )
}
