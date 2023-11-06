class User:
    def __init__(self, id, email, course):
        self.id = id
        self.email = email
        self.course = course

    def to_dict(self):
        return {
            "id": self.id,
            "email": self.email,
            "course": self.course
        }