import React , {useEffect}from 'react'
import Bottombar from './../../partials/Bottombar'
import TopConverter from './sections/TopConverter';
import UserList from './sections/user_list/UserList';


function Dashboard() {

  useEffect(() => {
    scrollTo(0, 0);
}, []);

return (
  <>
      <div className="flex flex-col min-h-screen">
          <div className="container mx-auto px-8 pt-8 pb-24 min-h-screen">
              <div className="max-w-md w-full mx-auto">
                  <h1 className="text-4xl text-center mb-8 font-thin">
                      Dashboard
                  </h1>
                  <TopConverter />
                  <div className="mt-12">
                      <UserList />
                  </div>
              </div>
          </div>

          <Bottombar />
      </div>
  </>
);
}

export default Dashboard;