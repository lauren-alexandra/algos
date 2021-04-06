"""
Builder Pattern

Pattern popular for its convenience.

The Builder pattern is now deeply ingrained in Python culture 
thanks in part to the pressure that library authors feel to make 
the sample code on their front page as impressively brief as possible.

Like Abstract Factory pattern, both patterns are supposed to conclude 
with the return of the constructed object to the caller.

The full-fledged Builder Pattern as imagined by the Gang of Four 
arranged for a single series of method calls to power the creation 
of several different object hierarchies. full-tilt not common see below.

You might also have seen a more recent pattern calling itself the 
“Builder” which pairs each immutable class in a program with a more 
convenient builder class. 
That pattern, happily, is never necessary in Python since the language 
itself provides built-in syntactic support for optional constructor 
arguments.
"""

"""
The pattern's most popular use in Python programs: for convenience

Why? 
It lets client code stay simple and sleek even while directing the 
creation of an elaborate hierarchy of objects.

What is the pattern?
When a library lets you make a simple series of function and method 
calls that, behind the scenes, the library reacts to by building a 
whole hierarchy of objects. 
Thanks to the Builder pattern, the caller is exempted from needing to 
manually instantiate each object or understand how the objects fit 
together once constructed.
"""

# example of Builder pattern ingrained in matplotlib library

# A classic example in Python is the matplotlib library’s pyplot 
# interface. It lets the caller build a simple plot with just a 
# single line of code, and save the diagram to disk with just one 
# line more

import matplotlib.pyplot as plt
plt.plot(x, np.sin(x))
# asking for a reference to the object that plot() call constructed
sine_figure = plt.gcf()  # “gcf” = “get current figure”
sine_figure.savefig('sine.png')

# What the pyplot interface has hidden from the caller is that more 
# than a dozen objects had to be created for matplotlib to represent 
# even this simple plot. Here, for example, are eight of the objects 
# that were generated behind the scenes by the plot() call above

plt.gcf().subplots()
# <matplotlib.axes._subplots.AxesSubplot object at 0x7ff910917a20>

plt.gcf().subplots().bbox
# TransformedBbox(
#     Bbox(x0=0.125, y0=0.10999999999999999, x1=0.9, y1=0.88),
#     BboxTransformTo(
#         TransformedBbox(
#             Bbox(x0=0.0, y0=0.0, x1=6.4, y1=4.8),
#             Affine2D(
#                 [[100.   0.   0.]
#                  [  0. 100.   0.]
#                  [  0.   0.   1.]]))))

"""
For the Gang of Four, the Builder pattern is only operating at full 
tilt when a library offers -->several implementations of the same Builder<--,
each of which returns a different hierarchy of objects in response to 
the same series of client calls.

Why has the pattern not come into widespread use?

I think the answer is the supremacy of data, and of data structures, 
as the common currency that is usually passed between one phase of a 
Python program’s execution and the next.

Modern python libraries are overwhelmingly likely to have a single 
implementation of a given Builder, one that produces a single 
well-defined -->intermediate representation from the caller’s function 
and method invocations<--. That representation, whether publicly 
documented or private and internal to the library, can then be 
provided as the input to any number of downstream transformation or 
output routines — whose processing will now be simpler because they 
are free to roam across the intermediate data structure at their own 
pace and in whatever order they want.
"""