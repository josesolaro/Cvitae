from settings import db


class Education(db.Model):

    __tablename__ = "education"

    id = db.Column(db.Integer, primary_key=True)
    degree = db.Column(db.String(50))
    institute = db.Column(db.String(80))
    finish_year = db.Column(db.String(15))
    profile_id = db.Column(db.Integer, db.ForeignKey("profile.id"), nullable=False)

    def filter_object(self):
        obj = self.__dict__.copy()
        obj.pop("_sa_instance_state")
        return obj

    def __repr__(self):
        return self.filter_object().__str__()
