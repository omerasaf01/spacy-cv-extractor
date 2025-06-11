from pydantic import BaseModel
from fastapi import UploadFile

class CvUploadRequestDto(BaseModel):
    file: UploadFile
