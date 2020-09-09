#!/usr/bin/env python3

import os
import requests
from datetime import datetime
import json

def add(env):
    url = env['domain'] + '/add'
    while True:
        title = input("title: ")
        filepath = input("filepath: ")
        tags = input("tags (comma seperated): ").split(",")
        tags = json.dumps([tag.strip() for tag in tags])
        cont = input("Is this info correct? (y/n) ")
        if (cont == 'y'):
            break
    headers = {'Authorization': env['auth'], 'Content-Type': 'application/json'}
    payload = {'title': title, 'filepath': filepath, 'date': str(datetime.now()), 'tags': tags}
    res = requests.post(url, headers=headers, json=payload)
    print(res.text)

def view(env):
    while True:
        try:
            skip = int(input("skip value: "))
            limit = int(input("limit value: "))
            break
        except:
            pass
    headers = {'Authorization': env['auth'], 'Content-Type': 'application/json'}
    payload = {'skip': skip, 'limit': limit}
    res = requests.post(env['domain'], headers=headers, json=payload)
    posts = res.json()
    while True:
        cont = input("Verbose? (y/n) ")
        if (cont == 'y'):
            v = True
            break
        if (cont == 'n'):
            v = False
            break
    for i, post in enumerate(posts):
        print(f"[{str(i)}] ", end='')
        display_post(post, v)

    if input("Update Post? (y/n) ") == 'y':
        ind = int(input("Enter post number: "))
        update_post(posts[ind]['_id'], env)
        return

    if input("Delete Post? (y/n) ") == 'y':
        ind = int(input("Enter post number: "))
        delete_post(posts[ind]['_id'], env)

def search(env):
    url = env['domain'] + '/search'
    while True:
        try:
            search = input("search: ")
            skip = int(input("skip value: "))
            limit = int(input("limit value: "))
            break
        except:
            pass
    headers = {'Authorization': env['auth'], 'Content-Type': 'application/json'}
    payload = {'skip': skip, 'limit': limit, 'search': search, 'order': 'new'}
    res = requests.post(url, headers=headers, json=payload)
    posts = res.json()
    while True:
        cont = input("Verbose? (y/n) ")
        if (cont == 'y'):
            v = True
            break
        if (cont == 'n'):
            v = False
            break
    for i, post in enumerate(posts):
        print(f"[{str(i)}] ", end='')
        display_post(post, v)

    if input("Update Post? (y/n) ") == 'y':
        ind = int(input("Enter post number: "))
        update_post(posts[ind]['_id'], env)
        return

    if input("Delete Post? (y/n) ") == 'y':
        ind = int(input("Enter post number: "))
        delete_post(posts[ind]['_id'], env)

def display_post(post, v):
        if v == False:
            print(f"{post['title']}")
        else:
            msg = f"{post['title']}"
            msg += f"\n\t{post['filepath']}"
            msg += f"\n\t{post['date']}"
            if (len(post['tags']) > 0):
                tags = json.loads(post['tags'][0])
                if (tags != ['']):
                    msg += f"\n\ttags:"
                    for tag in tags:
                        msg += f"\n\t\t{tag}"
            print(msg, "\n")

def update(env):
    post_id = input("post id: ")
    update_post(post_id, env)

def update_post(post_id, env):
    post = get_post(post_id, env)
    if post == None:
        print("Post not found")
        return
    title = post['title']
    filepath = post['filepath']
    tags = post['tags']

    print("\nPOST INFO")
    display_post(post, v=True)

    print("What would you like to edit?")
    while True:
        while True:
            print("\n1. Title\n2. File Path\n3. Tags\n\nenter '0' to exit")
            opt = input("")
            if opt == '1':
                title = input("Title: ")
            elif opt == '2':
                filepath = input("File Path: ")
            elif opt == '3':
                tags = input("tags (comma seperated): ").split(",")
                tags = json.dumps([tag.strip() for tag in tags])
            elif opt == '0':
                break
            else:
                continue
        print(f"\nCurrent Info\n\tTitle: {title}\n\tFile Path: {filepath}")
        if len(tags) > 0:
            tags_list = json.loads(tags[0])
            if (tags_list != ['']):
                print("\tTags:")
                for tag in tags_list:
                    print(f"\t\t{tag}")
        if input("Is this info correct? (y/n) ") == 'y':
            break

    url = env['domain'] + '/update/' + post_id
    headers = {'Authorization': env['auth'], 'Content-Type': 'application/json'}
    payload = {'title': title, 'filepath': filepath, 'tags': tags}
    res = requests.post(url, headers=headers, json=payload)
    if res.status_code == 200:
        print("Post successfully updated")

def get_post(post_id, env):
    url = env['domain'] + '/' + post_id
    res = requests.get(url)
    if res.status_code != 200:
        return None
    return res.json()

def delete(env):
    post_id = input("post id: ")
    delete_post(post_id, env)

def delete_post(post_id, env):
    post = get_post(post_id, env)
    if post == None:
        print("Post not found")
        return
    print("\nPOST INFO")
    display_post(post, v=True)

    while True:
        ans = input("Are you sure you want to delete? (y/n) ")
        if ans == 'n':
            print("\nDelete aborted."
            return
        elif ans == 'y':
            break

    url = env['domain'] + '/' + post_id
    headers = {'Authorization': env['auth']}
    res = requests.delete(url, headers=headers)
    if res.status_code == 200:
        print(res.json())
    else:
        print(f"error deleting post: {res.json()}")

def process(env, opt):
    if opt == 1:
        add(env)
    elif opt == 2:
        view(env)
    elif opt == 3:
        search(env)
    elif opt == 4:
        update(env)
    elif opt == 5:
        delete(env)


def menu():
    menu = """
    1. Add Posts
    2. View Posts
    3. Search Posts
    4. Update Post
    5. Delete Post
    """
    print(menu)
    opt = input("> ")
    while True:
        try:
            opt = int(opt)
            if opt > 0 and opt < 6:
                break
        except:
            pass
        print(menu)
        opt = input("> ")
    return opt

def main():
    try:
        auth = os.environ['AUTH']
        domain = 'https://api.' + os.environ['DOMAIN'] + '/posts'
        env = {'auth': auth, 'domain': domain}
    except KeyError as e:
        print(f"error {e} env var not set")
        return

    print(env['domain'])

    opt = menu()
    process(env, opt)

if __name__ == '__main__':
    main()
