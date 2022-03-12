import os

GITDIR = os.path.expanduser("~/GitProjects")

os.chdir(GITDIR)

folders = [x for x in os.listdir(".") if not os.path.isfile(x)]


for project in folders:
    print(project)
    os.chdir(project)
    print("Changed into ", project)
    os.system("git pull")
    print("Returning to GITDIR")
    os.chdir(GITDIR)
