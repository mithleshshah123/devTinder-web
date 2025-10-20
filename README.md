# DevLink

- Created vite+ react application
- remove uneccesary code and create hello world app
- Installed tailwind css
- Install daisy UI
- Add navbar component to App.jsx
- Create a NavBar.jsx separate component file
- Install react rounetr dom
- Create BrowserRouter > Route > Route / Body > RouteChildren
- Create an Outlet in Your body component
- Create a footer
- Create a login page


    # Deployment

    - Signup on AWS
    - Launch new instance
    - chmod 400 <secret>.pem
    - ss key......<>
    - install node version on cmd
    - Git clone
    - Frontend
       - npm install --> installs the dependencies
       - npm run build
       - sudo apt update
       - sudo apt install nginx
       - sudo systemctl start nginx
       - sudo systemctl enable nginx
       - Copy code from dist(build files) to /var/www/html/
       - sudo scp -r dist/* /var/www/html/
       - Enable port :80 on your instance
       
    - Backend
       - allowed ec2 instance public IP on mongodb server
       - installed npm install pm2 -g
       - pm2 start npm -- start
       - pm2 logs
       - pm2 list , pm2 flush <name>, pm2 stop <name>, pm2 delete <name>
       - config nginx - /etc/nginx/sites-avilable/default
       - restart nginx -  sudo systemctl restart nginx
<<<<<<< HEAD
       - Modify the BASEURL in frotned project to "/api"
=======
       - Modify the BASEURL in frotned project to /api
>>>>>>> 650c8f08db825f1dff04360771bb27025ff1af08

# Nginx config

       Frontend = http://43.204.96.43/
       Backend = http://43.204.96.43:3000/

       Domain name = devlink.com => 43.204.96.43

       Frontend = devlink.com
       Backend = devlink.com:3000

       config nginx :

        server_name 16.170.218.203;

        location /api/ {
                proxy_pass http://localhost:3000/;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }