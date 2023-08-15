import ReactDOM from 'react-dom/client';

function App() {
    return (
        <div className="App">
            {ReactDOM.createPortal(
                <div className="modal">
                    <p>This is part of the modal</p>
                </div>,
                document.getElementById('react-portal-test')
            )}
        </div>
    );
}

export default App;
