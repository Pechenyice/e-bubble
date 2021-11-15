import React from 'react';
import { faGithub, faVk } from '@fortawesome/free-brands-svg-icons';
import PersonalIsometricLink from './PersonalIsometricLink';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function PersonalIsometricContext() {
  return (
    <div className="textBox__isometric isometric">
      <PersonalIsometricLink icon={faGithub} name="github" href={'https://github.com/Pechenyice'} />
      <PersonalIsometricLink
        icon={faVk}
        name="vk"
        href={'https://vk.com/gerundos'}
        textColor="white"
        color="#4376A6"
        borderColor="#4376A6"
      />
      <PersonalIsometricLink
        icon={faEnvelope}
        name="mail"
        href={'mailto:german.iskhakov@mail.ru?subject=Portfolio link'}
        textColor="white"
        color="#168de2"
        borderColor="#168de2"
      />
    </div>
  );
}

export default PersonalIsometricContext;
