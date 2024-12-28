/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Me from "@/public/me.jpeg";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Image
            src={Me}
            alt="Profile picture"
            width={300}
            height={300}
            className="rounded-lg mx-auto object-cover w-[300px] h-[300px]"
          />
        </div>

        <h1 className="text-3xl font-bold text-center mb-4">
          Hey, my name is Jan and I am a web developer
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          I'm passionate about creating beautiful, functional websites that make
          a difference. With over 5 years of experience in front-end
          development, I specialize in React, Next.js, and Tailwind CSS. I love
          turning complex problems into simple, elegant solutions.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>JavaScript (ES6+)</li>
            <li>React & Next.js</li>
            <li>HTML5 & CSS3</li>
            <li>Tailwind CSS</li>
            <li>Responsive Web Design</li>
            <li>Version Control (Git)</li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <Button>Get in touch</Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
