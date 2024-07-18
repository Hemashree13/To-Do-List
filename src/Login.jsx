import { useState } from "react";
export default function Login() {
    function handleSubmit(e) {
        e.preventDefault();
        validatehtmlForm(formvalues);
    }
    const [error, setDisplayerror] = useState({ cemail: "", plower: "", pupper: "", plength: "", pnum: "" })
    const [formvalues, sethtmlFormvalues] = useState({})
    function handleclick(e) {
        sethtmlFormvalues({ ...formvalues, [e.target.name]: e.target.value })
    }
    function validatehtmlForm(formvalues) {
        const newerrors = { cemail: "", plower: "", pupper: "", plength: "", pnum: "" }
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(formvalues.email)) {
            newerrors.cemail = "email is not valid"
        }
        const lowercase = /[a-z]/g;
        if (!lowercase.test(formvalues.password)) {
            newerrors.plower = "password should contain lowercase"
        };
        const uppercase = /[A-Z]/g;
        if (!uppercase.test(formvalues.password)) {
            newerrors.pupper = "password should contain uppercase"
        }
        const numbers = /[0-9]/g;
        if (!numbers.test(formvalues.password)) {
            newerrors.pnum = "password must contain numbers"
        }
        if (!formvalues.password.length() <= 8) {
            newerrors.plength = "password should contain atleast 8 characters"
        }
        setDisplayerror(newerrors)
    }
    const [showpassword,setShowwpassword]=useState(false)
    function ontoggling(){
        setShowwpassword(!showpassword)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={handleclick} />
                    {error.cemail !== "" ? <p style={{ color: "red" }}><i className="fa-solid fa-xmark mx-2" ></i>{error.cemail}</p> : ""}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="htmlForm-label">Password</label>
                    <input type={showpassword?"text":"password"} className="form-control" id="password" name="password" onChange={handleclick} />
                    {error.plower !== "" ? <p style={{ color: "red" }}><i className="fa-solid fa-xmark mx-2" ></i>{error.plower}</p> :""}
                    {error.pupper !== "" ? <p style={{ color: "red" }}><i className="fa-solid fa-xmark mx-2" ></i>{error.pupper}</p> :""}
                    {error.pnum !== "" ? <p style={{ color: "red" }}><i className="fa-solid fa-xmark mx-2" ></i>{error.pnum}</p> : ""}
                    {error.plength !== "" ? <p style={{ color: "red" }}><i className="fa-solid fa-xmark mx-2" ></i>{error.plength}</p> : ""}
                </div>
                <div className="mb-3 for-check">
                    <input type="checkbox" className="form-check-input mx-2" id="exampleCheck1" onClick={ontoggling} />
                    <label className="form-check-label" htmlFor="exampleCheck1">Show Password</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}