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
      

      if (direction > 0) {
        window.viewManager.activeView++;
        if (window.viewManager.activeView > 2) {
          window.viewManager.activeView = 2;
        } else {
          window.viewManager.isInAction = true;
          // setTimeout(() => {window.viewManager.isInAction = false;}, 3000);
          // setTimeout(() => {window.viewManager.isInAction = false;}, 3000);
          window.viewManager.setNextView();
        }
      } else {
        window.viewManager.activeView--;
        if (window.viewManager.activeView < 0) {
          window.viewManager.activeView = 0;
        } else {
          window.viewManager.isInAction = true;
          // setTimeout(() => {window.viewManager.isInAction = false;}, 3000);
          // setTimeout(() => {window.viewManager.isInAction = false;}, 3000);
          window.viewManager.setPrevView();
        }
      } 
      

      

    }

    scrolled = window.scrollY;

  }

  function handlePosistiveResult(view) {

    let tmp;
    
    switch (view) {
      case 0: {
        tmp = setTimeout(() => {
          window.document.getElementsByClassName('app__greetingWrapper')[0].style.transform = 'translateX(0vw) translateY(0vh) translateZ(0px)';
          window.document.getElementsByClassName('app__personalWrapper')[0].style.transform = 'translateZ(-10000px) translateX(150vw) translateY(150vh)';
          window.document.getElementsByClassName('app__projectsWrapper')[0].style.transform = 'translateZ(-10000px) translateX(150vw) translateY(150vh)';

          window.viewManager.isInAction = false;
        }, 3000);
        break;
      }

      case 1: {
        tmp = setTimeout(() => {
          window.document.getElementsByClassName('app__greetingWrapper')[0].style.transform = 'translateZ(-10000px) translateX(-150vw) translateY(-150vh)';
          window.document.getElementsByClassName('app__personalWrapper')[0].style.transform = 'translateX(0vw) translateY(0vh) translateZ(0px)';
          window.document.getElementsByClassName('app__projectsWrapper')[0].style.transform = 'translateZ(-10000px) translateX(150vw) translateY(150vh)';

          window.viewManager.isInAction = false;
        }, 3000);
        break;
      }

      case 2: {
        tmp = setTimeout(() => {
          window.document.getElementsByClassName('app__greetingWrapper')[0].style.transform = 'translateZ(-10000px) translateX(-150vw) translateY(-150vh)';
          window.document.getElementsByClassName('app__personalWrapper')[0].style.transform = 'translateZ(-10000px) translateX(-150vw) translateY(-150vh)';
          window.document.getElementsByClassName('app__projectsWrapper')[0].style.transform = 'translateX(0vw) translateY(0vh) translateZ(0px)';

          window.viewManager.isInAction = false;
        }, 3000);
        break;
      }
    }

    return tmp;

  }

  function viewManagerNextViewSetter() {

    console.log(window.viewManager.activeView)

    clearTimeout(window.viewManager.positiveTimeout);
    window.viewManager.positiveTimeout = handlePosistiveResult(window.viewManager.activeView);

    switch (window.viewManager.activeView) {

      case 1: {
        window.document.getElementsByClassName('app__greetingWrapper')[0].style.transform = 'translateZ(-10000px)';
        window.document.getElementsByClassName('app__greetingWrapper')[0].style.transition='1s';
        setTimeout(() => {
          window.document.getElementsByClassName('app__greetingWrapper')[0].style.transform = 'translateZ(-10000px) translateX(-150vw) translateY(-150vh)';
          
        }, 1000);

        setTimeout(() => {
          window.viewManager.isInAction = false;

          window.document.getElementsByClassName('app__personalWrapper')[0].style.transform = 'translateX(0vw) translateY(0vh) translateZ(0px)';
          
          
        }, 1800);

        
        setTimeout(() => {
          window.document.getElementsByClassName('app__personalWrapper')[0].style.transition='1s';
          window.document.getElementsByClassName('app__personalWrapper')[0].style.transform = 'translateX(0vw) translateY(0vh) translateZ(-10000px)';

        }, 800);

        
        window.document.getElementsByClassName('app__greetingWrapper')[0].parentElement.style.pointerEvents='none';
        window.document.getElementsByClassName('app__personalWrapper')[0].parentElement.style.pointerEvents='auto';
        window.document.getElementsByClassName('app__projectsWrapper')[0].parentElement.style.pointerEvents='none';

        break;
      }

      case 2: {
        window.document.getElementsByClassName('app__personalWrapper')[0].style.transform = 'translateZ(-10000px)';
        window.document.getElementsByClassName('app__personalWrapper')[0].style.transition='1s';
        setTimeout(() => {
          window.document.getElementsByClassName('app__personalWrapper')[0].style.transform = 'translateZ(-10000px) translateX(-150vw) translateY(-150vh)';
          
        }, 1000);

        setTimeout(() => {
          window.viewManager.isInAction = false;

          window.document.getElementsByClassName('app__projectsWrapper')[0].style.transform = 'translateX(0vw) translateY(0vh) translateZ(0px)';

          
        }, 1800);

        setTimeout(() => {
          window.document.getElementsByClassName('app__projectsWrapper')[0].style.transition='1s';
          window.document.getElementsByClassName('app__projectsWrapper')[0].style.transform = 'translateX(0vw) translateY(0vh) translateZ(-10000px)';

        }, 800);

        window.document.getElementsByClassName('app__greetingWrapper')[0].parentElement.style.pointerEvents='none';
        window.document.getElementsByClassName('app__personalWrapper')[0].parentElement.style.pointerEvents='none';
        window.document.getElementsByClassName('app__projectsWrapper')[0].parentElement.style.pointerEvents='auto';

        break;

        
      }
    }

  }

  function viewManagerPrevViewSetter() {

    console.log(window.viewManager.activeView)

    clearTimeout(window.viewManager.positiveTimeout);
    window.viewManager.positiveTimeout = handlePosistiveResult(window.viewManager.activeView);

    switch (window.viewManager.activeView) {
      case 0: {
        console.log('back ')
        window.document.getElementsByClassName('app__personalWrapper')[0].style.transform = 'translateZ(-10000px)';
        window.document.getElementsByClassName('app__personalWrapper')[0].style.transition='1s';
        setTimeout(() => {
          console.log('back t 1')
          window.document.getElementsByClassName('app__personalWrapper')[0].style.transform = 'translateZ(-10000px) translateX(150vw) translateY(150vh)';
          
        }, 1000);

        setTimeout(() => {
          console.log('back t 2')
          window.viewManager.isInAction = false;

          console.log('back 2')
          window.document.getElementsByClassName('app__greetingWrapper')[0].style.transform = 'translateX(0vw) translateY(0vh) translateZ(0px)';

          window.document.getElementsByClassName('app__greetingWrapper')[0].parentElement.style.pointerEvents='auto';
          window.document.getElementsByClassName('app__personalWrapper')[0].parentElement.style.pointerEvents='none';
          window.document.getElementsByClassName('app__projectsWrapper')[0].parentElement.style.pointerEvents='none';
        }, 1800);

        setTimeout(() => {
          window.document.getElementsByClassName('app__greetingWrapper')[0].style.transition='1s';
          window.document.getElementsByClassName('app__greetingWrapper')[0].style.transform = 'translateX(0vw) translateY(0vh) translateZ(-10000px)';
          console.log('back 1')
          
        }, 800);

        

        break;
      }

      case 1: {

        window.document.getElementsByClassName('app__projectsWrapper')[0].style.transform = 'translateZ(-10000px)';
        window.document.getElementsByClassName('app__projectsWrapper')[0].style.transition='1s';
        setTimeout(() => {
          window.document.getElementsByClassName('app__projectsWrapper')[0].style.transform = 'translateZ(-10000px) translateX(150vw) translateY(150vh)';
          
        }, 1000);

        setTimeout(() => {
          window.viewManager.isInAction = false;

          window.document.getElementsByClassName('app__personalWrapper')[0].style.transform = 'translateX(0vw) translateY(0vh) translateZ(0px)';

          window.document.getElementsByClassName('app__greetingWrapper')[0].parentElement.style.pointerEvents='none';
          window.document.getElementsByClassName('app__personalWrapper')[0].parentElement.style.pointerEvents='auto';
          window.document.getElementsByClassName('app__projectsWrapper')[0].parentElement.style.pointerEvents='none';
        }, 1800);

        
        setTimeout(() => {
          window.document.getElementsByClassName('app__personalWrapper')[0].style.transition='1s';
          window.document.getElementsByClassName('app__personalWrapper')[0].style.transform = 'translateX(0vw) translateY(0vh) translateZ(-10000px)';

        }, 800);

        
        

        break;
      }

    }

  }

  useEffect(() => {

    window.viewManager = {
      activeView: 0,
      isInAction: false,
      setNextView: viewManagerNextViewSetter,
      setPrevView: viewManagerPrevViewSetter,
      positiveTimeout: null
    }
    

    window.addEventListener('mousewheel', handleScrollEffect);

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
