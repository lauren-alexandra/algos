"""
virtualenv is a tool which allows you to make
isolated python environments.

e.g. if you need an app that uses python 2
but another app uses python 3.

to install
pip install virtualenv

commands:
# makes env in myproject folder
$ virtualenv myproject 

# activates the env
$ source myproject/bin/activate 

# if you want your env to access packages from your system
# (site-packages). else packages installed in env's site-packages.
$ virtualenv --system-site-packages mycoolproject

# turn off env
# note: running python after deactivating will use your
# system installation of Python again
$ deactivate
"""

"""
You can use smartcd which is a library for bash and zsh and allows you to alter your bash (or zsh) environment as you cd. It can be really helpful to activate and deactivate a virtualenv when you change directories.
https://github.com/cxreg/smartcd
"""