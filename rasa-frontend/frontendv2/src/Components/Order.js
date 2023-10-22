import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import PaymentApp from "../PaymentApp";

const Order = ({}) => {
  const [showPayment, setPayment] = useState(false);

  const [pindiCount, setPindiCount] = useState(0);
  const [kajuCount, setKajuiCount] = useState(0);
  const [rasmalaiCount, setRasmalaiCount] = useState(0);
  const [chatCount, setChatCount] = useState(0);
  return (
    <>
      {showPayment ? (
        <PaymentApp
          orders={[pindiCount, kajuCount, rasmalaiCount, chatCount]}
        ></PaymentApp>
      ) : (
        <>
          <div className="w-2/3 text-center h-screen bg-white z-0 inline-block">
            <div className="h-screen w-2/3 grid grid-rows-2 grid-cols-2 bg-white absolute top-0">
              <motion.div
                animate={{ y: [50, 0], opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ type: "spring", bounce: 0.5, duration: 1 }}
              >
                <motion.div
                  className="text-center mt-[10px] ml-[10px] m-auto bg-gray-50 w-[60%] h-[90%] grid grid-rows-1fr"
                  whileHover={{ scale: 1.05, opacity: 0.5 }}
                >
                  <img src={require("./pindi-chana-1.webp")}></img>
                  <div className="row-span-1 inline-block">
                    <div className="font-caveat text-[25px]">
                      Pindi Chole
                      <img
                        src={require("./add-to-cart-1.png")}
                        style={{
                          width: "20%",
                          margin: "auto",
                          marginTop: "5px",
                        }}
                      ></img>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="absolute h-[10%] left-[33.33333%] top-[12%] w-auto ml-[10px]"
                  animate={{ y: [50, 0], opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    type: "spring",
                    bounce: 0.6,
                    duration: 1,
                    delay: 1,
                  }}
                >
                  <motion.img
                    src={require("./plusSign.png")}
                    className="h-[50%]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => {
                      setPindiCount(pindiCount + 1);
                    }}
                    transition={{ duration: 0.05 }}
                  ></motion.img>
                  <div className="my-[20px] font-caveat text-[40px]">
                    {pindiCount}
                  </div>
                  <motion.img
                    src={require("./minus.png")}
                    className="h-[50%]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => {
                      if (pindiCount > 0) {
                        setPindiCount(pindiCount - 1);
                      }
                    }}
                    transition={{ duration: 0.05 }}
                  ></motion.img>
                </motion.div>
              </motion.div>
              <motion.div
                animate={{ y: [50, 0], opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ type: "spring", bounce: 0.5, duration: 1 }}
              >
                <motion.div
                  className="text-center m-auto bg-gray-50 h-[90%] w-[60%] mr-[10px] mt-[10px] grid grid-rows-1fr"
                  whileHover={{ scale: 1.05, opacity: 0.5 }}
                >
                  <img
                    src={require("./Rasmalai-recipe@palates-desire.jpg")}
                    className="w-[100%] bg-repeat bg-contain"
                  ></img>
                  <div className="row-span-1">
                    <div className="font-caveat text-[25px]">
                      Rasmalai
                      <img
                        src={require("./add-to-cart-1.png")}
                        style={{
                          width: "20%",
                          margin: "auto",
                          marginTop: "5px",
                        }}
                      ></img>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="absolute h-[10%] right-[33.33333%] top-[12%] w-auto mr-[10px]"
                  animate={{ y: [50, 0], opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    type: "spring",
                    bounce: 0.6,
                    duration: 1,
                    delay: 1,
                  }}
                >
                  <motion.img
                    src={require("./plusSign.png")}
                    className="h-[50%]"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => {
                      setRasmalaiCount(rasmalaiCount + 1);
                    }}
                    transition={{ duration: 0.1 }}
                  ></motion.img>
                  <div className="my-[20px] font-caveat text-[40px]">
                    {rasmalaiCount}
                  </div>
                  <motion.img
                    src={require("./minus.png")}
                    className="h-[50%]"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => {
                      if (rasmalaiCount > 0) {
                        setRasmalaiCount(rasmalaiCount - 1);
                      }
                    }}
                    transition={{ duration: 0.1 }}
                  ></motion.img>
                </motion.div>
              </motion.div>
              <motion.div
                animate={{ y: [50, 0], opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  duration: 1,
                }}
              >
                <motion.div
                  className="text-center mt-[10px] ml-[10px] m-auto bg-gray-50 w-[60%] h-[90%] grid grid-rows-1fr"
                  whileHover={{ scale: 1.05, opacity: 0.5 }}
                >
                  <img src={require("./IMG_20170109_152216.jpg")}></img>
                  <div className="row-span-1">
                    <div className="font-caveat text-[25px]">
                      Chat Papdi
                      <img
                        src={require("./add-to-cart-1.png")}
                        style={{
                          width: "20%",
                          margin: "auto",
                          marginTop: "5px",
                        }}
                      ></img>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="absolute h-[10%] left-[33.33333%] bottom-[27%] w-auto ml-[10px]"
                  animate={{ y: [50, 0], opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    type: "spring",
                    bounce: 0.6,
                    duration: 1,
                    delay: 1,
                  }}
                >
                  <motion.img
                    src={require("./plusSign.png")}
                    className="h-[50%]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => {
                      setChatCount(chatCount + 1);
                    }}
                    transition={{ duration: 0.05 }}
                  ></motion.img>
                  <div className="my-[20px] font-caveat text-[40px]">
                    {chatCount}
                  </div>
                  <motion.img
                    src={require("./minus.png")}
                    className="h-[50%]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => {
                      if (chatCount > 0) {
                        setChatCount(chatCount - 1);
                      }
                    }}
                    transition={{ duration: 0.05 }}
                  ></motion.img>
                </motion.div>
              </motion.div>
              <motion.div
                animate={{ y: [50, 0], opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  duration: 1,
                }}
              >
                <motion.div
                  className="text-center m-auto bg-gray-50 h-[90%] w-[60%] mr-[10px] mt-[10px] grid grid-rows-1fr rounded-[15px]"
                  whileHover={{ scale: 1.05, opacity: 0.5 }}
                >
                  <img
                    src={require("./kaju katli.jpg")}
                    className="w-[100%] bg-repeat bg-contain"
                  ></img>
                  <div className="row-span-1">
                    <div className="font-caveat text-[25px]">
                      Kaju Katli
                      <img
                        src={require("./add-to-cart-1.png")}
                        style={{
                          width: "20%",
                          margin: "auto",
                          marginTop: "5px",
                        }}
                      ></img>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="absolute h-[10%] right-[33.33333%] bottom-[27%] w-auto mr-[10px]"
                  animate={{ y: [50, 0], opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    type: "spring",
                    bounce: 0.6,
                    duration: 1,
                    delay: 1,
                  }}
                >
                  <motion.img
                    src={require("./plusSign.png")}
                    className="h-[50%]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => {
                      setKajuiCount(kajuCount + 1);
                    }}
                    transition={{ duration: 0.05 }}
                  ></motion.img>
                  <div className="my-[20px] font-caveat text-[40px]">
                    {kajuCount}
                  </div>
                  <motion.img
                    src={require("./minus.png")}
                    className="h-[50%]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => {
                      if (kajuCount > 0) {
                        setKajuiCount(kajuCount - 1);
                      }
                    }}
                    transition={{ duration: 0.05 }}
                  ></motion.img>
                </motion.div>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="w-1/3 h-full bg-slate-200 inline-block text-center absolute"
            animate={{ y: [50, 0], opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              type: "spring",
              bounce: 0.6,
              duration: 1,
              delay: 1,
            }}
          >
            <div className="text-center font-caveat text-6xl mt-[20px]">
              YOUR ORDER
            </div>
            <div className="border-t-[5px] border-dashed border-black my-5"></div>
            <div className="text-start ml-[20px] font-josefin">PINDI CHOLE</div>
            <div className="flex justify-between items-center">
              <img
                src={require("./pindi-chana-1.webp")}
                className="w-[15%] ml-[20px] mt-[10px] inline-block"
              ></img>
              <div className="inline-block mr-[20px] font-josefin">
                {pindiCount}
              </div>
            </div>
            <div className="bg-black h-[1px] w-full my-[15px]"></div>
            <div className="text-start ml-[20px] font-josefin">RASMALAI</div>
            <div className="flex justify-between items-center">
              <img
                src={require("./Rasmalai-recipe@palates-desire.jpg")}
                className="w-[15%] ml-[20px] mt-[10px] inline-block"
              ></img>
              <div className="inline-block mr-[20px] font-josefin">
                {rasmalaiCount}
              </div>
            </div>
            <div className="bg-black h-[1px] w-full my-[15px]"></div>
            <div className="text-start ml-[20px] font-josefin">CHAT PAPDI</div>
            <div className="flex justify-between items-center">
              <img
                src={require("./IMG_20170109_152216.jpg")}
                className="w-[15%] ml-[20px] mt-[10px] inline-block"
              ></img>
              <div className="inline-block mr-[20px] font-josefin">
                {chatCount}
              </div>
            </div>
            <div className="bg-black h-[1px] w-full my-[15px]"></div>
            <div className="text-start ml-[20px] font-josefin">KAJU KATLI</div>
            <div className="flex justify-between items-center">
              <img
                src={require("./kaju katli.jpg")}
                className="w-[15%] ml-[20px] mt-[10px] inline-block"
              ></img>
              <div className="inline-block mr-[20px] font-josefin">
                {kajuCount}
              </div>
            </div>
            <button
              className="mt-[30px] w-full font-josefin bg-black text-white h-[10%]"
              onClick={() => {
                setPayment(true);
              }}
            >
              CHECKOUT
            </button>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Order;
