import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // This lifecycle method catches errors during rendering.
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // This lifecycle method catches errors during component updates.
  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here.
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
