# Portfolio

View My [Portfolio](http://www.schwiftycold.gq)

## Services Used
Website Language - HTML, CSS, JS (native and [jquery](https://jquery.com/))<br />
Server - [NodeJs](https://nodejs.org/en/) <br />
Hosting platform - [heroku](https://www.heroku.com/) <br/>
Database - [firebase](https://firebase.google.com/)<br/>
Domain - [freenom](https://freenom.com)<br/>
Custom Mail Service - [Migadu](https://www.migadu.com)<br/>

* Most of the website is static, you'll need the server only for the contact form.

## Implementation Guide
1. Fork from the 'Template' branch;
1. The client-side code can be found in public direcotry.
1. Server side code is in the root directory.
1. Modify './sendMail.js' for receiving messages to your mail.
  1. In the mail list, enter the email list you want to receive the contact information.
  1. Generate an app password from [here](https://myaccount.google.com/apppasswords?utm_source=google-account&utm_medium=web&rapt=AEjHL4OawOnohYIto6ZboPqbHjyxcVRQBHRNipNKdKrgHs8Uej0k-mJlBzizdXSrB3uvzjnHzWwoFHmfEaTw9-LE_7Uaf7jR6A).
  1. In the transporter constructor (line 10 to 20) replace the email id by your email and password by the password you created above.
  1. Change the html in mailOption (line 30) as per your liking.
  
1. Change the html codes from './public' as per your liking.
1. In './public/js/Projects.js' replace url (line 3) with the firebase cloud url of your database. Get the request in JSON format from your database. For more information on how I receive database for my portfolio [view this repository](https://github.com/UnresolvedCold/Portfolio-DatabaseRetrival.git)

* For any queries, you can open a comment here or send me a personal email through my [Portfolio](http://www.schwiftycold.gq).


  
