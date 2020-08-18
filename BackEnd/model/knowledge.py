from settings import db


class Knowledge(db.Model):

    __tablename__ = 'knowledge'
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(50))
    profile_id = db.Column(db.Integer, db.ForeignKey("profile.id"), nullable=False)

    def filter_object(self):
        obj = self.__dict__.copy()
        obj.pop("_sa_instance_state")
        return obj

    def __repr__(self):
        return self.filter_object().__str__()