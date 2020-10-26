Steps to upload the project
From GitHub:
	1.- Go to the main page of the repository.
	2.- Select the repository escalonap37 / frontend-recruiting-hsa
	3.- Above the list of files, click on Code.
	4.- Clone the repository:
		4.1- To clone the repository using HTTPS, under "Clone with HTTPS", click. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click. To clone a repository using GitHub CLI, click Use GitHub CLI, then click.

	5.- From your computer, go to the folder or path where you want to clone the project
	6.- Open GitBash
	7.- Clone the repository escalonap37 / frontend-recruiting-hsa by running:
    		$ git clone git@github.com: escalonap37 / frontend-recruiting-hsa.git
	8.- Change to the frontend-recruiting-hsa folder:
		$ cd frontend-recruiting-hsa
	8.- Install the project dependencies:
		$ npm i
	9.- Upload the project:
		$ ng serve -o
	10.- In the browser path: http: //localhost:4200 you will see the raised project
	
	Functionalities
	Search for existing users on GitHub with access token.
	In the case of non-existent users, it was pending to finish handling the errors in the service that consumes the GitHub Api