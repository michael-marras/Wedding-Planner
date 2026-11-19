from sqlalchemy import Column, Integer, String
from database import Base
from database import engine

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    budget = Column(Integer, nullable=False, default=0, server_default="0")
    spent = Column(Integer, nullable=False, default=0, server_default="0")

# Create the database tables if they don't exist

User.metadata.create_all(bind=engine)
