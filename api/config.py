from os import urandom, environ

class Config:
    SECRET_KEY = urandom(32)

    def __init__(self):
        if environ.get('DEBUG', None):
            self.DEBUG = True
