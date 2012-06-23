CV in XML/XSLT
==============

In Summary
----------

This project allows you to store the data of your CV/Curriculum vitae/Resume in easily editable XML format. An attached XSLT document then transforms this into a simple, clean but generic 2 page CV. 

Please note that printing web pages is a pain, and I've therefore focused exclusively on Google Chrome. All other browsers are untested!

DISCLAIMER: THIS TEMPLATE IS JUST THAT, A TEMPLATE. THIS IS NOT A DISCUSSION ON HOW A CV SHOULD BE FORMATTED OR LAID OUT. THIS PROJECT IS AN EXAMPLE OF WHAT CAN BE DONE AND WILL HOPEFULLY SAVE YOU THE FEW HOURS I USED TO GET IT GOING.

Usage
-----

Once you've finished editing the cv.xml file to your specification (and the CSS of course), you open and print the document using Google Chrome, preferably to PDF. 

Before you do, you can click education/employment entries to remove them.
 + You'll want to do this if your education/employment overspills to page 2, this is intended to be a 2 age CV.
 + You might also want to remove unneeded entries in your education/employment that aren't relevant to your current job application.


Opening local XML/XSLT files in Google Chrome
---------------------------------------------

As a security precaution, Google Chrome doesn't let you link to local XSLT files when opening a local document. To get around this, you can add the following flag like so:

C:\Users\Username\AppData\Local\Google\Chrome\Application\chrome.exe --allow-file-access-from-files

Merge XML/XSLT/CSS
------------------

If you feel confident the CSS of your CV is cross browser compatible, it is possible to merge your XML, XSLT and CSS files together to have one super .XML file that does everything for distribution. This has to be done manually.

I believe this would get around the Google Chrome local linked XSLT file issue.

About Project
-------------

I've always liked to put a bit of extra effort in the appearance of my CV. I've always placed pain-staking detail in Microsoft Publisher documents, which has meant modifying it takes hours. 

I've become fed up of doing this, and thought long and hard about the ideal way of managing your CV.

I came to the conclusion that the data of a CV should include absoultely everything you've ever done, and then pick out the bits you don't need for certain job applications before printing the PDF.

Also, various companies want a plain-text OR rich-text version of your CV. You can copy the CV from the browser to your favourite RTF editor and the flat structure extracts perfectly. This wasn't previously possible with Publisher formats since the alignments were off.

I've also included a small fixed print button toward the right of the page. This is purely to save you from going to File > Print everytime you wanted to preview the document. In practice, Chrome stops you from viewing the Print Dialog box too many times at once so this feature is pretty useless, though I thought I'd leave it in as a "control panel" could be built upon the existing code.

Wishlist
--------

I would be very excited to receive any pull requests, but there are certain features that I would like to see (and might work on in the future):
 + The XSLT template functions could be structured better
 + Parameterise values. XSLT supports 'constants' as opposed to variables, but things like margin-padding, colours etc, could be put in there.
 + The header, whilst looks interesting on the unprinted document, looks very basic on the printed document as browsers don't show background colours when printing. Hacks are available to get around this.
 + Proper XML dates as opposed to hard coded strings?

Donald F Duck?
--------------

I should have used Lorem Ipsum.