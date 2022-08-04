import React from 'react';
import ClientInput from '../components/home/clientInput';
import ClientOverview from '../components/home/clientOverview';

export default function HomePage() {
    return (
        <div className="App">
            <ClientInput />
            <ClientOverview />
        </div>
    )
}
