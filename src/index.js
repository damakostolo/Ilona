import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import EventStore from './store/EventStore';
import UserStore from './store/UserStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        event: new EventStore(),
        user: new UserStore(),
    }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Context.Provider>,
);

