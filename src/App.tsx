import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

import { routes } from './routes';

function App() {

  // const location = useLocation();


  return (
    <>
      <Routes>

        {
          routes.pages.map((item) => {
            return (
              <>
                {item.component && <Route path={item.path} element={<item.component />} />}
                {
                  item.subs.length > 0 && item.subs.map((item) => {
                    if (item.component) {
                      return (
                        <Route path={item.path} element={<item.component />} />
                      )
                    }

                  })
                }
              </>
            )
          })
        }
      </Routes>
    </>
  );
}

export default App;
