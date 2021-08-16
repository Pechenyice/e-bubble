import React, {useEffect} from "react";
import './App.css';
import GreetingSection from './components/GreetingSection/GreetingSection';
import PersonalSection from './components/PersonalSection/PersonalSection';
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";

function App() {

  let scrolled = 0;

  function handleScrollEffect(e) {

    // console.log(window.scrollY > scrolled ? 'down' : 'top')

    let direction = Math.sign(e.deltaY);
    
    if (!window.viewManager.isInAction) {
      window.viewManager.isInAction = true;
      setTimeout(() => {window.viewManager.isInAction = false;}, 5000);
      

      if (direction > 0) {
        window.viewManager.activeView++;
        window.viewManager.setNextView();
      } else {
        window.viewManager.activeView--;
        window.viewManager.setPrevView();
      } 
      

      

    }

    scrolled = window.scrollY;

  }

  function viewManagerNextViewSetter() {

    console.log(window.viewManager.activeView)

    switch (window.viewManager.activeView) {

      case 1: {
        window.document.getElementsByClassName('app__greetingWrapper')[0].style.transform = 'translateZ(-10000px)';
        window.document.getElementsByClassName('app__greetingWrapper')[0].style.transition='2s';
        setTimeout(() => {
          window.document.getElementsByClassName('app__greetingWrapper')[0].style.transform = 'translateZ(-10000px) translateX(-150vw) translateY(-150vh)';
          setTimeout(() => {
            window.document.getElementsByClassName('app__greetingWrapper')[0].style.transition='1s';
          }, 2000);
        }, 1000);

        
        setTimeout(() => {
          window.document.getElementsByClassName('app__personalWrapper')[0].style.transition='2s';
          window.document.getElementsByClassName('app__personalWrapper')[0].style.transform = 'translateX(0vw) translateY(0vh) translateZ(-10000px)';
          setTimeout(() => {
            window.document.getElementsByClassName('app__personalWrapper')[0].style.transition='1s';
            window.document.getElementsByClassName('app__personalWrapper')[0].style.transform = 'translateX(0vw) translateY(0vh) translateZ(0px)';
          }, 2000);
        }, 1200);

        
        window.document.getElementsByClassName('app__greetingWrapper')[0].parentElement.style.pointerEvents='none';
        window.document.getElementsByClassName('app__personalWrapper')[0].parentElement.style.pointerEvents='auto';
        window.document.getElementsByClassName('app__projectsWrapper')[0].parentElement.style.pointerEvents='none';

        break;
      }

      case 2: {
        window.document.getElementsByClassName('app__personalWrapper')[0].style.transform = 'translateZ(-10000px)';
        window.document.getElementsByClassName('app__personalWrapper')[0].style.transition='2s';
        setTimeout(() => {
          window.document.getElementsByClassName('app__personalWrapper')[0].style.transform = 'translateZ(-10000px) translateX(-150vw) translateY(-150vh)';
          setTimeout(() => {
            window.document.getElementsByClassName('app__personalWrapper')[0].style.transition='1s';
          }, 2000);
        }, 1000);

        setTimeout(() => {
          window.document.getElementsByClassName('app__projectsWrapper')[0].style.transition='2s';
          window.document.getElementsByClassName('app__projectsWrapper')[0].style.transform = 'translateX(0vw) translateY(0vh) translateZ(-10000px)';
          setTimeout(() => {
            window.document.getElementsByClassName('app__projectsWrapper')[0].style.transition='1s';
            window.document.getElementsByClassName('app__projectsWrapper')[0].style.transform = 'translateX(0vw) translateY(0vh) translateZ(0px)';
          }, 2000);
        }, 1200);

        window.document.getElementsByClassName('app__greetingWrapper')[0].parentElement.style.pointerEvents='none';
        window.document.getElementsByClassName('app__personalWrapper')[0].parentElement.style.pointerEvents='none';
        window.document.getElementsByClassName('app__projectsWrapper')[0].parentElement.style.pointerEvents='auto';

        break;

        
      }
    }

  }

  function viewManagerPrevViewSetter() {

    console.log(window.viewManager.activeView)

    switch (window.viewManager.activeView) {
      case 0: {
        window.document.getElementsByClassName('app__personalWrapper')[0].style.transform = 'translateZ(-10000px)';
        window.document.getElementsByClassName('app__personalWrapper')[0].style.transition='2s';
        setTimeout(() => {
          window.document.getElementsByClassName('app__personalWrapper')[0].style.transform = 'translateZ(-10000px) translateX(150vw) translateY(150vh)';
          setTimeout(() => {
            window.document.getElementsByClassName('app__personalWrapper')[0].style.transition='1s';
          }, 2000);
        }, 1000);

        setTimeout(() => {
          window.document.getElementsByClassName('app__greetingWrapper')[0].style.transition='2s';
          window.document.getElementsByClassName('app__greetingWrapper')[0].style.transform = 'translateX(0vw) translateY(0vh) translateZ(-10000px)';
          setTimeout(() => {
            window.document.getElementsByClassName('app__greetingWrapper')[0].style.transition='1s';
            window.document.getElementsByClassName('app__greetingWrapper')[0].style.transform = 'translateX(0vw) translateY(0vh) translateZ(0px)';
          }, 2000);
        }, 1200);

        window.document.getElementsByClassName('app__greetingWrapper')[0].parentElement.style.pointerEvents='auto';
        window.document.getElementsByClassName('app__personalWrapper')[0].parentElement.style.pointerEvents='none';
        window.document.getElementsByClassName('app__projectsWrapper')[0].parentElement.style.pointerEvents='none';

        break;
      }

      case 1: {

        window.document.getElementsByClassName('app__projectsWrapper')[0].style.transform = 'translateZ(-10000px)';
        window.document.getElementsByClassName('app__projectsWrapper')[0].style.transition='2s';
        setTimeout(() => {
          window.document.getElementsByClassName('app__projectsWrapper')[0].style.transform = 'translateZ(-10000px) translateX(150vw) translateY(150vh)';
          setTimeout(() => {
            window.document.getElementsByClassName('app__projectsWrapper')[0].style.transition='1s';
          }, 2000);
        }, 1000);

        
        setTimeout(() => {
          window.document.getElementsByClassName('app__personalWrapper')[0].style.transition='2s';
          window.document.getElementsByClassName('app__personalWrapper')[0].style.transform = 'translateX(0vw) translateY(0vh) translateZ(-10000px)';
          setTimeout(() => {
            window.document.getElementsByClassName('app__personalWrapper')[0].style.transition='1s';
            window.document.getElementsByClassName('app__personalWrapper')[0].style.transform = 'translateX(0vw) translateY(0vh) translateZ(0px)';
          }, 2000);
        }, 1200);

        
        window.document.getElementsByClassName('app__greetingWrapper')[0].parentElement.style.pointerEvents='none';
        window.document.getElementsByClassName('app__personalWrapper')[0].parentElement.style.pointerEvents='auto';
        window.document.getElementsByClassName('app__projectsWrapper')[0].parentElement.style.pointerEvents='none';

        break;
      }

    }

  }

  useEffect(() => {

    window.viewManager = {
      activeView: 0,
      isInAction: false,
      setNextView: viewManagerNextViewSetter,
      setPrevView: viewManagerPrevViewSetter
    }
    

    window.addEventListener('mousewheel', handleScrollEffect, {passive: true});

  }, []);

  return (
    <section className="app" >
      <GreetingSection />
      <PersonalSection />
      <ProjectsSection />
    </section>
  );

}

export default App;
