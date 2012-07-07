CV in XML/XSLT
==============

![A preview of what the project looks like](https://github.com/colinccook/cv/raw/master/examples/example-image.png)

In Summary
----------

This project's purpose is to make my CV writing, customising and publishing (to printer/PDF) FAR easier and open.

Essentially, you store all your CV and previous history data in XML. This is transformed to an elegant but plain HTML page using the included XSLT. Using Google Chrome, you can then click on any history you wish to remove (showing only what is important to the job you're applying for). 

As the web page is optimised for printing, you can use Google Chrome's fantastic 'Print Preview' feature to confirm its appearance before printing. The default template page breaks to a nice 2 page CV, although this is editable of course.

DISCLAIMER: THIS TEMPLATE IS JUST THAT, A TEMPLATE. THIS IS NOT A DISCUSSION ON HOW A CV SHOULD BE FORMATTED. THIS PROJECT IS AN EXAMPLE OF WHAT CAN BE DONE AND WILL HOPEFULLY SAVE YOU THE FEW HOURS I USED TO GET IT GOING.

[You can download the included PDF separately to preview what the CV looks like here.](https://github.com/colinccook/cv/raw/master/examples/example-pdf.pdf)

Why the reliance on Google Chrome?
----------------------------------

I wanted to make the process of editing and printing as simple as possible. Whilst I could have written another XSLT for PDF specific output, I just wanted the one for all.

Moreover, browser support for printing varies and is a horrific pain. I've therefore focused exclusively on Google Chrome as its print preview facilities are excellent, and its availability on all major platforms.

All other browsers are untested, but as said, I've not intended this project to be deployed to a public web server; merely as a go-between between the data in the XML and outputting to a printer/PDF.

Usage
-----

Once you've finished editing the cv.xml file to your specification (and the CSS of course), you open cv.xml using Google Chrome. 

You can then click education/employment entries to remove them.
 + You'll want to do this if your education/employment overspills to page 2, this is intended to be a 2 age CV.
 + You might also want to remove unneeded entries in your education/employment that aren't relevant to your current job application.

Finally, you can use Google Chrome's excellent printing features to preview/print the document to printer/PDF.


Opening local XML/XSLT files in Google Chrome (on Windows-based computers)
--------------------------------------------------------------------------

As a security precaution, Google Chrome doesn't let you link to local XSLT files when opening a local document. To get around this, you can add the following flag like so:

C:\Users\Username\AppData\Local\Google\Chrome\Application\chrome.exe --allow-file-access-from-files

In fact, during editing, I created a shortcut that linked to Chrome, used that switch AND linked to my specific cv.XML file. Just be careful that no other instance of Chrome are running!

Merge XML/XSLT/CSS
------------------

If you feel confident the CSS of your CV is cross browser compatible, it is possible to merge your XML, XSLT and CSS files together to have one super .XML file that does everything for distribution. This has to be done manually.

The file 'examples/combined.xml' shows XML, XSLT and CSS merged (edit features are absent only because cvedit.js and cvedit.css files are not in the same directory). 

It will not be maintained so will not change, but only serves as an example of what is possible.

Please also note I've just tested it in Internet Explorer 9, to no avail.

About Project
-------------

I've always liked to put a bit of extra effort in the appearance of my CV. I've always placed pain-staking detail in Microsoft Publisher documents, which has meant modifying it takes hours. 

I've become fed up of doing this, and thought long and hard about the ideal way of managing your CV.

I came to the conclusion that the data of a CV should include absolutely everything you've ever done, and then pick out the bits you don't need for certain job applications before printing the PDF.

Also, various companies want a plain-text OR rich-text version of your CV. You can copy the CV from the browser to your favourite RTF editor and the flat structure extracts perfectly. This wasn't previously possible with Publisher formats since the alignments were off.

I've also included a small fixed print button toward the right of the page. This is purely to save you from going to File > Print every time you wanted to preview the document. In practice, Chrome stops you from viewing the Print Dialog box too many times at once so this feature is pretty useless, though I thought I'd leave it in as a "control panel" could be built upon the existing code.

Wishlist
--------

I would be very excited to receive any pull requests, but there are certain features that I would like to see (and might work on in the future):
 + The XSLT template functions could be structured better
 + Parameterise values. XSLT supports 'constants' as opposed to variables, but things like margin-padding, colours etc, could be put in there.
 + The header, whilst looks interesting on the unprinted document, looks very basic on the printed document as browsers don't show background colours when printing. Hacks are available to get around this.
 + Proper XML dates as opposed to hard coded strings?
 + The 'click to delete' feature is a bit buggy, doesn't always delete when you click in the 'wrong' part of an element.
 + Ensure everything is cross compatible

Donald F Duck?
--------------

I should have used Lorem Ipsum.