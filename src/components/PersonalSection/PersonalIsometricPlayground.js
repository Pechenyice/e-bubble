import React from 'react';
import PersonalTextBox from './PersonalTextBox';
import PersonalIsometricContext from './PersonalIsometricContext';
import PersonalIsometricSkills from './PersonalIsometricSkills';
import PersonalSkillRating from './PersonalSkillRating';

function PersonalIsometricPlayground() {
  return (
    <div className="personal__isometricBackground">
      <div className="personal__textBox personal__textBox_icons textBox">
        <div className="textBox__aside">
          <PersonalTextBox
            style={{ marginBottom: '50px' }}
            heading={'Personal'}
            text={
              <p className="textBox__text">
                I am <span className="greeting__accent">19 y.o.</span> guy living in{' '}
                <span className="greeting__accent">Saint-Petersburg, Russia</span>.<br />I like to{' '}
                <span className="greeting__accent">create UI/UX</span> that only I like (sad),
                <br />
                <span className="greeting__accent">program</span>, read books, go in for sports
                <br />
                and wasting time for self-developing.
                <br />
                Also in my spare time, I am a{' '}
                <span className="greeting__accent">
                  student at
                  <br />
                  ITMO University
                </span>
                .
              </p>
            }
          />

          <PersonalTextBox heading={'Social'} text={<PersonalIsometricContext />} />
        </div>
      </div>

      <div className="personal__textBox textBox">
        <div className="textBox__aside">
          <PersonalTextBox
            heading={'Professional'}
            text={
              <PersonalIsometricSkills
                theme={'Hard skills'}
                list={
                  <div className="isometric__skillList">
                    <PersonalSkillRating name="JavaScript" rating={4} />
                    <PersonalSkillRating name="React" rating={4} />
                    <PersonalSkillRating name="Redux" rating={4} />
                    <PersonalSkillRating name="Next.js" rating={3} />
                    <PersonalSkillRating name="TypeScript" rating={3} />
                    <PersonalSkillRating name="Jest / Cypress" rating={4} />
                    <PersonalSkillRating name="Node.js" rating={4} />
                    <PersonalSkillRating name="RabbitMQ" rating={4} />
                    <PersonalSkillRating name="Electron.js" rating={3} />
                    <PersonalSkillRating name="HTML and CSS" rating={5} />
                  </div>
                }
              />
            }
          />
        </div>
      </div>

      <div className="personal__textBox textBox">
        <div className="textBox__aside">
          <PersonalTextBox
            heading={'Also professional'}
            text={
              <PersonalIsometricSkills
                theme={'Instruments'}
                list={
                  <div className="isometric__skillList">
                    <PersonalSkillRating name="Git" rating={4} />
                    <PersonalSkillRating name="Docker" rating={4} />
                    <PersonalSkillRating name="Kubernetes" rating={2} />
                    <PersonalSkillRating name="Rest API" rating={5} />
                    <PersonalSkillRating name="Figma" rating={4} />
                    <PersonalSkillRating name="SQL" rating={4} />
                    <PersonalSkillRating name="NoSQL" rating={1} />
                    <PersonalSkillRating name="Markdown" rating={4} />
                  </div>
                }
              />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalIsometricPlayground;
