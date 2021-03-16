"""
Title: Course Information
Description: The program lets the user enter a course number and it displays the course's room number, instructor, and meeting time.

Term: Winter D
Course: CSC 500
Instructor: Amr Elchouemi

Author: Lauren Alexandra
Email: lauren.alexandra@csuglobal.edu
"""

import sys

def main():

    f = open('CourseInformation.txt', 'w+')

    COURSE_BY_ROOM = {
        'CSC101': 3004,
        'CSC102': 4501,
        'CSC103': 6755,
        'NET110': 1244,
        'COM241': 1411
    }

    COURSE_BY_INSTRUCTOR = {
        'CSC101': 'Haynes',
        'CSC102': 'Alvarado',
        'CSC103': 'Rich',
        'NET110': 'Burke',
        'COM241': 'Lee'
    }

    COURSE_BY_TIME = {
        'CSC101': '8:00 a.m.',
        'CSC102': '9:00 a.m.',
        'CSC103': '10:00 a.m.',
        'NET110': '11:00 a.m.',
        'COM241': '1:00 p.m.'
    }

    def get_course():
        need_course = True

        while need_course:
            need_course = False
            course_no = input('Enter a course number, e.g. CSC101: ')
            if course_no not in COURSE_BY_ROOM.keys():
                print('Course number not available. Please try again.')
                need_course = True

        return course_no

    course = get_course()
    f.write(f'Room Number: {COURSE_BY_ROOM[course]}')
    f.write(f'Instructor: {COURSE_BY_INSTRUCTOR[course]}')
    f.write(f'Meeting Time: {COURSE_BY_TIME[course]}')
    f.close()

    sys.exit()

if __name__ == "__main__":
    main()