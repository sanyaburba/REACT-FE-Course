import React from 'react'


class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1 style={{fontSize: '6rem', textAlign: 'center', color: 'red', marginTop: '6rem'}}>Ooops. Error! Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
