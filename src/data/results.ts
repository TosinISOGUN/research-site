import type { WorkResults } from '../types';

// Selected figures and tables, shown on the Research page. Numbers are copied from the paper and
// the manuscript. Figure images were cropped from the PDFs and live in public/images/figures/.
export const results: WorkResults[] = [
  {
    id: 'tinyml-results',
    title:
      'Value-Aware RF-Enabled TinyML Embedded Architecture for Intelligent Environmental Monitoring in Resource-Constrained Environments',
    summary:
      'Each environmental observation is classified on the device and scored for severity, uncertainty, novelty and information age. A controller uses that score and the radio link state to decide whether to transmit, and with how much radio robustness. The evaluation is computational: a real weekly CO₂ time series, with the radio modelled over 300 simulated link realizations.',
    source:
      'Figures and tables from Nnaji, Isogun, Wanisi and Dominic (2026), ISA Journal of Engineering and Technology 3(5), 50–68, published under CC BY-NC 4.0.',
    figures: [
      {
        src: 'images/figures/tinyml-architecture.jpg',
        alt: 'Block diagram: environmental sensors feed signal conditioning, TinyML inference and a value-of-information estimator, which drives a joint resource and RF controller sending data to a LoRa gateway. Severity, uncertainty, novelty and information age feed the estimator; RF link state and node resource state feed back into the controller.',
        caption:
          'Figure 1. The proposed architecture. On-device inference feeds a value-of-information estimator, and a joint controller decides whether to transmit and chooses payload size, spreading factor and transmit power.',
        width: 1395,
        height: 891,
      },
      {
        src: 'images/figures/tinyml-communication.jpg',
        alt: 'Grouped bar chart comparing four systems. The proposed system B3 sends 27.5% of the baseline packets, uses 67.9% of the baseline modelled RF energy, and reaches 94.4% packet delivery and 87.0% critical-event delivery, against 70.8% and 76.4% for the periodic baseline.',
        caption:
          'Figure 2. The four communication strategies compared on packets sent and modelled RF energy (both relative to periodic monitoring), packet-delivery ratio (PDR) and critical-event delivery rate (CEDR). RF metrics are modelled.',
        width: 1267,
        height: 675,
      },
    ],
    tables: [
      {
        caption: 'Table 1. Test-set classification performance of the candidate models.',
        columns: ['Model', 'Accuracy (%)', 'Macro-F1 (%)', 'Artifact size (KB)'],
        rows: [
          ['Decision Tree', '84.48', '81.97', '11.36'],
          ['Random Forest', '89.85', '88.08', '421.27'],
          ['MLP', '83.58', '78.68', '27.29'],
          ['Tiny 1-D CNN', '82.69', '78.59', '4.03'],
        ],
        highlightRow: 1,
        note: 'The Random Forest was selected. Its 95% bootstrap interval for accuracy was 86.57–93.13%.',
      },
      {
        caption: 'Table 2. Communication and modelled RF performance (means over 300 link realizations).',
        columns: ['System', 'Packets', 'Bytes', 'RF energy (mJ)', 'PDR (%)', 'CEDR (%)'],
        rows: [
          ['B0 Periodic, fixed RF', '335', '10,720', '15,823.54', '70.78', '76.41'],
          ['B1 TinyML periodic', '335', '4,020', '9,257.76', '70.78', '76.41'],
          ['B2 Event-triggered TinyML, fixed RF', '177', '3,684', '6,420.16', '70.59', '76.41'],
          ['B3 Proposed: VoI + adaptive RF', '92', '2,764', '10,738.93', '94.44', '87.04'],
        ],
        highlightRow: 3,
        note: 'B3 sent 72.54% fewer packets than B0. B2 used the least energy but delivered far less reliably. Physical microcontroller, LoRa and power measurements are still needed for hardware validation.',
      },
    ],
    links: [
      { label: 'Paper (DOI)', href: 'https://doi.org/10.5281/zenodo.23337367' },
      { label: 'Code (DOI)', href: 'https://doi.org/10.5281/zenodo.23478035' },
    ],
  },
  {
    id: 'speed-results',
    title: 'Enhancing Vehicle Speed Estimation Accuracy Using Computer Vision',
    summary:
      'Vehicles are detected with YOLOv8 and tracked with ByteTrack. Each vehicle’s position is mapped onto a metric top-down view of the road with an OpenCV perspective transform, so that speed is measured in metres and seconds and not in pixels, which shrink with distance from a wide-angle camera.',
    source: 'Figure and table from Isogun and Agagu, undergraduate thesis manuscript, OAUSTECH.',
    figures: [
      {
        src: 'images/figures/speed-estimation-output.jpg',
        alt: 'Motorway video frame with five tracked vehicles in coloured boxes, each labelled with an ID and an estimated speed between 82 and 133 km/h.',
        caption: 'Figure 3. Output of the speed-estimation pipeline: tracked vehicles labelled with their estimated speeds.',
        width: 1325,
        height: 604,
        photo: true,
      },
    ],
    tables: [
      {
        caption: 'Table 3. Performance of the speed-estimation model.',
        columns: ['Metric', 'Accuracy', 'Precision', 'Recall', 'F1 score'],
        rows: [['Score', '0.80', '0.90', '0.82', '0.86']],
        note: 'Scored on 15 vehicles in one clip, each judged correct or incorrect; no measured reference speeds were recorded.',
      },
    ],
    links: [
      { label: 'Code (DOI)', href: 'https://doi.org/10.5281/zenodo.23478205' },
      { label: 'GitHub', href: 'https://github.com/TosinISOGUN/traffic-speed-homography' },
    ],
  },
];
