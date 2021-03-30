import React, {Component, CSSProperties, ErrorInfo, ReactNode } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

interface Props {
    children: ReactNode;
  }
interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {

    public state: State = {
        hasError: false
    }


    static getDerivedStateFromError(_: Error): State {
        return {
            hasError: true
        };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
      }

    // navigateBack = () => {
    //     this.props.history.goBack();
    //     window.location.replace('/')
    //   }

    public render() {
        if (this.state.hasError) {
            return (
                <div style={errorStyle}>
                    <h2>404 inget funkar</h2>
                    <Link to="/">
                    <Button variant="contained" color="primary" 
                    // onClick={this.navigateBack}
                    >
                        Tillbaka till Startsidan
                    </Button>
                    </Link>
                </div>
            );
        }
        return this.props.children
    }
}

const errorStyle: CSSProperties = {
    position: 'relative',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
}

export default ErrorBoundary;