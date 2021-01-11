from settings import db
from model.profile import Profile
from model.experience import Experience
from model.education import Education
from model.knowledge import Knowledge
from datetime import date

def load_data():
    knowledge = [Knowledge(description="English"), Knowledge(description="Scrum"), Knowledge(description="CI/CD"),
                 Knowledge(description="Embedded Systems"),
                 Knowledge(description="React"),
                 Knowledge(description="Artificial Intelligence & Data Science with Keras and TensorFlow"),
                 Knowledge(description="Kubernetes")]

    education = [Education(degree="Bachelor of Commerce", institute="Instituto Santa Maria del Rosario",
                           finish_year=date(2008, 12, 1)),
                 Education(degree="Electronic Engineer", institute="Universidad Tecnologica Nacional",
                           finish_year=date(2016, 11, 1))]

    trailback_description = "Worked as a developer and system support in a geo-localization service, developing " \
                            "a base application for customers, a desktop application for internal use" \
                            "and several automatic processes that contribute to the service provided. " \
                            "Mainly working as a backend developer and maintaining web and database servers.<br>" \
                            "Work with: <br>" \
                            "<ul style='columns: 3;'>" \
                            "<li> PHP 5.6 <li>Phalcon Framework <li>Zend Framework <li>PostgreSql 9.6"\
                            "<li>.Net 4.7 (C#) <li>Nginx <li>Apache Http Server <li>Centos " \
                            "<li>Windows Form <li>Angular 5"\
                            "</ul>"

    endava_description = "Worked as a developer for abroad clients.<br>" \
                         "<ul>" \
                         "<li>Development of a micro-service application for use as a base in projects. Using multiple " \
                         "technologies this application was made to be use for improve development of any project, by "\
                         "solving some base problems in software development." \
                         "<ul style='columns: 3;'><li>Python 3.6 <li>Flask <li>.Net Core 2.2 <li>RabbitMq <li>CouchDB" \
                         "<li>Docker </ul>"\
                         "<li>Development of a desktop application for creating reports from measurements made by a robot." \
                         "<ul><li>.Net 4.7 <li>SqlServer <li>WPF </ul>" \
                         "</ul>"

    meli_description = "Currently working with the company's operations teams developing differents projects for providing better fintech services<br>"\
                       "<ul>"\
                       "<li>Golang <li>MySql <li>Microservices Architecture" 

    experience = [Experience(job="Developer-System support", job_from=date(2016, 12, 19), job_to=date(2019, 5, 17),
                             company='Securitas Trailback', description=trailback_description),
                  Experience(job="Developer", job_from=date(2019, 5, 20), job_to=date(2020, 9, 21),
                             company='Endava', description=endava_description),
                  Experience(job="Developer", job_from=date(2020, 9, 21), job_to=None,
                             company='MercadoLibre', description=meli_description)]

    profile_description = "Result oriented and fast learner developer used to work with small and large teams and different languages and technologies. Easy going, responsable and positive feedback receiver, trying to improve professionally with each opportunity."

    profile = Profile(name="Jose Miguel Solaro",
                      job="Developer", phone='+54 343 464391',
                      email='josesolaro@gmail.com', linkedin='linkedin/jose-solaro',
                      github="https://github.com/josesolaro",
                      location='Pna, Entre Rios, Argentina',
                      profile_description=profile_description,
                      education=education,
                      experience=experience,
                      knowledge=knowledge)

    db.session.add(profile)
    db.session.commit()


def load_seed():
    if Profile().query.count() is 0:
        load_data()
