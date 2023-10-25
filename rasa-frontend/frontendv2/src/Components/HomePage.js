import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

const HomePage = ({ makeOrder }) => {
  const [rotate, setRotate] = useState(false);

  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", updateWindowDimensions);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []); // Empty dependency array to run this effect only once

  const [signUpColor, setSignUp] = useState("black");
  const [orderColor, setOrder] = useState("black");
  const [logInColor, setLogIn] = useState("black");

  return (
    <div className="flex h-screen items-center w-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <div
        style={{ left: Math.round(0.5 * width) + "px", position: "relative" }}
        className="text-center h-screen w-[5px] bg-black"
      ></div>
      <div className="m-auto h-screen w-[20px]"></div>
      <div className="w-screen m-auto grid grid-cols-2">
        <div className="m-auto">
          <AnimatePresence>
            <motion.div
              className="text-center font-caveat text-4xl relative top-[100px]"
              initial={{ opacity: 0 }}
              animate={{ y: [125, 0], opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                bounce: 0.6,
                duration: 1.5,
                delay: 0.5,
              }}
            >
              Welcome to
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.img
              src={require("./Rasa_Sweets-removebg-preview (1).png")}
              alt="RASA RASOI"
              initial={{ opacity: 0 }}
              animate={{ y: [125, 0], opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                bounce: 0.6,
                duration: 1.5,
                delay: 0.6,
              }}
              className="h-[400px] mt-[10px]"
            ></motion.img>
          </AnimatePresence>
          <div className="text-center relative bottom-[130px] left-[17px] mt-[10px]">
            <AnimatePresence>
              <motion.div
                className="text-center font-caveat text-3xl mr-[35px] inline-block"
                initial={{ opacity: 0 }}
                animate={{ y: [75, 0], opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  duration: 1.25,
                  delay: 1.1,
                }}
                style={{
                  color: signUpColor,
                  textDecoration: signUpColor == "blue" ? "underline" : "none",
                }}
                onHoverStart={() => {
                  setSignUp("blue");
                }}
                onHoverEnd={() => {
                  setSignUp("black");
                }}
              >
                <motion.h1 whileHover={{ scale: 1.1, opacity: 1 }}>
                  Sign up
                </motion.h1>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                className="text-center font-caveat mr-[35px] text-3xl p-0 inline-block"
                initial={{ opacity: 0 }}
                animate={{ y: [75, 0], opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  duration: 1.25,
                  delay: 1.2,
                }}
                style={{
                  color: orderColor,
                  textDecoration: orderColor == "blue" ? "underline" : "none",
                }}
                onHoverStart={() => {
                  setOrder("blue");
                }}
                onHoverEnd={() => {
                  setOrder("black");
                }}
              >
                <motion.h1
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  onClick={makeOrder}
                >
                  Make an order
                </motion.h1>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                className="text-center mr-[35px] font-caveat text-3xl p-0 inline-block"
                initial={{ opacity: 0 }}
                animate={{ y: [75, 0], opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  duration: 1.25,
                  delay: 1.3,
                }}
                style={{
                  color: logInColor,
                  textDecoration: logInColor == "blue" ? "underline" : "none",
                }}
                onHoverStart={() => {
                  setLogIn("blue");
                }}
                onHoverEnd={() => {
                  setLogIn("black");
                }}
              >
                <motion.h1 whileHover={{ scale: 1.1, opacity: 1 }}>
                  Log in
                </motion.h1>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="m-auto">
          <a href="https://www.tiktok.com/@rasarasoi">
            <AnimatePresence>
              <motion.div
                animate={{ y: [-75, 0], opacity: 1 }}
                initial={{ opacity: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  duration: 1.25,
                  delay: 0.55,
                }}
              >
                <motion.img
                  src={require("./2560px-TikTok_logo.svg.png")}
                  className="m-auto h-[60px] w-auto"
                  whileHover={{ scale: 1.2 }}
                ></motion.img>
              </motion.div>
            </AnimatePresence>
          </a>
          <AnimatePresence>
            <motion.img
              src={require("./RasaRassoiTikTok.jpg")}
              className="m-auto h-[300px] w-[300px] mt-[40px]"
              style={{ borderRadius: "50%" }}
              animate={{ y: [-75, 0], opacity: [0, 1] }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                bounce: 0.5,
                duration: 1.25,
                delay: 0.6,
              }}
            ></motion.img>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              animate={{ y: [-75, 0], opacity: [0, 1] }}
              transition={{
                type: "spring",
                bounce: 0.5,
                duration: 1.25,
                delay: 1.1,
              }}
            >
              <a href="https://www.youtube.com/channel/UCV_aFDvpk4tYw0zTr4mrJ7Q">
                <motion.img
                  src={require("./YouTube_Logo_(2013-2017).svg.png")}
                  className="m-auto h-[60px] w-auto mt-[40px]"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                ></motion.img>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
