import React from "react";
import './GreetingSection.css';
import GreetingTextBox from './GreetingTextBox';
import DoughnutList from "./DoughnutList";

function GreetingSection() {

    return (
        <section className='app__greeting greeting'>

            <div className='greeting__textBox textBox'>

                <div>

                    <GreetingTextBox 
                        heading={'Personal'}
                        text={<p className='textBox__text'>
                            I am <span className='greeting__accent'>19 y.o.</span> guy living in <span className='greeting__accent'>Saint-Petersburg, Russia</span>.<br/>
                            I like to <span className='greeting__accent'>create UI/UX</span> that only I like (sad),<br/>
                            <span className='greeting__accent'>program</span>, read books, go in for sports<br/>
                            and wasting time for self-developing.<br/>
                            Also in my spare time, I am a <span className='greeting__accent'>student at<br/>
                            ITMO University</span>.
                        </p>}
                    />

                    <GreetingTextBox 
                        heading={'Social'}
                        text='test'
                    />

                </div>
                

            </div>

            <div className='greeting__graph graph'>

                <div className='graph__doughnut doughnut'>

                    <DoughnutList />
                    
                    <svg width="312" height="313" viewBox="0 0 312 313" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M17 85.1854C31.4126 57.1132 54.0879 33.9811 81.8145 19L106.834 62.3356C86.6694 72.8746 70.3174 89.7117 60.3887 110.236L17 85.1854Z" fill="#F1502F"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.479 108C2.62305 123.081 0 139.165 0 155.861C0 174.807 3.37744 192.964 9.56299 209.763L53.832 184.205C51.3345 175.183 50 165.678 50 155.861C50 148.32 50.7876 140.964 52.2842 133.868L7.479 108Z" fill="#00758F"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M105 303.471C121.112 309.099 138.429 312.158 156.46 312.158C174.383 312.158 191.6 309.135 207.629 303.572L181.938 259.076C173.777 261.09 165.243 262.158 156.46 262.158C147.567 262.158 138.93 261.063 130.675 259L105 303.471Z" fill="#9FEAF9"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M81.4404 293.452C55.7314 279.465 34.3936 258.459 20 233.006L63.3115 208C73.3071 225.869 88.3262 240.547 106.458 250.122L81.4404 293.452Z" fill="#FF7765"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M156.028 50C147.298 50 138.814 51.0555 130.697 53.0457L105 8.53688C120.989 3.00486 138.158 0 156.028 0C173.79 0 190.859 2.96848 206.765 8.4364L181.053 52.9711C173.029 51.0291 164.649 50 156.028 50Z" fill="#F0DB4F"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M258 183.887L302.276 209.45C308.44 192.677 311.805 174.552 311.805 155.641C311.805 138.286 308.971 121.593 303.741 106L259.106 131.77C260.872 139.442 261.805 147.432 261.805 155.641C261.805 165.422 260.48 174.894 258 183.887Z" fill="#3C873A"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M291.774 232.006C277.33 257.585 255.876 278.68 230.019 292.682L205 249.349C223.28 239.762 238.417 224.996 248.462 207L291.774 232.006Z" fill="#F06529"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M250.899 107.732C240.857 87.8642 224.745 71.5871 205 61.3393L230.022 18C257.331 32.687 279.761 55.2731 294.254 82.7007L250.899 107.732Z" fill="#61DBFB"/>
                    </svg>

                    <h1 className='doughnut__heading'>
                        <span className='doughnut__headingWrapper'>
                            Hello, I’m<br/><span className='greeting__accent doughnut__bigHeading'>German Iskhakov</span><br/>the<br/><span className='greeting__accent'>web developer</span>
                        </span>
                    </h1>

                </div>

            </div>

            <div className='greeting__hintBox hintBox'>

            </div>

            


        </section>
    );

}

export default GreetingSection;