import os
from fastapi import FastAPI
from router import user

from db.database import engine, Base

Base.metadata.create_all(bind=engine)
app = FastAPI()
app.include_router(user.router)


@app.get('/')
def index():
    return "alive"
