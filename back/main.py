import os
from fastapi import FastAPI
from router import user

from db.database import engine, Base
from fastapi.middleware.cors import CORSMiddleware
origins = [
    "http://localhost:5173",
    "http://localhost:8002",
]

Base.metadata.create_all(bind=engine)
app = FastAPI()
app.include_router(user.router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/')
def index():
    return "alive"
