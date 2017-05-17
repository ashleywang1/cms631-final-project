from json import load
from glob import glob

events = []
for file in glob("*.json"):
    events.extend(load(open(file, "rt", encoding="utf8")))
print(len(events), "events")

counter = {}
for event in events:
    href = event["context"]["location"]["href"]
    if "?" in href:
        href = href[href.index("?"):]
        if href not in counter:
            counter[href] = set()
        if "ip" in event["context"]["ip_info"]:
            counter[href].add(event["context"]["ip_info"]["ip"])
print({k: len(v) for k, v in counter.items()})
