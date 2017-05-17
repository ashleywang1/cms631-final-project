from json import load
from glob import glob

events = []
for file in glob("*.json"):
    events.extend(load(open(file, "rt")))
