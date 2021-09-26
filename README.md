
# AASHROY - A SOLUTION TO TRACK AND HELP HOMELESS PEOPLE




## PROJECT DESCRIPTION :
### APPROACH :

Slums are generally characterized by extremely high population densities, irregular and almost organic arrangement of small buildings  as well as poor living conditions.
Slums are mostly the area where homeless people normally lives.
We first identified the areas where slums are extended to large area eg Dharavi is the largest slum. Then we  collected all the location via survey or inputs provided by users of probable slum areas where mostly homeless .We marked the locations in the maps by which which can track . 
Using that data and taking Satellite imagery (Sentinel) use we train that location data and predicted the other probable location.

We then validate the probable location got via inputs of users and surveys with the ML classified map and by this way we tracked the location of homeless people.

We also added the additional features like taking the input data location from users which are being stored in database ,allows users to contact NGO’s nearby it ,allows user to donate ,report suspicious information like kidnapping,rape cases or any other related issues .We even added a feature to conduct and attend events like free health checkup over that area,free treatments,free foods ,educations and many other basic necessities via our web -portal


## FILE  DESCRIPTION :

[Mumbai_details.html] (https://github.com/Spritan/AASHROY-Turing_Crypt/blob/main/Mumbai_details.html): It shows the details of the slums or homeless people using various maps including Google map, Satellite map and Machine Learning classified map.
 
[Support-us.html](https://github.com/Spritan/AASHROY-Turing_Crypt/blob/main/Support-us.html) :It’s a page that allows the user to donate a sum for homeless people by using a QR code.
 
[contactauthorities.html](https://github.com/Spritan/AASHROY-Turing_Crypt/blob/main/contactauthorities.html) :It allows the user to contact the managing Authorities.
 
[contactNGO.html](https://github.com/Spritan/AASHROY-Turing_Crypt/blob/main/contactNGO.html):It allows the user to contact the near by NGO’s of the particular location.
 
[index.html] (https://github.com/Spritan/AASHROY-Turing_Crypt/blob/main/index.html) :Home page.
 
[contribute.html](https://github.com/Spritan/AASHROY-Turing_Crypt/blob/main/contribute.html) : It allows the user to contribute the location of homeless people that would be stored in a database.
 
[file_report.html](https://github.com/Spritan/AASHROY-Turing_Crypt/blob/main/file_report.html) : It allows the user to contribute any deformities in the location of homeless people that are shown in the map . It also allows the user to file any deformities like kidnapping ,smuggling ,rape cases for that location . 
 
[index-logout.html](https://github.com/Spritan/AASHROY-Turing_Crypt/blob/main/index-logout.html) : It allows the user to end the season on the website.
 
[Login.css](https://github.com/Spritan/AASHROY-Turing_Crypt/blob/main/login.css): Stylesheet for login page.
 
[login.html](https://github.com/Spritan/AASHROY-Turing_Crypt/blob/main/login.html) : Login page
 
[mission.html](https://github.com/Spritan/AASHROY-Turing_Crypt/blob/main/mission.html) : Our mission through the project.
 
[signup2.css](https://github.com/Spritan/AASHROY-Turing_Crypt/blob/main/signup2.css) : Stylesheet for signup page.
 
[signup2.html](https://github.com/Spritan/AASHROY-Turing_Crypt/blob/main/signup2.html) : signup page.
 
[package.json](https://github.com/Spritan/AASHROY-Turing_Crypt/blob/main/package.json) :Stores important metadata about the project.
 
[feature_collection.js](https://github.com/Spritan/AASHROY-Turing_Crypt/blob/main/feature_collection.js) :Data set for ml classified map i.e to be imported in google earth engine
 
[ml_map_gee.js](https://github.com/Spritan/AASHROY-Turing_Crypt/blob/main/ml_map_gee.js) : machine learning code i.e used in google earth engine editor to predict the homeless people expected area

[github_repo_turing_crypt](https://github.com/Spritan/AASHROY-Turing_Crypt/blob/main/github_repo_turing_crypt.txt) : github repo link







# SETTING UP THE PROJECT
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g


  
## Authors


- [@KUNJAL SARMA](https://github.com/KunjalSarma)
- [@SAMARJIT SHARMA](https://github.com/UntrainedAnimal)
- [@PROYAS PABAN SARMA BORAH](https://github.com/Spritan)
- [@BHUPALI SARMA](https://github.com/bhupalisarma)

  
## Contributing

Contributions are always welcome!



  
## Screenshots

![A](https://user-images.githubusercontent.com/62415937/134726967-98215bcf-9f78-43d1-9bcd-6de2b49fbe8f.PNG)

![B](https://user-images.githubusercontent.com/62415937/134726889-71a8cc04-94f9-4df9-9a82-485b89359884.PNG)

![C](https://user-images.githubusercontent.com/62415937/134726980-f0b85a6e-79ab-4513-b326-2f5b7b2da02f.PNG)

![D](https://user-images.githubusercontent.com/62415937/134726986-f489bacd-ec90-4833-80ee-3efcb65b02ae.PNG)

![E](https://user-images.githubusercontent.com/62415937/134727004-5f3f404a-c497-44e6-a1c1-7a5e20d321da.PNG)

![F](https://user-images.githubusercontent.com/62415937/134727083-230a222a-acc2-4d1d-9787-e0d9f7585fe4.PNG)

![G](https://user-images.githubusercontent.com/62415937/134726912-fc419e93-f964-40f3-8cc6-05bb1b5ac47e.PNG)

## Tech Stack


**Client:** HTML,CSS,JAVASCRIPT
 
**Server:** NodeJS,MONGOdb

- MACHINE LEARNING 

- GOOGLE EARTH ENGINE
 

  
