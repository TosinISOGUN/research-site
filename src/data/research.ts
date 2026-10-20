import type { ResearchDirection } from '../types';

// The "Research direction" section. This is what a professor reads to decide
// whether you fit their group, so keep it specific and honest.

export const researchDirection: ResearchDirection = {
  title: 'Behavioural fidelity of TinyML deployments',
  summary:
    'A model that scores well on a workstation can behave differently once it is quantised and compiled for a microcontroller. I want to study where those deviations come from (quantisation, toolchain and operator differences, the hardware itself) and build methods that detect them before a system is deployed. My TinyML paper evaluated its architecture computationally and named physical microcontroller measurements as the step still missing. This direction picks up from there.',
  questions: [
    'How large are quantisation- and toolchain-induced deviations compared with ordinary model error, and where do they concentrate?',
    'Can on-device inference be checked against a reference implementation automatically, without relying on labelled data?',
    'What would a practical, reusable test harness for microcontroller inference look like?',
  ],
  threads: [
    {
      title: 'Computer vision for measurement',
      text: 'Vision systems whose output is a physical quantity, such as vehicle speed, where errors from camera geometry and perspective distortion have to be characterised and not only minimised.',
    },
    {
      title: 'Value-aware, low-power sensing',
      text: 'Sensing nodes that decide what is worth computing and transmitting, weighing the value of information against energy and link reliability.',
    },
    {
      title: 'Time-series modelling',
      text: 'Learning from environmental and meteorological time series that are noisy and incomplete, from LSTMs to compact models that fit on a microcontroller.',
    },
  ],
  keywords: [
    'TinyML',
    'Embedded machine learning',
    'Quantisation',
    'Computer vision',
    'Time-series modelling',
    'Value of information',
    'Environmental monitoring',
  ],
};

// Shown as a plain list on the home page.
export const researchInterests: string[] = [
  'TinyML and embedded machine learning',
  'Model quantisation and deployment on microcontrollers',
  'Low-power intelligent sensing and IoT',
  'Value of information in sensing and communication',
  'Computer vision',
  'Vision-based measurement',
  'Time-series modelling and forecasting',
  'Environmental monitoring',
  'Applied machine learning',
];
