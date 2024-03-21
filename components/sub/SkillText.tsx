"use client";
import { SparklesIcon } from "@heroicons/react/16/solid";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        className="Welcome-box py-[9px] px-[7px] border-[#7042f88b] opacity-[0.9]"
        variants={slideInFromTop}
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Projetos com mais qualidade e velocidade com Next JS 13!
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px] "
      >
        Criando App's com as tecnologias mais atuais, sempre!
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Sempre dedicado à manter o alto nível de qualidade, organização e
        comprometimento.
      </motion.div>
    </div>
  );
};

export default SkillText;
