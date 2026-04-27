# The Round Table | SAMAHAN Educational Hub — ADDU

## Project Overview

**The Round Table** is a Student Government Educational Hub specifically designed for **Ateneo de Davao University (ADDU)**. Its primary goal is to address the declining student participation in campus elections by providing a comprehensive resource on student governance.

### Core Technologies

- **Framework:** Next.js (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS 4
- **UI Components:** PrimeReact
- **Language:** TypeScript

### Architecture

The project follows the standard Next.js App Router structure:

- `app/`: Contains the main application logic, routes, and global styles.
  - `components/`: Shared UI components like `Navbar`, `Footer`, and `ImagePlaceholder`.
  - `history/`, `participate/`, `positions/`: Route groups for the hub's main content areas.
  - `resources/`: Contains page-specific assets like images.
- `public/`: Static assets accessible via the root URL.

## Building and Running

### Development

To start the development server with hot-reloading:

```bash
npm run dev
```

### Production

To build the application for production:

```bash
npm run build
```

To start the production server after building:

```bash
npm run start
```

### Linting

To run the ESLint check:

```bash
npm run lint
```

## Development Conventions

### Styling

- **Tailwind CSS 4:** Use Tailwind utility classes for most styling needs.
- **PrimeReact:** Integrated for specific UI components (e.g., `Image` with preview functionality).
- **Glassmorphism/Modern Aesthetics:** The project uses dark themes with gradients and blur effects (as seen in `app/page.tsx`) for a polished, "alive" feel.

### Components

- **Functional Components:** Prefer React functional components with TypeScript interfaces for props.
- **Reusable Logic:** Move reusable UI elements into the `app/components/` directory.

### Content

- The hub focuses on data-driven analysis of student participation (e.g., ADDU COMELEC Memorandums).
- New content should align with the educational and civic-engagement mission of the SAMAHAN Student Government.

### Assets

- Store global static assets in `public/images/`.
- Store page-specific images in `app/[route]/resources/images/`.

### Description for every office and department and their roles

OFFICE OF THE SAMAHAN PRESIDENT

- The Office of the SAMAHAN President aims to establish harmony and efficiency in both the internal operations of the student government and external relations. The Office is composed of the following deputies: Chief of Staff, Executive Secretary, and Executive Undersecretary.
  Positions:
- SAMAHAN President
- Chief of Staff
- Executive Secretary
- Executive Undersecretaries

DEPARTMENT OF EXTERNAL AFFAIRS

- The Department of External Affairs is the primary arm of the SAMAHAN Central Board for managing external engagements under the Office of the SAMAHAN President. Anchored in student-centered initiatives, it facilitates national and international opportunities for Ateneo de Davao students and represents SAMAHAN in external partnerships and alliances, including Buklod Atenista and Unyon ng mga Estudyante sa Mindanao (Unyon Mindanao).
  Positions:
- DEA Director
- DEA Deputy Director

ECOTENEO STUDENT UNIT

- The SAMAHAN Ecoteneo Student Unit (ESU) is the official environmental advocacy arm of the SAMAHAN Central Board, committed to championing ecological justice and student-led action for the planet. Inspired the Jesuit call to care for our common home, ESU serves as a space where advocacy takes root, and where compassion is transformed into concrete initiatives.
  Positions:
- ESU Director
- ESU Deputy Director

DEPARTMENT OF CAMPAIGNS AND ADVOCACIES

- The SAMAHAN Department of Campaigns and Advocacies is the advocacy arm of the SAMAHAN Central Board under the Office of the SAMAHAN President. It aims to amplify the voices of Ateneans in actualizing the pursuit of serving the University, Mindanao, and the Philippines.
  Positions:
- DCA Director
- DCA Deputy Director

STUDENT NEEDS AND SERVICES DEPARTMENT

- The Student Needs and Services Department focuses on addressing students' welfare, needs, and access to services. It is a centralized body tasked with handling long-term student support programs, ensuring that services related to student life are better coordinated and sustained.
  Positions:
- SNSD Director
- SNSD Deputy Director

---

OFFICE OF THE SAMAHAN VICE PRESIDENT

- The Office of the SAMAHAN Vice President supervises the internal affairs of the SAMAHAN Central Board and leads the Student Assembly. The Office is composed of the following committees: Executive Committee and the Legislative Support and Monitoring Bureau (LSMB).
  Positions:
- SAMAHAN Vice President
- Chief of Staff
- Multisectoral Affairs Secretary
- Legislative Secretary
- Legislative Undersecretaries

DEPARTMENT OF ACADEMIC AFFAIRS

- The SAMAHAN Department of Academic Affairs (DAA) serves as the academic arm of the SAMAHAN, under the Office of the SAMAHAN Vice President. At its core, the department is committed to promoting the academic welfare of the student body. It strives to provide support through various initiatives that respond to students' academic needs. The DAA also plays a role in examining and reflecting on academic policies, contributing student-centered insights that help improve the learning environment.
  Positions:
- DAA Director
- DAA Deputy Director

DEPARTMENT OF DISASTER RISK REDUCTION AND MANAGEMENT

- The SAMAHAN Department of Disaster Risk Reduction and Management (DDRRM) is the helping arm of the Ateneo de Davao University by providing its services to its constituents. The organization also aims to develop and implement effective disaster response plans and protocols to ensure the safety of everyone in the university in the event of a disaster. Additionally, the department aims to establish partnerships and collaborations with local government units and other organizations to enhance the university community's disaster risk reduction and management efforts.
  Positions:
- DRRM Director
- DRRM Deputy Director

SAMAHAN POLITICAL AFFAIRS AND ENGAGEMENTS DEPARTMENT

- We, the members of the SAMAHAN Political Affairs and Engagements Department of the Samahan ng mga Mag-Aaral ng Pamantasang Ateneo de Davao, recognizing the crucial role of political engagement and leadership in shaping the future of our university and society, hereby establish this department to promote informed and active participation among students.
  Positions:
- SPAED Director
- SPAED Deputy Director

---

OFFICE OF THE SAMAHAN SECRETARY-GENERAL

- The Office of the SAMAHAN Secretary-General aims to ensure efficiency in administrative and secretariat work that shall mobilize the student government to operate its services and meet its goals. The Office is composed of the following deputies: Administrative Secretary and Administrative Undersecretaries.
  Positions:
  SAMAHAN Secretary-General
- Administrative Secretary
- Administrative Undersecretaries

SAMAHAN COMMUNICATIONS

- Housed in the Office of the Secretary General, SAMAHAN Communications serves as the public affairs and information arm of SAMAHAN. The department is entrusted with chronicling moments that shape student life and carrying messages that matter–with clarity and intent. It also takes charge of secretariat duties, such as written documentation and the dissemination of information across various social media platforms. In addition, it manages SAMAHAN's digital spaces and crafts student-facing messaging that inclusively reaches the student body and sparks points of action toward a well-informed Atenean community.
  Positions:
- SAMACOMMS Director
- SAMACOMMS Deputy Director

ATENEO SAMAHAN PRODUCTIONS

- The Ateneo SAMAHAN Productions, under the Office of the Secretary-General, is the premier event productions department of the SAMAHAN and Ateneo de Davao University. It is responsible for strategically planning and managing any SAMAHAN-led activities or events, such as festivals, competitions, conferences, and workshops, among others. It is handled and supported by the department's four committees: Advance Planning, Designs and Logistics, Talents, and Technical.
  Positions:
- ASP Director
- ASP Deputy Director

SAMAHAN CREATIVE TEAM

- Handles the creation, dissemination, and maintenance of the SAMAHAN creative brand. It takes charge of the production of publicity materials that are printed or posted online. It does creative works such as graphic design, layout, motion graphics, photography, and videography.
  Positions:
- SCT Director
- SCT Deputy Director

SAMAHAN RESEARCH AND DEVELOPMENT

- The SAMAHAN Research and Development Department, under the Office of the SAMAHAN Secretary-General, commits to delivering truthful, unbiased, and accurate information through ethical research and data-driven processes. Guided by integrity and service, it strives to inform and engage students in producing outcomes that uphold student welfare and strengthen organizational efforts across the multi-sectoral Ateneo student body.
  Positions:
- R&D Director
- R&D Deputy Director

SAMAHAN SYSTEMS DEVELOPMENT

- SAMAHAN Systems Development is in charge of designing and developing software and digital systems to make SAMAHAN more efficient through technology. Our goal is to use technology for positive community impact.
  Positions:
- SysDev Director
- SysDev Deputy Director

---

OFFICE OF THE SAMAHAN TREASURER

- The Office of the SAMAHAN Treasurer aims to establish a well-financed, transparent, and resourceful student government that can utilize its funds to meet its goals and implement its mandates. The Office is composed of the following deputies: Finance Secretary and Finance Undersecretaries.
  Positions:
  SAMAHAN Treasurer
- Finance Secretary
- Finance Undersecretaries

SAMAHAN LOGISTICS DEPARTMENT

- SAMAHAN Logistics Department, formerly SAMAHAN Task Force, is a department under the Office of the SAMAHAN Treasurer. The logistics arm of the SAMAHAN is in charge of the different logistical works such as procurement and canvassing of equipment and materials; keeping records and supervision of office equipment and materials; preparing, creating, and organizing physical event materials. The department's primary goal is to make the SAMAHAN Office and events physically organized, safely keep the equipment, and assist SAMAHAN in their operations.
  Positions:
- SLD Director
- SLD Deputy Director

SAMAHAN SPONSORSHIP AND SUPPORT

- SAMAHAN Sponsorship and Support is a vital arm of the SAMAHAN Central Board of Ateneo de Davao University that serves as the bridge between student organizations and both internal and external partners. It is committed to building meaningful collaborations that empower student-led initiatives through strategic partnerships, resource generation, and sustainable support.
  Positions:
- SAS Director
- SAS Deputy Director
