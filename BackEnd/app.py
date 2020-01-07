from flask import jsonify
from settings import app
from service.profileservice import ProfileService
from seed import load_seed

@app.route("/")
def root():
    return jsonify(ProfileService("Jose Miguel Solaro").get_profile_information())


if __name__ == "__main__":
    load_seed()
    app.run(host='localhost', port='8080')
