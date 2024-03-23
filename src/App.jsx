import Header from './components/Header';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import { useState } from 'react';
import { sampleSchemaString } from './constants/sample';

function App() {
    const [schema, setSchema] = useState(sampleSchemaString);
    return (
        <>
            <Header />
            <Welcome />
            <Footer />
        </>
    );
}

export default App;
