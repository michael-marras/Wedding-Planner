from sqlalchemy import Column, Integer, String, ForeignKey, UniqueConstraint
from sqlalchemy.orm import relationship
from database import Base
from database import engine

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    budget = Column(Integer, nullable=False, default=0, server_default="0")
    spent = Column(Integer, nullable=False, default=0, server_default="0")

    invites = relationship("Invite", back_populates="user", cascade="all, delete-orphan")


class Invite(Base):
    __tablename__ = "invites"
    __table_args__ = (UniqueConstraint("user_id", "name", name="uq_invite_user_name"),)

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False, index=True)

    name = Column(String, nullable=False)
    email = Column(String, nullable=True)
    phone = Column(String, nullable=True)

    plus_one = Column(String, nullable=True)
    plus_one_email = Column(String, nullable=True)
    plus_one_phone = Column(String, nullable=True)

    rsvp = Column(String, nullable=False, default="Pending", server_default="Pending")

    user = relationship("User", back_populates="invites")


# Create the database tables if they don't exist
Base.metadata.create_all(bind=engine)