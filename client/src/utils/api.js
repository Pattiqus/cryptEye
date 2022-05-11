const getCurrentPrice = async (coinId) => {
    const apiEndpoint = `http://localhost:3001/api/prices?coinId=${coinId}`;

    try {    
      const response = await fetch(apiEndpoint);
      return await response.json();
    } catch (err) {
      console.log(`error: failed to load current price for ${coinId}`);
      return null;
    }
  }

  export { getCurrentPrice };