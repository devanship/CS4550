server {
	listen 80;
	listen [::]:80;

	root  /www/hw01.dpatelcs4550.com;

	index hw01.html;

	server_name hw01.dpatelcs4550.com;

	location / {
		try_files $uri $uri/ =404;
	}
}


