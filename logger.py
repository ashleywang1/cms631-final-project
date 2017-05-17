import json
import uuid
from bottle import route, run, template, request, post, response

@post('/log')
def log():
    with open("logs/" + str(uuid.uuid1()) + ".json", "wt") as fout:
        json.dump(json.load(request.body), fout)
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'PUT, GET, POST, DELETE, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'
    return "done."

run(host='0.0.0.0', port=3000)
