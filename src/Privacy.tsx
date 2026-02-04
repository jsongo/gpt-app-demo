import React from 'react';

export function Privacy() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12">
      <h1 className="heading-2xl text-primary mb-6">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none text-secondary">
        <p className="mb-4">Last Updated: February 4, 2026</p>
        <p className="mb-4">
          Welcome to "Shenzhen Park Explorer". We value your privacy. This Privacy Policy explains how we handle information when you use this application.
        </p>
        <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. Information Collection</h2>
        <p className="mb-4">
          This application is a demo project designed to showcase the capabilities of the OpenAI Apps SDK. We do not actively collect, store, or share any of your personally identifiable information.
        </p>
        <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. Data Usage</h2>
        <p className="mb-4">
          This app runs entirely in your browser and interacts with the OpenAI platform. Any interaction data follows OpenAI's privacy guidelines.
        </p>
        <h2 className="text-xl font-bold text-primary mt-8 mb-4">3. Third-Party Services</h2>
        <p className="mb-4">
          We use OpenAI's infrastructure to run this app. Please refer to OpenAI's official Privacy Policy to understand how they process data.
        </p>
        <h2 className="text-xl font-bold text-primary mt-8 mb-4">4. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at contact@example.com.
        </p>
      </div>
    </div>
  );
}
