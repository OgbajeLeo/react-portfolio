import React, { useState } from "react";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password:''
    })

    function handleChange(e){
        setFormData
        ({...formData,[e.target.name]:e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        
        console.log(formData)
        console.log(formData.username,"Na ME run am")
    }
  return (
    <div>
      <form className="max-w-md mx-auto bg-slate-400 shadow-md rounded-md p-4 text-center">
        <h1 className="text-center text-slate-500 text-5xl m-4">Login Form</h1>
        <div className="w-full mb-3">
          <label htmlFor="Username" className="block text-left text-sm">
            Username:
          </label>

          <input
            placeholder="Username"
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
            className="px-2 py-1 w-full text-gray-900 border-2 rounded-2xl border-gray-900 hover:border-blue-400 "
          />
        </div>
        <div className="w-full mb-3 ">
          <label htmlFor="Username" className="block text-left text-sm">
            Password:
          </label>

          <input
            placeholder="Password"
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={formData.password}
            className="px-2 py-1 text-gray-900  rounded-2xl w-full border-2 border-gray-900 hover:border-blue-400 "
          />
        </div>

        <input
          type="submit"
          className="px-2 w-full rounded-2xl py-1 border-2 bg-gray-900 border-gray-00 hover:border-blue-400 "
                  value="Login"
                  onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default LoginForm;
