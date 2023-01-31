from .database import Base
from sqlalchemy import Column, Integer, String, UniqueConstraint
from sqlalchemy.sql.sqltypes import Integer, String


class DbUser(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True)
    email = Column(String)
    password = Column(String)
    __table_args__ = (UniqueConstraint('username', name='unique_username'),)
