import type { Software } from '../types';

// Open-source projects. Newest first.
export const software: Software[] = [
  {
    id: 'voi-tinyml-rf',
    name: 'VoI-TinyML-RF',
    year: 2026,
    description:
      'Reference implementation of the computational experiment in the value-aware TinyML paper: on-device classification, Value-of-Information scoring and adaptive LoRa telemetry, with tests pinned to the values stated in the paper.',
    meta: ['Python', 'scikit-learn, PyTorch', 'MIT licence'],
    accompanies: {
      title:
        'Value-Aware RF-Enabled TinyML Embedded Architecture for Intelligent Environmental Monitoring in Resource-Constrained Environments: A Computational Experimental Evaluation',
      venue: 'ISAJET, 2026',
    },
    links: [
      { label: 'GitHub', href: 'https://github.com/TosinISOGUN/VoI-TinyML-RF' },
      { label: 'Code (DOI)', href: 'https://doi.org/10.5281/zenodo.23478035' },
    ],
  },
  {
    id: 'traffic-speed-homography',
    name: 'traffic-speed-homography',
    year: 2026,
    description:
      'Vehicle speed estimation from traffic video with perspective correction: YOLOv8 detection, ByteTrack tracking and an OpenCV homography onto a metric view of the road, with a synthetic validation against known speeds.',
    meta: ['Python', 'YOLOv8, ByteTrack, OpenCV', 'MIT licence'],
    accompanies: {
      title: 'Enhancing Vehicle Speed Estimation Accuracy Using Computer Vision',
      venue: 'manuscript',
    },
    links: [
      { label: 'GitHub', href: 'https://github.com/TosinISOGUN/traffic-speed-homography' },
      { label: 'Code (DOI)', href: 'https://doi.org/10.5281/zenodo.23478205' },
    ],
  },
];
