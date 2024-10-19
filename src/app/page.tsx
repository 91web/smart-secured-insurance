"use client";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AppProgressBar from "./components/loading/appProgress";
import SmartG from "../assets/img/sg-logo.png"
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [progress, setProgress] = useState(10);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const word = "Smart Guard";

  // Typing effect
  useEffect(() => {
    if (index < word.length) {
      const typingTimer = setTimeout(() => {
        setText((prev) => prev + word.charAt(index));
        setIndex((prev) => prev + 1);
      }, 50); // Adjust typing speed here
      return () => clearTimeout(typingTimer);
    }
  }, [index]);

  // Progress bar update effect
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Redirect effect
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/authentication/login");
    }, 7000); // Allow time for typing effect before redirecting
    return () => {
      clearTimeout(redirectTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      height={"100vh"}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      bgcolor={"#fffff"}
    >
      <Box
        height={"fit-content"}
        margin={"auto"}
        width={{ xs: "50%", md: "20%" }}
        textAlign={"center"}
      >
        <Box display={"flex"} justifyContent={"center"} fontSize={32} fontWeight={"bold"}>
          {text}
        </Box>
        <Box pt={2} px={4} width={"80%"} m={"auto"}>
          <AppProgressBar progress={progress} />
        </Box>

        <Box
        height={"fit-content"}
        margin={"auto"}
        width={{ xs: "50%", md: "30%" }}
        textAlign={"center"}
      >
        <Box display={"flex"} justifyContent={"center"}>
          <Image src={SmartG} alt={"SmartGuard logo"} priority={true} />
        </Box>
        </Box>
      </Box>
    </Box>
  );
}