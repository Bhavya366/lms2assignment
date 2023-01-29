import React from 'react';
import ComponentOne  from './components';

const App = () => {
    return (               
        <div style={{display:"flex",margin:"10% 10% 10% 10%"}} className="ui cards">            
            <ComponentOne name="Elliot Fu" friend="Elliot Fu" content="Elliot requested permission to view your contact details"/>
            <ComponentOne name="Jenny Hess" friend="New Member" content="Jenny wants to add you to the group <b>best friends"/>
        </div>
    );
};

export default App;