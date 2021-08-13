import React from "react";
import './App.css';
import GreetingSection from './components/GreetingSection/GreetingSection';
import PersonalSection from './components/PersonalSection/PersonalSection';

function App() {

  return (
    <section className="app" >
      <GreetingSection />
      <PersonalSection />
    </section>
  );

}

export default App;
