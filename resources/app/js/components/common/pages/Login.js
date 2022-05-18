import React from 'react'

function Login() {
  return (
    <>
      <div className="container mx-auto p-8 h-screen flex items-center justify-center">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-4xl text-center mb-8 font-thin">E Wallet</h1>

          <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
            <div className="p-8">
              <form method="POST" className="" action="#" onSubmit="return false;">
                <div className="mb-5">
                  <label for="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>

                  <input type="text" name="email" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"/>
                </div>

                <div className="mb-5">
                  <label for="password" className="block mb-2 text-sm font-medium text-gray-600">Password </label>

                  <input type="text" name="password" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"/>
                </div>

                <button className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow">Login</button>
              </form>
            </div>            
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;