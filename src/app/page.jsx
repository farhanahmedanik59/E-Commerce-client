"use client";
import FeaturedProducts from "@/components/FeatureProduct/FeatureProduct";
import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import PromoBanner from "@/components/PromoBanner/PromoBanner";
import Testimonials from "@/components/Testimonials/Testimonials.jsx";
import { UserContex } from "@/context/UserContex";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <FeaturedProducts></FeaturedProducts>
      <Features></Features>
      <Testimonials></Testimonials>
      <PromoBanner></PromoBanner>
    </div>
  );
}
