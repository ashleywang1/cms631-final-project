from json import load
from glob import glob

fout = open("README.md", "wt")
def report(text):
    print(text)
    fout.write(text + "\n")


events = []
for file in glob("*.json"):
    events.extend(load(open(file, "rt", encoding="utf8")))
report(str(len(events)) + " tracked events")
report("")

counter = {}
for event in events:
    href = event["context"]["location"]["href"]
    if "?" in href:
        href = href[href.index("?"):]
        if href not in counter:
            counter[href] = set()
        if "ip" in event["context"]["ip_info"]:
            counter[href].add(event["context"]["ip_info"]["ip"])
report("traffic sources:")
for k, v in counter.items():
    report(" - " + k + ": " + str(len(v)))
report("")

nb_petition = 0
for event in events:
    if event["data"]["event"] == "petition":
        nb_petition += 1
report(str(nb_petition) + " people clicked on the petition")
report("")
