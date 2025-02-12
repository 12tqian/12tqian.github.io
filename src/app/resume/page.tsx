import { Workplace } from "./Workplace";
import Link from "next/link";

export default function Resume() {
  return (
    <main className="layout-md flex flex-col items-start py-10">
      <p className="text-xl font-bold text-black">Education</p>

      <div className="w-full">
        <div className="flex items-end justify-between">
          <h3 className="text-black text-lg">
            Massachusetts Institute of Technology
          </h3>
          <div className="text-neutral-500 mb-0.5">2024 — 2025</div>
        </div>
        <p className="text-sm text-gray-500">
          MEng in Electrical Engineering and Computer Science (GPA: 5.0/5.0)
        </p>
      </div>

      <div className="mb-4 w-full">
        <div className="flex items-end justify-between">
          <h3 className="text-black text-lg">
            Massachusetts Institute of Technology
          </h3>
          <div className="text-neutral-500 mb-0.5">2021 — 2024</div>
        </div>
        <p className="text-sm text-gray-500">
          B.S. in Electrical Engineering and Computer Science (GPA: 5.0/5.0)
        </p>
      </div>

      <h4 className="font-medium mt-1 mb-1">Teaching:</h4>
      <ul className="list-disc list-inside">
        <li>TA for Machine Learning (6.7900), Fall 2024</li>
      </ul>

      <h4 className="font-medium mt-4 mb-1">Graduate technical coursework:</h4>
      <ul className="list-disc list-inside">
        <li>Deep Generative Modeling (6.S978)</li>
        <li>Inference and Information (6.7800)</li>
        <li>Machine Learning (6.7900)</li>
        <li>Statistical Learning Theory (9.520)</li>
        <li>Advanced Algorithms (6.5210)</li>
        <li>Distributed Systems (6.5840)</li>
        <li>Computer System Security (6.5660)</li>
        <li>Stochastic Processes (18.615)</li>
        <li>Nonlinear Optimization (6.7220)</li>
        <li>Optimization Methods (6.7200)</li>
        <li>Probability (6.7700)</li>
        <li>Computational Photography (6.8370)</li>
        <li>Abstract Algebra (18.701)</li>
      </ul>
      <h4 className="font-medium mt-4 mb-1">
        Undergraduate technical coursework:
      </h4>
      <ul className="list-disc list-inside">
        <li>Software Performance Engineering (6.1060)</li>
        <li>Natural Language Processing (6.8611)</li>
        <li>Operating Systems (6.1810)</li>
        <li>Signal Processing (6.3000)</li>
        <li>Computation Structures (6.1910)</li>
        <li>Embedded Systems (6.08)</li>
        <li>Computer Systems Engineering (6.1800)</li>
        <li>Signals, Systems, and Inference (6.3010)</li>
      </ul>

      <p className="text-xl font-bold text-black mt-8 mb-3">Experience</p>
      <Workplace
        title="Quantitative Research Intern"
        company="Citadel Securities"
        dates="2023, 2024"
        location="New York, NY"
        url="https://www.citadelsecurities.com/"
      >
        <li>
          Worked under the systematic options team, created a risk model and
          performed alpha research.
        </li>
        <li>Studied deep learning in the context of alpha research.</li>
        <li>
          Designed a distributed computing framework to analyze large-scale
          datasets.
        </li>
      </Workplace>

      <Workplace
        title="Cooperative Multi‑Agent Reinforcement Learning with Prof. Dylan Hadfield-Menell"
        company="MIT CSAIL"
        dates="2024"
        location="Cambridge, MA"
        url="https://algorithmicalignment.csail.mit.edu/"
      >
        <li>
          Designed experiments to encourage agents to find cooperative
          solutions.
        </li>
        <li>
          Optimized Melting Pot substrates in JAX for end-to-end GPU
          reinforcement learning.
        </li>
      </Workplace>
      <Workplace
        title="2D Object Detection with Learning Proximal Operators with Prof. Justin Solomon"
        company="MIT CSAIL"
        dates="2022, 2023"
        location="Cambridge, MA"
        url="https://groups.csail.mit.edu/gdpgroup/"
      >
        <li>
          Developed efficient object-detection pipeline without predicting fixed
          number of boxes.
        </li>
        <li>
          Used proximal operators to model the problem as a multi-solution
          optimization problem.
        </li>
        <li>
          Analyzed diffusion object detection methods and conducted ablation
          studies.
        </li>
      </Workplace>
      <Workplace
        title="Software Engineering Intern"
        company="Vividly (formerly Cresicor)"
        dates="2022"
        location="Cambridge, MA"
        url="https://www.govividly.com/"
      >
        <li>Migrated database from Firebase to Django, Relay, and GraphQL.</li>
        <li>
          Designed an efficient system for using hierarchical models represented
          by a DAG.
        </li>
      </Workplace>
      <Workplace
        title="Optimal Measurement of Field Properties with Quantum Sensor Networks"
        company="UMD JQI"
        dates="2020, 2021"
        location="College Park, MD"
        url="https://jqi.umd.edu/"
      >
        <li>
          Investigated measurement accuracy improvement using quantum sensor
          networks.
        </li>
        <li>
          Developed a measurement protocol and proved the protocol’s optimality.
        </li>
        <li>
          US Patent, (
          <Link
            href="https://patents.justia.com/patent/20230259806"
            className="text-gray-500 underline"
          >
            US‑20230259806‑A1
          </Link>
          ), Aug 2023.
        </li>
        <li>
          Physical Review A, Vol.103, Issue 3, 2021. [
          <Link
            href="https://arxiv.org/abs/2011.01259"
            className="text-gray-500 underline"
          >
            arXiv:2011.01259
          </Link>
          ]
        </li>
        <li>
          American Physical Society Meeting, Mar 2021:{" "}
          <Link
            href="https://meetings.aps.org/Meeting/MAR21/Session/E32.5"
            className="text-gray-500 underline"
          >
            E32.00005
          </Link>
          . (Quantum Metrology and Sensing IV)
        </li>
      </Workplace>

      <p className="text-xl font-bold text-black mt-1 mb-3">Awards</p>
      <div className="mb-4 w-full">
        <h3 className="text-black text-lg">Research:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            Regeneron Science Talent Search, Finalist (5th place, $90,000
            award), 2021
          </li>
          <li>Davidson Fellows Scholarship ($25,000 award), 2021</li>
        </ul>
        <h3 className="text-black text-lg">Computer Science:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            Meta Hacker Cup, Round 3 Qualifier (120th place globally), 2022
          </li>
          <li>
            Google Code Jam, Round 3 Qualifier (238th place globally), 2021
          </li>
          <li>
            USA Computing Olympiad, Finalist (9th place in USA Team Selection),
            2020, 2021
          </li>
        </ul>
        <h3 className="text-black text-lg">Mathematics:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            William Lowell Putnam Competition, Honorable Mention (46th place),
            2022
          </li>
          <li>USA Math Olympiad, Qualifier (47th place), 2020, 2021</li>
          <li>
            USA Junior Math Olympiad, Honorable Mention (top 24 in USA), 2019
          </li>
        </ul>
        <h3 className="text-black text-lg">Physics:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            USA Physics Olympiad, Honorable Mention (top 300 in USA), 2021
          </li>
        </ul>
      </div>
    </main>
  );
}
