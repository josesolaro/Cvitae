from model.profile import Profile


class ProfileService:
    def __init__(self, name):
        self.name = name

    def get_profile_information(self):
        profile = Profile().query.filter_by(name=self.name).first()
        if profile is not None:
            profile = profile.filter_object().copy()
            profile["knowledge"] = [exp.filter_object() for exp in profile["knowledge"]]
            profile["experience"] = [exp.filter_object() for exp in profile["experience"]]
            profile["education"] = [edu.filter_object() for edu in profile["education"]]
        return profile
