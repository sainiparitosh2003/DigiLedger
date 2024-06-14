const numberWithCommas = (x) => {
    // Implementation of numberWithCommas function
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  };
  
  export default numberWithCommas;