# YT-URL-Extractor
A Tampermonkey (and other *monkey) script to extract YT ID(s) from most YT pages with a single click

## What is this thing?
I wanted an easy one click solution to grab every YouTube ID from a page, then give me a neat list without duplicates ready for use elsewhere. I also fancied brushing up on my Tampermonkey/Javascript skills so though I would give it a go. I set to work throwing a solution together and ended up with this, it's a fairly neat solution that adds a discrete 📋 button at the top of most pages, clicking it will either copy the current URL if you are watching a video or short, or on a playlist style page you'll get every a list of every URL on the page.

## Features
- Quick and easy to use
- Should work with most *monkey varients: Tested/Developed with Chrome Tampermonkey v4.18.1, Also tested on Firefox Greasemonkey 4.11

## Sounds great, how do I use it?
Copy/Paste the userscript into a new TamperMonkey script, save and go. Next time you vist a supported page you will see a small clipboard icon 📋 next to the mic icon at the top of the page.  

![Playlist page](https://user-images.githubusercontent.com/8470449/221897997-c751be58-659b-4584-b0ac-ddbc3275f6fb.jpg)
  
Give that a click and a banner will briefly flash to let you know it's done it job.  

![Banner flash](https://user-images.githubusercontent.com/8470449/221898882-82af3aa8-374a-4659-84c8-ca685e53af53.jpg)  

Paste your output wherever you need it, depending on the page there will be two outcomes:
- On a single video or short page you'll just the URL from the video you are watching in this style [https://youtu.be/8jMPgvaOXH8](https://youtu.be/8jMPgvaOXH8)
- On a playlist page or where multiple videos are diplayed you'll get a nice list like this:  
  
  https://youtu.be/UzE1njGyTBw  
  https://youtu.be/W48MqXVUYFI  
  https://youtu.be/a8_GYCiYmWI  
  https://youtu.be/hsyH84UP2Ns  
  https://youtu.be/Hmh6nGYKCEs  
  https://youtu.be/0IZP_oX_6Ic  
  https://youtu.be/8ZKzx1C4-DY  
  https://youtu.be/2g3m9p35cDo  
  https://youtu.be/KABSYzPqTTg  
  https://youtu.be/9ca2K5bJpvU  
  https://youtu.be/G0XntICXcyA  
  https://youtu.be/gpxUcIJ1tGs  
  https://youtu.be/Ei2cD61Je7A  
  https://youtu.be/SfpUM5Wrh2A  
  https://youtu.be/quI772XuCpo  
  https://youtu.be/YioAD0gQQSM  
  https://youtu.be/H2t7lknrK28  
  https://youtu.be/4RXdusySjsk  
  https://youtu.be/Z5ezsReZcxU  
 
## Limitations
If you are on a channels homepage and they have some sort of carousel/spinner thing, you'll only get the ID's for the items you can see, the others are not generated/rendered until you bring them into view. I decided to leave it there after coding it but it's not much use on that page.

## To-do
- [ ] Code optimisation: Code is fast enough but I'm sure there are a couple of things that could be better
- [ ] Add clipboard button to individual videos links, quickly grab individual URLs as well as whole page
- [ ] Add auto update

## Help fuel my caffine habbit
If you fancy buying me a :coffee: to say thanks, please visit my Ko-Fi page by hitting the button below.  

<p class="kofi" align="center">
  <a href="https://ko-fi.com/nebularnerd" title="Buy me a coffee on ko-fi"><img src="/pics/kofi_button_red.webp" width=45% /></a>
</p>

