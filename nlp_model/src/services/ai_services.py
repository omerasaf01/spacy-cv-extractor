import spacy
from pypdf import PdfReader
from tqdm import tqdm

nlp = spacy.load("en_core_web_lg")

ruler = nlp.add_pipe("entity_ruler", before="ner")
ruler.from_disk("./src/services/jz_skill_patterns")

patterns = [
    {
        "label": "EMAIL",
        "pattern": [{ "TEXT": { "REGEX": "([^@|\s]+@[^@]+\.[^@|\s]+)" } }]
    },
    {
        "label": "MOBILE",
        "pattern": [{ "TEXT": { "REGEX": "\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4}|\(\d{3}\)\s*\d{3}[-\.\s]??\d{4}|\d{3}[-\.\s]??\d{4}" } }]
    }
]

ruler.add_patterns(patterns)

def process_document(pdf_path, page_ids=None):
    result = {
        "skills": [],
        "personalInfo": {}
    }
    reader = PdfReader(pdf_path)
    page2content = ""

    for page in tqdm(reader.pages, desc="Processing PDF pages"):
        if page_ids is not None and page.page_number not in page_ids:
            continue
        text = page.extract_text()
        if text:
            page2content += text + "\n"
    
    doc = nlp(page2content)
    
    i = 0
    for ent in doc.ents:
        if ent.label_ == 'PERSON' and i==0:
            result["personalInfo"]["name"] = ent.text
            i += 1
        if ent.label_ == "EMAIL":
            result["personalInfo"]["email"] = ent.text
        if ent.label_ == "MOBILE":
            result["personalInfo"]["mobile"] = ent.text
        if ent.label_ == "SKILL":
            result["skills"].append(ent.text)

    result["skills"] = list(set(result["skills"]))
    print(result)

    return result
