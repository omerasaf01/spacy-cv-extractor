# CV Extractor

An AI-powered resume analysis tool that automatically extracts and organizes information from PDF resumes.

![CV Extractor Banner](https://via.placeholder.com/800x200?text=CV+Extractor)

## Project Overview

CV Extractor is a comprehensive solution for parsing and analyzing resumes/CVs in PDF format. The project consists of two main components:

1. **Backend (spaCy CV Extractor)**: A powerful NLP-based resume parsing system built with spaCy that extracts structured information from unstructured resume text.

2. **Frontend (AI UI)**: A modern, responsive web interface built with Next.js that allows users to upload resumes and view the extracted information in an organized format.

## Features

- 📄 **PDF Resume Upload**: Upload and process PDF resumes
- 🤖 **AI-Powered Extraction**: Intelligent information extraction using spaCy NLP
- 👤 **Personal Information Detection**: Automatically extract name, email, phone, | and address(soon)
- 💼 **Work Experience Parsing**: Extract job titles, companies, durations, and descriptions **(Soon)**
- 🎓 **Education History**: Identify degrees, schools, and graduation years\*\* **(Soon)**
- 🛠️ **Skills Recognition**: Catalog technical and soft skills from the resume
- 📊 **Clean Visualization**: View extracted data in an organized, user-friendly interface

## Technology Stack

### Backend

- Python
- spaCy for Natural Language Processing
- FastAPI for API endpoints
- PDF text extraction tools

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS + shadcn/ui components
- Axios for API communication

## Getting Started

### Prerequisites

- Node.js (v16+)
- Python (v3.8+)
- pip

### Installation

#### Backend Setup

1. Open Directory

```bash
$ cd nlp_model
```

2. Install dependencies:

   ```bash
   $ uv sync
   ```

3. Download spaCy models:

   ```bash
   $ uv pip install https://github.com/explosion/spacy-models/releases/download/en_core_web_lg-3.4.1/en_core_web_lg-3.4.1-py3-none-any.whl
   ```

4. Start the backend server:
   ```bash
   $ uv run main.py
   ```

#### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   $ cd Cv Extractor/ai-ui
   ```

2. Install dependencies:

   ```bash
   $ npm install
   ```

3. Run the development server:

   ```bash
   $ npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Open the application in your web browser
2. Click "Upload" and select a PDF resume file
3. Click "Analyze" to process the resume
4. View the extracted information organized by sections:
   - Personal Information
   - Summary
   - Work Experience
   - Education
   - Skills

## API Documentation

The backend provides the following API endpoint:

### Upload CV

```
POST /uploads/cv
```

**Request Body:**

- `file`: PDF file (multipart/form-data)

**Response:**

```json
{
  "personalInfo": {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "+1 234-567-8901",
    "address": "New York, NY"
  },
  "summary": "Experienced software engineer with 5+ years...",
  "experience": [
    {
      "title": "Senior Software Engineer",
      "company": "Tech Corp",
      "duration": "2020-Present",
      "description": "Led development of..."
    }
  ],
  "education": [
    {
      "degree": "Bachelor of Science in Computer Science",
      "school": "University of Technology",
      "year": "2018"
    }
  ],
  "skills": ["JavaScript", "Python", "React", "Node.js"]
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [spaCy](https://spacy.io/) for NLP capabilities
- [Next.js](https://nextjs.org/) for the frontend framework
- [shadcn/ui](https://ui.shadcn.com/) for UI components

---

Made with ❤️ by Ömer Asaf Karasu
