"""
The first parameter defaults no_defects to True. 
This allows the first if statement to log the most common condition (similar to your algorithm) given a True value. 
If there are defects, we’d assign False to no_defects. 

The second parameter is only provided if there are defects. 
"""
import logging

log = logging.getLogger("defect-logger")

def log_defects(no_defects = True, defects = []):
	if no_defects:
		log.info('No defects.')
	else:
		# log each defect in the list of defects supplied
        log.info(defect) for defect in defects


log_defects() # if there are no defects

log_defects(False, [‘Scratched Paint’, ‘Faded Paint’, ‘Rough Finish’]) # if there are defects