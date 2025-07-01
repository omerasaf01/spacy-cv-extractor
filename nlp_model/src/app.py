from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
from src.services.ai_services import AIServices
import os
import random

app = FastAPI()

@app.post("/uploads/cv")
async def upload_cv(file: UploadFile = File(...)):
    if file.content_type != "application/pdf":
        return JSONResponse(
            status_code = 400,
            content = { "error": "Ony pdf files can be accepted",}
        )

    content = await file.read()
    random_numbers = []

    for i in range(0, 3):
        random_numbers.append(random.randint(100, 99999999))

    file_name = (" ".join(str(random_numbers).replace(" ", "")) + ".pdf").replace(" ", "").replace("[", "").replace("]", "").replace(",", "")

    if not os.path.isdir("public\\pdfs") and os.path.isfile(f"public\\pdfs\\{file_name}"):
        return JSONResponse(
            status_code = 500,
            content = { "error": "Server upload arreor was occured" }
        )

    file_path = os.path.join(os.path.dirname(__file__), "public", "pdfs", file_name)
    with open(file_path, "wb") as f:
        f.write(content)

    return AIServices(pdf_file = file_path).extract_cv()
