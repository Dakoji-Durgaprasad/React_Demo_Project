import React from 'react';
import ReactDOM from 'react-dom';

// import HeadComponent from './Components/Header/header';

htmlRoot = document.getElementById('root');
rootReact = ReactDOM.createRoot(htmlRoot);

// const HeaderComponent = () => (<HeadComponent/>);
const HeadComponent = () => (
    <div className="header">
        <div className="logo">
            <img src="" alt="logo-image"/>
        </div>
        <div className="nav-bar">
            <ul>
                <li>HOME</li>
                <li>SERVICES</li>
                <li>CONTACT US</li>
                <li>CART</li>
            </ul>
        </div>
    </div>
);

const BodyComponent = () => (<>Body Part</>);

const FooterComponent = () => (<>Footer Part</>);


const RootComponent = () => (
    <>
        <HeadComponent/>
        <BodyComponent />
        <FooterComponent />
    </>
    );

rootReact.render(<RootComponent />);