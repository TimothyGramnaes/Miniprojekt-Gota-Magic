import {Component, CSSProperties, ErrorInfo } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';

interface Props extends RouteComponentProps {}
interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {

    state: State = {
        hasError: false
    }


    static getDerivedStateFromError(): State {
        return {
            hasError: true
        }
    }

    componenetDidCatch?(error: Error, errorInfo: ErrorInfo): void {
        console.log({error, errorInfo})
    }

    navigateBack = () => {
        this.props.history.goBack();
        window.location.replace('/')
      }

    render() {
        if (this.state.hasError) {
            return (
                <div style={errorStyle}>
                    <h2>404 inget funkar</h2>
                    <Button variant="contained" color="primary" onClick={this.navigateBack}></Button>
                </div>
            );
        }
        return this.props.children
    }


}

const errorStyle: CSSProperties = {
    display: 'flex',
    height: '100%',
}

export default withRouter(ErrorBoundary);