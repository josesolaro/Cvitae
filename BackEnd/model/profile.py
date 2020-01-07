from settings import db
import json

class Profile(db.Model):
    __tablename__ = 'profile'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30))
    job = db.Column(db.String(30))
    phone = db.Column(db.String(30))
    email = db.Column(db.String(50))
    linkedin = db.Column(db.String(50))
    location = db.Column(db.String(100))
    profile_description = db.Column(db.Text)
    education = db.relationship("Education", backref="Profile", lazy=False)
    experience = db.relationship("Experience", backref="Profile", lazy=False)

    def filter_object(self):
        obj = self.__dict__.copy()
        obj.pop("_sa_instance_state")
        return obj

    def __repr__(self):
        return self.filter_object().__str__()
