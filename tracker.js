var re = /"name":"(.*?)"/; 
var str = document.getElementById('all-users-data-island').innerText;
var m;
 
if ((m = re.exec(str)) !== null) {
    if (m.index === re.lastIndex) {
        re.lastIndex++;
    }
//console.log(m[1])
var currentUser = m[1];
}

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-263241-17', 'auto');
  ga('send', 'pageview');
  ga('set', 'userId', currentUser); // Set the user ID using signed-in user_id.