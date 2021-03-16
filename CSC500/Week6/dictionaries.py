contacts = {
    'Ayesha': '975-328-0147',
    'Emily': '814-387-0645',
    'Nozomi': '429-723-1039',
    'Oliver': '240-138-3897',
    'Li': '102-477-2543',
    'Ahmed': '391-242-7953',
    'Gabriel': '638-117-5674',
    'Lucia': '527-833-6518'
}

contacts['Elena'] = '280-743-1847' # insert new pair at end
contacts.keys()

new_contacts = {'Ray': '487-310-8463', 'Daniel': '612-436-0813'} # insert new pairs at end
contacts.update(new_contacts)
contacts.keys()

contacts['Li'] = '538-907-8234' # update key value
print(contacts['Li'])

contacts.update(Gabriel='329-567-7843', Ahmed='198-327-8436') # update multiple existing pairs
print(contacts['Gabriel'])
print(contacts['Ahmed'])

del contacts['Oliver'] # remove pair by key
'Oliver' in contacts

contacts.pop('Emily') # remove pair by key and return value

contacts.popitem() # remove and return last added pair