
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','1573345571007574');
window.rzCapi=function(nome,extra){try{var id='rz-'+Date.now()+'-'+Math.random().toString(36).slice(2,10);var fbclid=new URLSearchParams(location.search).get('fbclid')||'';if(window.fbq){fbq('track',nome,extra||{},{eventID:id});}var corpo=JSON.stringify({event_name:nome,event_id:id,url:location.href,fbclid:fbclid,custom_data:extra||{}});if(navigator.sendBeacon){navigator.sendBeacon('/capi.php',new Blob([corpo],{type:'application/json'}));}else{fetch('/capi.php',{method:'POST',headers:{'Content-Type':'application/json'},body:corpo,keepalive:true});}}catch(e){}};
rzCapi('PageView');
document.addEventListener('click',function(e){var a=e.target.closest('a[href*="wa.me"]');if(a){rzCapi('Contact',{content_name:'WhatsApp'});}});
