import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activo: false,
    };
  }
  /* 
  isActive = () => {
    return this.state.hasError ? "Activo" : "No activo";
  };

  onClickHandler = () => {
    this.setState({hasError: true})

  }; */
  /* 
  componentDidMount(){
      console.log("El componente se ha creado")
  }

  componentDidUpdate(prevProps, prevState){
      console.log(prevState.activo)
      console.log("El componente se ha actualizado")
  }
  componentWillUnmount(){
      console.log("Desmontado")
  } */
  
  static getDerivedStateFromError(error){
      return {hasError:true}
  }

  componentDidCatch(error,errorInfo){
      console.log("ErrorInfo", errorInfo)
  }

  render() {
    return this.state.hasError ? <h1>Hubo un error</h1> : this.props.children;
  }
}

export default ErrorBoundary;
