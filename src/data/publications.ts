import type { Publication } from '../types';

// Published and peer-reviewed work. Newest first.
export const publications: Publication[] = [
  {
    id: 'value-aware-tinyml-2026',
    title:
      'Value-Aware RF-Enabled TinyML Embedded Architecture for Intelligent Environmental Monitoring in Resource-Constrained Environments: A Computational Experimental Evaluation',
    authors: ['Nnaji Kelechi Timothy', 'Oluwatomisin Isogun', 'Chi Mac-Braine Wanisi', 'Edeh Chukwuemeka Dominic'],
    venue: 'ISA Journal of Engineering and Technology (ISAJET), 3(5), 50–68',
    year: 2026,
    status: 'published',
    note: 'Open access (CC BY-NC 4.0). Received 10 August 2026, accepted 2 October 2026, published 13 October 2026.',
    summary:
      'Proposes a TinyML architecture that decides whether, and how reliably, to transmit each environmental observation, weighing severity, uncertainty, novelty and information age. In a computational evaluation on a real CO₂ time series it used 72.54% fewer transmissions than periodic monitoring.',
    abstract:
      'Resource-constrained environmental sensing systems must simultaneously satisfy conflicting requirements for predictive intelligence, communication reliability, memory efficiency, and energy conservation. Although Tiny Machine Learning (TinyML) enables local inference on microcontroller-class devices, existing environmental monitoring systems frequently treat environmental inference, transmission scheduling, and radio-frequency resource allocation as separate optimization problems. This study proposes a value-aware RF-enabled TinyML architecture in which environmental severity, prediction uncertainty, temporal novelty, information freshness, and RF-link state jointly determine whether information is transmitted and the communication resources assigned to its delivery. A computational experimental evaluation was performed using a real environmental time series containing 2,231 usable temporal sequences. Four candidate models (Decision Tree, Random Forest, multilayer perceptron, and compact one-dimensional convolutional neural network) were evaluated using chronological training, validation, and independent test partitions. The Random Forest achieved the highest test performance, with 89.85% accuracy, 88.08% macro-F1, and 91.18% recall for the highest-severity class. A Value-of-Information controller subsequently combined model severity, predictive entropy, temporal novelty, and information age. Four communication strategies were compared: periodic fixed-RF monitoring, periodic TinyML telemetry, event-triggered TinyML telemetry, and the proposed value-aware adaptive RF architecture. The proposed architecture reduced transmission count by 72.54% and transmitted bytes by 74.22% relative to periodic monitoring. Across 300 modeled RF-link realizations, mean packet-delivery ratio increased from 70.78% for conventional periodic telemetry to 94.44%, while mean critical-event delivery increased from 76.41% to 87.04%. Mean modeled communication energy decreased by 32.13% relative to periodic transmission, although a simpler event-triggered architecture consumed less energy at the cost of substantially poorer reliability. The results demonstrate that communication efficiency in intelligent environmental sensing should be defined not only by energy minimization but by the reliable delivery of high-value environmental information. Physical microcontroller, LoRa, and power measurements remain necessary for final hardware validation.',
    links: [
      { label: 'Paper (DOI)', href: 'https://doi.org/10.5281/zenodo.23337367' },
      { label: 'Reference implementation', href: 'https://github.com/TosinISOGUN/VoI-TinyML-RF' },
    ],
  },
];

// Work that is not yet published. This section is hidden while the list is empty.
export const manuscripts: Publication[] = [
  {
    id: 'speed-estimation-manuscript',
    title: 'Enhancing Vehicle Speed Estimation Accuracy Using Computer Vision',
    authors: ['Oluwatomisin Isogun', 'Modupe Agagu'],
    venue: 'Department of Computer Science, Olusegun Agagu University of Science and Technology',
    dateLabel: 'Manuscript',
    status: 'in-preparation',
    // TODO: if it has been submitted, change status to 'under-review' and name the venue above
    abstract:
      'Accurately determining vehicle speeds is crucial for effective traffic management and road safety. However, achieving precise speed measurements poses significant challenges, especially when using wide-angle cameras prone to perspective distortion, where distant objects appear disproportionately smaller than those closer to the camera. To address this issue, our approach integrates core computer vision techniques, including object detection, object tracking, polygon zone mapping, and perspective correction using OpenCV, to estimate the speeds of tracked vehicles accurately. The model was evaluated on accuracy, precision, recall and F1 score. It achieved an accuracy of 0.80, a precision of 0.90, a recall of 0.82 and an F1 score of 0.86. The analysis and implementation improved speed estimation accuracy, particularly in scenarios affected by perspective distortion.',
    links: [
      { label: 'Manuscript (PDF)', href: 'https://drive.google.com/file/d/13QsFX7s7qGOjcoi7q1Zc7mqB6M7BBaN0/view?usp=sharing' },
      { label: 'Reference implementation', href: 'https://github.com/TosinISOGUN/traffic-speed-homography' },
    ],
  },
];
