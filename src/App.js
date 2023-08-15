import {createPortal} from 'react-dom';

const domElement = document.getElementById('react-portal-test');

function App() {
    return (<>
        <div></div>
        <div className="App">
            {createPortal(<div className="modal">
                <p>This is part of the modal</p>
            </div>, domElement)}
        </div>
    </>);
}

export default App;
