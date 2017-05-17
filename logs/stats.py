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

nb_people = 0
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
    nb_people += len(v)
report("")

petition_ip = set()
for event in events:
    if event["data"]["event"] == "petition":
        if "ip" in event["context"]["ip_info"]:
            petition_ip.add(event["context"]["ip_info"]["ip"])
report(str(len(petition_ip)) + " of " + str(nb_people) + " people clicked on the petition")
report("")

postsurvey_ip = {}
for event in events:
    if event["data"]["event"] == "postsurvey":
        if "ip" in event["context"]["ip_info"]:
            ip = event["context"]["ip_info"]["ip"]
            if ip not in postsurvey_ip:
                postsurvey_ip[ip] = []
            del event["data"]["event"]
            postsurvey_ip[ip].append(event["data"])
report(str(len(postsurvey_ip)) + " of " + str(nb_people) + " people completed the post-survey")
report("")

report("postsurvey results")
for user, values in postsurvey_ip.items():
    report(str(values))
report("")

"""
TODO:
??? users completed the post-survey. ??? of these individuals (??? %) said our page made them “much more concerned” and ??? (??? %) said that 
our page made them “slightly more concerned.” Moreover, ??? (??? %) said that they are “very likely” to change the way they commute after going 
through our web page, compared to ??? (??? %) who said that they are “slightly likely” and ??? (???%) who said they are “not at all likely.” 
Finally, ??? of those who filled out the post-survey (??? %) said they believe that many people greening their commutes would “make a big 
difference,” compared to ??? (??? %) who said it would “make some difference” and ??? (???%) who said it “wouldn’t change anything.” 
"""