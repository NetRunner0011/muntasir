
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CircuitCanvas from '@/components/circuit-simulator/CircuitCanvas';

const CircuitSimulator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Interactive Circuit Simulator</h1>
          <p className="mb-8 text-muted-foreground">
            Drag components from the sidebar onto the canvas to build and simulate electronic circuits.
          </p>
          <CircuitCanvas />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CircuitSimulator;
