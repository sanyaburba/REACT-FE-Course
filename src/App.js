import './App.css';
import Head from "./components/Head/Head";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
    return (
        <ErrorBoundary>
            <div className="App">
                <Head/>
                <Main/>
                <Footer/>
            </div>
        </ErrorBoundary>
    );
}

export default App;