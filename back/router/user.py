from typing import Optional
from fastapi import APIRouter, Depends, Response
from sqlalchemy.orm import Session
import schemas
from db import db_user, database, hash

router = APIRouter(prefix='/user', tags=['user'])


@router.post('/', response_model=schemas.UserResponseSchema)
def create_user(user: schemas.UserBaseSchema, db: Session = Depends(database.get_db)):
    user: schemas.UserBaseSchema = db_user.create_user(db=db, request=user)
    return user


@router.post('/login', response_model=schemas.UserResponseSchema)
def login_user(req: schemas.UserBaseSchema, db: Session = Depends(database.get_db)):
    user: schemas.UserBaseSchema = db_user.get_user(db=db, request=req)
    if not user:
        return False

    if hash.Hash.verify(user.password, req.password):
        return user
