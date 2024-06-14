import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { CoinList } from './config/api';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from "./firebase";

const Crypto = createContext();

const CryptoContext = ({children}) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "success",
  });
  const [watchlist, setWatchlist] = useState([]);

  // Monitor authentication state and set user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if(user) setUser(user);
      else setUser(null);
      console.log(user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Fetch coins based on selected currency
  const fetchCoins = useCallback(async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  }, [currency]);

  // Update symbol when currency changes
  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  // Monitor Firestore watchlist for authenticated user
  useEffect(() => {
    if (user) {
      const coinRef = doc(db, "watchlist", user?.uid);
      const unsubscribe = onSnapshot(coinRef, coin => {
        if (coin.exists()) {
          setWatchlist(coin.data().coins);
        } else {
          console.log("No Items in Watchlist");
        }
      });

      // Cleanup subscription on unmount or user change
      return () => unsubscribe();
    }
  }, [user]);

  return (
    <Crypto.Provider value={{
      currency, 
      setCurrency, 
      symbol, 
      coins, 
      loading, 
      fetchCoins, 
      alert, 
      setAlert, 
      user, 
      watchlist
    }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};