import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AppComandBar from "../components/Templates/AppComandBar";
import Top from "./Top";

const Home: NextPage = () => {
  return (
    <>
      <AppComandBar />
      レシピアプリ
      <Top />
    </>
    )
    
};

export default Home;
