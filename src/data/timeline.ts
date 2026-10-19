import type { TimelineItem } from '../types';

// The research path, oldest first, ending with where you are heading.
// Everything here comes from your CV and the two papers.
// `workTitle` is the full title of the work, shown in italics on the Research page.
// `title` is the short label used on the home page; `place` carries the role.
export const timeline: TimelineItem[] = [
  {
    id: 'tsp-project',
    when: 'Nov 2022 to Feb 2023',
    title: 'Travelling Salesman Problem group project',
    // The project has no formal title in the CV, so the descriptive title stays as the heading.
    place: 'Team lead, Analysis of Algorithms group project, OAUSTECH, supervised by Dr. Ajoke Gbadamosi',
    summary:
      'Led a team of ten students developing a model for applications of the Travelling Salesman Problem across four locations in Nigeria, and presented the model and findings to peers and the project advisor.',
  },
  {
    id: 'timetable-project',
    when: 'Dec 2022 to Mar 2023',
    title: 'Genetic-algorithm timetabling group project',
    workTitle: 'Automated System for Solving School Timetable Problems Using Genetic Algorithm',
    place: 'Group research project, OAUSTECH, supervised by Dr. Adeyemi Michael Oduwale',
    summary:
      'Worked in a student team to build a genetic-algorithm system that generates school timetables with minimal clashes and efficient use of resources.',
  },
  {
    id: 'speed-estimation',
    when: 'Jan to Sep 2024',
    title: 'Final-year research: vehicle speed estimation under perspective distortion',
    workTitle: 'Enhancing Vehicle Speed Estimation Accuracy Using Computer Vision',
    isPaper: true,
    place: 'Final-year research project, OAUSTECH, supervised by Dr. Modupe Agagu',
    summary:
      'Designed a speed-estimation model for recorded traffic footage, aimed at measurement errors that wide-angle cameras introduce through perspective distortion. The pipeline combines object detection, tracking, polygon-zone mapping and perspective correction in OpenCV.',
    highlights: [
      'Evaluated on accuracy, precision, recall and F1: 0.80, 0.90, 0.82 and 0.86.',
      'Written up as a manuscript with Dr. Agagu (see Publications).',
    ],
    links: [{ label: 'Reference implementation', href: 'https://github.com/TosinISOGUN/traffic-speed-homography' }],
  },
  {
    id: 'weather-prediction',
    when: 'Jan to Mar 2025',
    title: 'Research assistant: AI-driven weather prediction',
    workTitle: 'AI-Driven Weather Prediction Model Using Machine Learning',
    place: 'Research assistant, OAUSTECH',
    summary:
      'Supported research on weather prediction with Long Short-Term Memory (LSTM) networks, working with incomplete meteorological data.',
    highlights: [
      'Preprocessed data and engineered features for incomplete meteorological datasets.',
      'Ran cross-validation and error analysis, and compared traditional regression with deep-learning models.',
      'Wrote internal research reports documenting methods, results and model performance.',
    ],
  },
  {
    id: 'tinyml-paper',
    when: 'Jul to Oct 2026',
    title: 'Co-author: value-aware RF-enabled TinyML for environmental monitoring',
    workTitle:
      'Value-Aware RF-Enabled TinyML Embedded Architecture for Intelligent Environmental Monitoring in Resource-Constrained Environments: A Computational Experimental Evaluation',
    isPaper: true,
    place: 'Co-author, multi-institutional project across four universities in Nigeria and Cameroon',
    summary:
      'Co-authored a study proposing a TinyML architecture that scores each environmental observation by severity, prediction uncertainty, temporal novelty and information age, then uses that score to decide whether, and how reliably, to transmit it. Published in the ISA Journal of Engineering and Technology in October 2026.',
    contribution:
      'I wrote the code for the computational evaluation and interpreted the results to draw the paper’s conclusions.',
    highlights: [
      'On a real weekly CO₂ time series, with radio behaviour modelled in simulation, the architecture used 72.54% fewer transmissions than periodic monitoring.',
      'Packet-delivery ratio rose to 94.44%, against 70.78% under periodic monitoring.',
    ],
    links: [{ label: 'Paper (DOI)', href: 'https://doi.org/10.5281/zenodo.23337367' }],
  },
  {
    id: 'reference-implementation',
    when: 'Oct 2026',
    title: 'Open reference implementation of the TinyML architecture',
    workTitle: 'Value-Aware RF-Enabled TinyML for Environmental Monitoring',
    place: 'Independent project',
    summary:
      'Released an open, tested reference implementation of the paper’s computational experiment. It reproduces the data split and the Random Forest accuracy exactly, and the paper’s main finding that adaptive RF delivers far more reliably, and it documents every place where its results differ.',
    links: [
      { label: 'Repository', href: 'https://github.com/TosinISOGUN/VoI-TinyML-RF' },
    ],
  },
  {
    id: 'next',
    when: 'Next',
    title: 'Graduate research (MSc or direct PhD): behavioural fidelity of TinyML deployments',
    summary:
      'A model that behaves well on a workstation can behave differently once it is quantised and compiled for a microcontroller. I want to detect those deviations before deployment.',
    links: [{ label: 'Read the research direction', href: '#direction' }],
    upcoming: true,
  },
];
