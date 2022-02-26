import React from 'react';
import Footer from '../components/Layout/Footer/Footer';
import SignInMain from '../components/SignIn/SignInMain';
import Header from '../components/Layout/Header/Header';

class Index extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <SignInMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default Index;

