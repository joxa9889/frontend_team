We are doing Frontend part here

Before doing CSS part, pay attention to CLASS of the object, because all the styles will be in a SINGLE file! 

I recommend to write PAGE_TITLE to the main wrapper in the page, so that other objects will be CHILDREN of it
(ANY STYLE YOU USE IN THE PAGE SHOULD BE INSIDE THE MAIN WRAPPER)

ADD " -page " TO THE END OF MAIN WRAPPER CLASS

.registration-page

.gallery-page


EXAMPLE: 

.registration-page > ul > li {....}

.registration-page form > a {....}

and so on....
