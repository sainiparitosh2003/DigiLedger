import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CryptoContext from './CryptoContext';
import "react-alice-carousel/lib/alice-carousel.css";

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

// Performance measurement function
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <CryptoContext>
        <App />
      </CryptoContext>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);


