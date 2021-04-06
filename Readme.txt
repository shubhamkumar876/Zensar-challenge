Zensar (frontend challenge) 27/03/2021
HackerEarth

Code----
(Developed on Frontend - Angular-11 , typescript,Backend - Spring boot(java,maven),MongoDB, Maven, IDE - VS-code)

###########################################################################################


frontend angular code is in --   (Zensar-challenge\Frontend\user)
Backend springboot code is in -- (Zensar-challenge\zensar) 
		
##########################################################################################


How to run(Instructions)

Pre-requisites - 

i>  Java 11 (must be installed and configured on the system)
ii> MongoDB (must be running on the system at port "localhost:27017"
iii>npm version >= 7 & node >= 15
iv> Angular >= 11 & angular CLI (if needed) >= 11.1

v> create a database in mongoDB - Database name should be "zensar" in the localhost:27017 mongoDB and collection = "User"
	(to change database uri goto - "C:\Users\Shubham\Desktop\Zensar-challenge\zensar\src\main\resources\application.properties" 
		and change the uri value)


--------------
1> Extract the "Zensar-challenge.zip" 


--- Import "zensar" folder as maven project in any IDE(intellij/eclipse etc) update maven or
	download the missing dependencies by updating "pom.xml" and then run "zensarApplication"

	OR 
	follow the below Instructions---	

2> open command prompt, get inside "zensar" folder then exceute "mvnw package" / "mvn package" 

	
3> After the build is success ("Internet connection required" - it will take some time download
	the dependencies ) get inside of "target" directory.

4> list all the files inside "target" directory and execute
	"java -jar zensar-0.0.1-SNAPSHOT.jar"  

	wait for some time once the application is started completely then follow the below steps
		for the frontend(angular app to run)

5> open this in IDE(Vs-code)/ or get into "Frontend/user" folder in command-prompt/terminal.

6> execute the below commands:-
	1: npm install/ npm i
	2: ng serve   or ng serve --open

7> After the application started browse this url in any browser:
	"http://localhost:4200"

the app will load.


------------------------------
Functionality-(how to use the APP)

1> the first page is user list page which has data from the 
	api -'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json'

2> search bar will allow to search based on the user's name.

3> add to myDB will allow to add into the loaclhost MongoDB database "zensar"

4> myDB button will fetch users from the local mongoDB database("zensar")

5> New User button will allow the user to fill a form to add a new user inside the 
	localhost mongoDB database ("zensar").
	Image Url field will take Image url to store a picture.

6> click on the user name or picture to go the user-detail page.

	and the buttons performs the task as their names respectively. 



----------------------------------------------------------------

