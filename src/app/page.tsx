"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="largeSmall"
        background="aurora"
        cardStyle="glass-depth"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Cakes",
          id: "products",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="CAKE WITH US"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "plain",
      }}
      logoText="Celebrate Moments, Savor Perfection"
      description="Handcrafted luxury cakes designed for your most treasured celebrations. Fresh, beautiful, delivered with care."
      buttons={[
        {
          text: "Order Your Cake Today",
          href: "#contact",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=bitxcn"
      imageAlt="luxury artisanal wedding cake cream background"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="Crafted with Passion"
      description="At CAKE WITH US, every creation is a masterpiece, blending premium ingredients with an artisanal touch to transform your celebration into an unforgettable emotional experience."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=p12z05"
      imageAlt="baker hands decorating cake detailed"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="inline-image"
      useInvertedBackground={false}
      features={[
        {
          title: "Artisanal Quality",
          description: "Handcrafted with the finest ingredients for exquisite taste.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=bvb8tq",
          imageAlt: "floral wedding cake cream aesthetic",
        },
        {
          title: "Luxury Presentation",
          description: "Instagram-worthy designs that anchor your celebration.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=rjruyl",
          imageAlt: "blush peach wedding cake",
        },
        {
          title: "Careful Delivery",
          description: "Professional white-glove service for your peace of mind.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=h4imwe",
          imageAlt: "decadent chocolate artisan cake",
        },
      ]}
      title="Why Choose Us"
      description="We prioritize craftsmanship and presentation to ensure your cake is as stunning as it is delicious."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          brand: "Signature",
          name: "Classic Cream",
          price: "$150",
          rating: 5,
          reviewCount: "12",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=xtp6w4",
          imageAlt: "floral wedding cake cream aesthetic",
        },
        {
          id: "2",
          brand: "Luxury",
          name: "Blush Peach",
          price: "$220",
          rating: 5,
          reviewCount: "24",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=temml5",
          imageAlt: "blush peach wedding cake",
        },
        {
          id: "3",
          brand: "Special",
          name: "Chocolate Silk",
          price: "$180",
          rating: 4,
          reviewCount: "18",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=572cpb",
          imageAlt: "decadent chocolate artisan cake",
        },
        {
          id: "4",
          brand: "Premium",
          name: "Golden Tier",
          price: "$300",
          rating: 5,
          reviewCount: "30",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=e63pn3",
          imageAlt: "floral decorated cake cream",
        },
        {
          id: "5",
          brand: "Seasonal",
          name: "Summer Floral",
          price: "$190",
          rating: 5,
          reviewCount: "15",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=d0sljv",
          imageAlt: "minimalist elegant celebration cake",
        },
        {
          id: "6",
          brand: "Exclusive",
          name: "Royal Ganache",
          price: "$250",
          rating: 5,
          reviewCount: "20",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=yui35q",
          imageAlt: "gold accented luxury cake",
        },
      ]}
      title="Our Collection"
      description="Discover our signature luxury cakes tailored for weddings, events, and milestone celebrations."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          role: "Bride",
          testimonial: "The most stunning and delicious cake I've ever had. Truly made our wedding.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=so7rsm",
          imageAlt: "satisfied customer celebrating birthday",
        },
        {
          id: "2",
          name: "Michael Chen",
          role: "Corporate Planner",
          testimonial: "Exceeded all our expectations for the annual corporate celebration.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ibhet3",
          imageAlt: "corporate event catering celebration",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          role: "Anniversary Couple",
          testimonial: "An incredible experience. The design was exactly what we envisioned.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=11jj1v",
          imageAlt: "couple celebrating anniversary cake",
        },
        {
          id: "4",
          name: "David Kim",
          role: "Party Host",
          testimonial: "Our guests couldn't stop talking about how beautiful the cake was.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ob108v",
          imageAlt: "happy birthday celebration moments",
        },
        {
          id: "5",
          name: "Anna Smith",
          role: "Birthday Mom",
          testimonial: "Absolute perfection, fresh and elegant. So happy with the result.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=pg2yxx",
          imageAlt: "smiling woman holding cake",
        },
      ]}
      title="Celebration Stories"
      description="Hear from our clients who shared their most cherished moments with our cakes."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "How far in advance should I order?",
          content: "We recommend ordering at least 4 weeks prior for special event cakes.",
        },
        {
          id: "2",
          title: "Do you offer delivery?",
          content: "Yes, we provide professional delivery for all our artisanal cake creations.",
        },
        {
          id: "3",
          title: "Can I request custom designs?",
          content: "Absolutely, our consultation process allows us to craft unique designs for you.",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=gelsdr"
      title="Ordering Details"
      description="Common questions about our luxury cake ordering and delivery services."
      faqsAnimation="slide-up"
      imageAlt="bakery order process counter"
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Bakery Insights"
      description="Discover tips, trends, and stories from our artisanal kitchen."
      blogs={[
        {
          id: "1",
          category: "Trends",
          title: "Top Wedding Cake Trends",
          excerpt: "Embrace the elegance of simplicity and floral accents.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=s4tv6o",
          imageAlt: "floral wedding cake cream aesthetic",
          authorName: "Baker One",
          authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ev0hqs",
          date: "May 2024",
        },
        {
          id: "2",
          category: "Tips",
          title: "How to Store Your Cake",
          excerpt: "Keep your creation fresh and delicious with these tips.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=c58rux",
          imageAlt: "decadent chocolate artisan cake",
          authorName: "Baker Two",
          authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=5pbp0q",
          date: "April 2024",
        },
        {
          id: "3",
          category: "Story",
          title: "Behind the Scenes",
          excerpt: "Our process of crafting artisanal luxury cakes.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=260nc8",
          imageAlt: "minimalist elegant celebration cake",
          authorName: "Baker One",
          authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=zuxukn",
          date: "March 2024",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Inquire"
      title="Start Your Celebration"
      description="Ready to design your dream cake? Reach out to us today to schedule your consultation."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="CAKE WITH US"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms & Conditions",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
