from settings import db


class Experience(db.Model):

    __tablename__ = 'experiences'

    id = db.Column(db.Integer, primary_key=True)
    job = db.Column(db.String(50))
    job_from = db.Column(db.String(15))
    job_to = db.Column(db.String(15), default="")
    company = db.Column(db.String(50))
    description = db.Column(db.Text)
    profile_id = db.Column(db.Integer, db.ForeignKey("profile.id"), nullable=False)

    def filter_object(self):
        obj = self.__dict__.copy()
        obj.pop("_sa_instance_state")
        return obj

    def __repr__(self):
        return self.filter_object().__str__()


