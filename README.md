# ig-bot
An Instagram bot that searches through a particular account's tagged page, looking for specific key words each photos descriptions, and saves them to the users 'Saved' page.

# About

This harmless Instagram bot saves posts of interests that have key-words in a photos description.

# Background

I like to collect some K-Pop photocards, but there are so many posts out there that it gets hard to look through every single one for whatever I'm interested in. I wanted to automate this task and so I programmed an Instagram Bot using Puppeteer to look through posts for me and save the ones I would be interested in.

# Steps It Does 

1. Sign into account
2. Wait for authentication code input from user
3. Enter URL for specific IG page (I have mine going to a Canadian K-Pop Collector page)
4. Go to tagged posts, click on first picture, and look for keywords in post's description (mind is looking for specific artists and if they are on sale)
5. Save post if keywords are found
6. Move onto the next post and repeat X amount of times (here I put 1000 just because of the large amount of tags this account has)
7. Optional: Cron allows for bot to repeat the save-and-next function to repeat every hour.

## Customizing For Yourself

The account which their tags are being searched by can be changed to anything, as well as the words of interest. 
Also, the customDelay() function allows time for the webpage to load in order to look for specific XPath expressions. Change the argument to what works best for your system. 

# How To Install

1. Clone the repo
```
git clone https://github.com/tinatrxn/ig-bot.git
```
2. Install NPM packages
```
npm install
```

# Personalization 

Please use it as you please, but be cautious of Instagram's terms of services (no spamming of likes, comments, or follows/unfollows). Enjoy!
