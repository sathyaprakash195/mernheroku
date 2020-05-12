import React, { Component, useState,useEffect,browserHistory  } from 'react';
import { Route , withRouter,Redirect,useHistory,} from 'react-router-dom';

import axios from 'axios';


const Update = ({match},proos) => {

    const history = useHistory();

    const id=match.params.id;
    const [name, setname] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');


    useEffect(()=>{
        axios.post('/api/user/getuserbyid',{id:id}).then(
            res=>{

               console.log(res.data);
               setname(res.data.name);
               setusername(res.data.username);
               setpassword(res.data.password);

               
            }
        )
        
    },[])

   
    


    function Updateuser () {
        var user={
            id:id,
            name:name,
            username:username,
            password:password

        }

        
        axios.post('/api/user/updateuserbyid',user).then(
            res=>{
                alert(res.data);
                console.log(res.data);
                history.push('/userslist')
            }
        )
        
    }

    return (
        <div className="row justify-content-center">
            <div className='col-md-4'>
                <h1>Update Page</h1>

                <div className="m-2 p-2">

                    <input type="text"
                        className="form-control"
                        name="name"
                        placeholder="name"
                        value={name}
                        onChange={(e) => { setname(e.target.value) }}
                    />

                    <input type="text"
                        className="form-control"
                        name="username"
                        placeholder="username"
                        value={username}
                        onChange={(e) => { setusername(e.target.value) }}
                    />

                    <input type="text"
                        className="form-control"
                        name="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => { setpassword(e.target.value) }}
                    />
                    
                    <button onClick={Updateuser} className='btn btn-primary'>Update</button>
                </div>



            </div>
        </div>

    )
}
export default Update;