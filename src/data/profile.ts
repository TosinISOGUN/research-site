import type { Profile } from '../types';

// Everything on the left sidebar and the About section comes from this file.
// Edit the text here; no need to touch the components.

export const profile: Profile = {
  name: 'Oluwatomisin Isogun',
  role: 'Computer science graduate and researcher',
  tagline: 'Computer science graduate and researcher working on TinyML, computer vision and time-series modelling.',
  affiliation: 'B.Tech. Computer Science, Olusegun Agagu University of Science and Technology (OAUSTECH), 2024',
  location: 'Ibadan, Nigeria',
  email: 'oluwatomisinisogun@gmail.com',

  photo: 'images/profile.jpg',
  // Note: this CV copy includes the street address, by choice. Anyone can download it.
  cvUrl: 'files/CV_Oluwatomisin_Isogun.pdf',

  availability:
    'Applying for 2027 entry to thesis-based MSc programmes and to PhD programmes that admit directly from a bachelor’s degree, and glad to talk with supervisors about research fit.',

  intro: [
    'I work on machine learning that has to run on small, real hardware. My research so far covers computer vision for measuring the physical world, time-series modelling of environmental data, and TinyML systems for resource-constrained sensing.',
    'I graduated from Olusegun Agagu University of Science and Technology in 2024 with a B.Tech. in Computer Science (CGPA 4.09/5.00, top 1% of the graduating class). In October 2026 I co-authored a paper in the ISA Journal of Engineering and Technology on a value-aware, RF-enabled TinyML architecture for environmental monitoring. In a computational evaluation it needed 72.54% fewer transmissions than periodic monitoring while delivering packets more reliably.',
    'My path into research began with optimisation and computer vision. For my final-year project I worked on estimating vehicle speed from wide-angle camera footage, where perspective distortion makes distant vehicles look smaller and their speeds harder to measure. The pipeline combined object detection, tracking, polygon-zone mapping and perspective correction in OpenCV. In 2025 I worked as a research assistant on LSTM-based weather prediction with incomplete meteorological data.',
    'On the TinyML paper I wrote the code for the computational evaluation and interpreted the results. The study also marks the limit of that work: the radio behaviour was modelled, and no physical microcontroller measurements were taken. That gap is where I want to work next, on how closely a model running on a microcontroller behaves like its workstation version.',
    'I also teach and mentor. I tutored more than 200 Computer Science students at OAUSTECH, led front-end mentoring for the Google Developer Student Clubs there, and now teach a 24-week web-development programme at Learncity Tech Academy.',
  ],

  links: [
    { label: 'GitHub', href: 'https://github.com/TosinISOGUN' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/oluwatomisin-isogun-a38740356' },
    { label: 'ORCID', href: 'https://orcid.org/0009-0009-1419-7928' },
    // TODO (optional): add a Google Scholar profile once it exists
  ],

  // The strip under the wave on the home page. The paper figures come from a computational evaluation.
  glance: [
    { value: '1', label: 'peer-reviewed, open-access paper (2026)' },
    { value: '72.54%', label: 'fewer transmissions than periodic monitoring, in a computational evaluation' },
    { value: '94.44%', label: 'modelled packet-delivery ratio, against 70.78% for periodic telemetry' },
    { value: '4.09/5.00', label: 'CGPA, top 1% of the graduating class' },
  ],
};
